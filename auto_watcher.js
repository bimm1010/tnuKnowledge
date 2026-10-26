/**
 * Daemon Giám sát Tự động & Bóc tách Tri thức eTNU (Continuous Auto-Ingest & Git Sync Engine)
 * - Tự động định kỳ (mỗi 3 phút) kiểm tra Git Remote GitHub: tự động pull, tự động re-index, tự động reload bot
 * - Tự động phát hiện chênh lệch CSDL giữa etnu_full_qa_database.json và etnu_knowledge_index.json để rebuild tức thì
 * - Tự động theo dõi các file PDF mới tải về trong etnu-knowledge/ -> trích xuất text sang giao_trinh_text/
 * - Cung cấp HTTP Webhook trên port 8888 (POST /sync, GET /sync, GET /health, GET /index.json) cho n8n, GitHub, hoặc Discord
 * - Tự động thông báo Discord Bot (port 8889) nạp dữ liệu mới vào RAM
 * - Gửi thông báo đến Discord Alert Channel (1559811340414230558) khi hoàn tất đồng bộ
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const { execSync, fork } = require('child_process');

const baseDir = __dirname;
const PORT = 8888;

// Đọc BOT_TOKEN từ environment hoặc file .env bí mật (không commit lên git)
let BOT_TOKEN = process.env.DISCORD_BOT_TOKEN || process.env.BOT_TOKEN || '';
const envPath = path.join(baseDir, '.env');
if (!BOT_TOKEN && fs.existsSync(envPath)) {
  const match = fs.readFileSync(envPath, 'utf8').match(/DISCORD_BOT_TOKEN=(.*)/);
  if (match) BOT_TOKEN = match[1].trim();
}
const ALERT_CHANNEL_ID = process.env.ALERT_CHANNEL_ID || '1559811340414230558';

let isSyncing = false;
let lastSyncTime = 0;

// 1. Gửi thông báo Discord tới kênh Alert
async function sendDiscordAlert(title, message, color = 0x00F59B) {
  if (!BOT_TOKEN || !ALERT_CHANNEL_ID) return;
  const payload = JSON.stringify({
    embeds: [{
      title: title,
      description: message,
      color: color,
      timestamp: new Date().toISOString(),
      footer: { text: 'eTNU Auto-Sync Engine • Homelab LXC 109' }
    }]
  });

  const req = https.request(`https://discord.com/api/v10/channels/${ALERT_CHANNEL_ID}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bot ${BOT_TOKEN}`,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    },
    timeout: 5000
  }, (res) => {});
  req.on('error', () => {});
  req.write(payload);
  req.end();
}

// 2. Thông báo Discord Bot Hot-Reload RAM
function notifyBotReload() {
  const hosts = ['127.0.0.1', '10.10.10.70'];
  hosts.forEach(host => {
    try {
      const req = http.request({
        hostname: host,
        port: 8889,
        path: '/reload',
        method: 'POST',
        timeout: 3000
      }, (res) => {
        let b = '';
        res.on('data', c => b += c);
        res.on('end', () => {
          console.log(`📡 Đã gửi tín hiệu Hot-Reload tới Bot (${host}:8889): ${b.trim()}`);
        });
      });
      req.on('error', () => {});
      req.end();
    } catch(e) {}
  });
}

// 3. Tái lập chỉ mục Smart Index
function rebuildSmartIndex() {
  console.log('🔄 Đang tái lập chỉ mục tìm kiếm mờ & Chunks (build_smart_index.js)...');
  try {
    execSync(`node "${path.join(baseDir, 'build_smart_index.js')}"`, { cwd: baseDir, stdio: 'inherit' });
    console.log('✅ Hoàn tất tái lập chỉ mục!');
    notifyBotReload();
    return true;
  } catch (err) {
    console.error('❌ Lỗi chạy build_smart_index.js:', err.message);
    return false;
  }
}

// 4. Kiểm tra độ nhất quán CSDL (Consistency Check)
function checkDatabaseConsistency() {
  try {
    const qaDbFile = path.join(baseDir, 'etnu_full_qa_database.json');
    const idxFile = path.join(baseDir, 'etnu_knowledge_index.json');
    if (!fs.existsSync(qaDbFile)) return;

    const qaList = JSON.parse(fs.readFileSync(qaDbFile, 'utf8'));
    let idxQACount = 0;
    if (fs.existsSync(idxFile)) {
      try {
        const idxData = JSON.parse(fs.readFileSync(idxFile, 'utf8'));
        idxQACount = (idxData.qa || []).length;
      } catch (_) {}
    }

    if (qaList.length !== idxQACount) {
      console.log(`\n⚠️ [CONSISTENCY] Phát hiện chênh lệch CSDL! Database: ${qaList.length} câu, Index: ${idxQACount} câu.`);
      rebuildSmartIndex();
    }
  } catch (e) {
    console.warn('Lỗi kiểm tra tính nhất quán:', e.message);
  }
}

// 5. Kiểm tra và Auto-Pull từ GitHub (Periodic Git Polling)
function checkAndPullGit() {
  if (isSyncing) return;
  try {
    const remote = execSync('git remote get-url origin', { cwd: baseDir, encoding: 'utf8', stdio: 'pipe' }).trim();
    if (!remote) return;

    // Fetch thông tin mới nhất từ remote
    execSync('git fetch origin main', { cwd: baseDir, stdio: 'pipe', timeout: 20000 });
    const localHash = execSync('git rev-parse HEAD', { cwd: baseDir, encoding: 'utf8', stdio: 'pipe' }).trim();
    const remoteHash = execSync('git rev-parse origin/main', { cwd: baseDir, encoding: 'utf8', stdio: 'pipe' }).trim();

    if (localHash !== remoteHash) {
      console.log(`\n🔄 [AUTO-PULL] Phát hiện commit mới trên GitHub (${remoteHash.slice(0, 7)})! Đang đồng bộ về...`);
      execSync('git pull --rebase --autostash origin main', { cwd: baseDir, stdio: 'inherit', timeout: 30000 });
      console.log('✅ [AUTO-PULL] Đã kéo dữ liệu mới nhất từ GitHub thành công!');
      
      rebuildSmartIndex();
      console.log('✅ [AUTO-PULL] Đã cập nhật xong dữ liệu và reload Bot.');
    } else {
      // Nếu remote không đổi, kiểm tra nếu local có thay đổi chưa commit
      const status = execSync('git status --porcelain', { cwd: baseDir, encoding: 'utf8', stdio: 'pipe' }).trim();
      if (status) {
        console.log('📦 [AUTO-PUSH] Phát hiện dữ liệu mới ghi cục bộ, đang đẩy lên GitHub...');
        try {
          execSync(`node "${path.join(baseDir, 'auto_git_sync.js')}"`, { cwd: baseDir, stdio: 'inherit', timeout: 30000 });
        } catch (_) {}
      }
    }
  } catch (err) {
    console.warn('⚠️ Lỗi kiểm tra Git Remote (sẽ thử lại sau):', err.message);
  }

  // Luôn kiểm tra tính nhất quán CSDL
  checkDatabaseConsistency();
}

// 6. Bóc tách file PDF mới tải về
async function processPdfFile(pdfPath) {
  try {
    const fileName = path.basename(pdfPath);
    if (!fileName.toLowerCase().endsWith('.pdf')) return;

    const courseDir = path.dirname(path.dirname(pdfPath));
    const textDir = path.join(courseDir, 'giao_trinh_text');
    if (!fs.existsSync(textDir)) fs.mkdirSync(textDir, { recursive: true });

    const txtFile = path.join(textDir, fileName.replace(/\.pdf$/i, '.txt'));
    console.log(`\n⚡ [AUTO-INGEST] Phát hiện tài liệu mới: ${fileName}`);
    console.log(`📄 Đang bóc tách văn bản...`);

    const { PDFParse } = require('pdf-parse');
    const buf = fs.readFileSync(pdfPath);
    const parser = new PDFParse({ data: buf });
    await parser.load();
    const res = await parser.getText();
    const content = typeof res === 'string' ? res : (res.text || JSON.stringify(res));

    fs.writeFileSync(txtFile, content, 'utf8');
    console.log(`✅ Đã trích xuất xong văn bản: ${path.basename(txtFile)} (${Math.round(content.length / 1024)} KB)`);

    rebuildSmartIndex();

    try {
      execSync(`node "${path.join(baseDir, 'auto_git_sync.js')}"`, { cwd: baseDir, stdio: 'inherit' });
    } catch (e) {
      console.warn('⚠️ Lỗi Git push:', e.message);
    }
  } catch (err) {
    console.error('⚠️ Lỗi xử lý PDF:', err.message);
  }
}

// 7. Theo dõi File System (PDF files watcher)
const watchedDirs = [];
fs.readdirSync(baseDir).forEach(item => {
  const full = path.join(baseDir, item);
  if (item.startsWith('A0') && fs.statSync(full).isDirectory()) {
    const tailieuDir = path.join(full, 'tailieu');
    if (fs.existsSync(tailieuDir)) {
      watchedDirs.push(tailieuDir);
      let debounceTimer = null;
      fs.watch(tailieuDir, (eventType, filename) => {
        if (filename && filename.toLowerCase().endsWith('.pdf')) {
          const filePath = path.join(tailieuDir, filename);
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
              processPdfFile(filePath);
            }
          }, 1500);
        }
      });
    }
  }
});
console.log(`👀 Đang giám sát tự động ${watchedDirs.length} thư mục tài liệu môn học.`);

// 8. Chạy định kỳ Auto-Pull Git mỗi 3 phút
setInterval(checkAndPullGit, 3 * 60 * 1000);
// Chạy ngay lần đầu khi khởi động daemon
setTimeout(checkAndPullGit, 5000);

// 9. HTTP Webhook Server (Port 8888)
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/health') {
    let indexStats = { qa: 0, chunks: 0 };
    const idxFile = path.join(baseDir, 'etnu_knowledge_index.json');
    if (fs.existsSync(idxFile)) {
      try {
        const d = JSON.parse(fs.readFileSync(idxFile, 'utf8'));
        indexStats.qa = (d.qa || []).length;
        indexStats.chunks = (d.chunks || []).length;
      } catch (e) {}
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok', syncing: isSyncing, ...indexStats }));
  }

  // Cung cấp file index mới nhất qua HTTP
  if (url.pathname === '/index.json' && req.method === 'GET') {
    const idxFile = path.join(baseDir, 'etnu_knowledge_index.json');
    if (fs.existsSync(idxFile)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return fs.createReadStream(idxFile).pipe(res);
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('Index not found');
  }

  // Webhook đồng bộ toàn diện: Git pull -> Crawl Moodle -> Re-index -> Git push -> Reload Bot
  if (url.pathname === '/sync' && (req.method === 'POST' || req.method === 'GET')) {
    if (isSyncing || Date.now() - lastSyncTime < 60000) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: false, message: 'Đang trong tiến trình đồng bộ hoặc vừa chạy trong 60s qua.' }));
    }

    lastSyncTime = Date.now();
    isSyncing = true;
    console.log(`\n🚀 [WEBHOOK] Nhận tín hiệu kích hoạt đồng bộ toàn diện...`);

    // 1. Pull Git trước
    try {
      execSync('git pull --rebase --autostash origin main', { cwd: baseDir, stdio: 'inherit', timeout: 30000 });
    } catch (e) {
      console.warn('⚠️ Lỗi Git pull trong webhook:', e.message);
    }

    // 2. Chạy Moodle crawler sync.js
    const syncChild = fork(path.join(baseDir, 'sync.js'), [], { stdio: 'inherit' });
    syncChild.on('exit', (code) => {
      isSyncing = false;
      console.log(`✅ [WEBHOOK] Crawl Moodle hoàn tất (Exit code: ${code}). Bắt đầu re-index...`);
      
      rebuildSmartIndex();

      try {
        execSync(`node "${path.join(baseDir, 'auto_git_sync.js')}"`, { cwd: baseDir, stdio: 'inherit' });
      } catch (e) {
        console.warn('⚠️ Lỗi Git push:', e.message);
      }
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      success: true,
      message: 'Tiến trình đồng bộ toàn diện eTNU đã được kích hoạt!'
    }));
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🌐 eTNU Auto-Ingest & Git Sync Engine đang chạy tại: http://0.0.0.0:${PORT}`);
});
