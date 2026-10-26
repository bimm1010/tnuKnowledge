/**
 * Daemon Giám sát Tự động & Bóc tách Tri thức eTNU (Continuous Auto-Ingest)
 * - Tự động theo dõi các file PDF mới tải về trong etnu-knowledge/
 * - Tự động bóc tách text sang giao_trinh_text/
 * - Tự động tái tạo Smart Index (etnu_knowledge_index.json)
 * - Cung cấp HTTP Webhook trên port 8888 để n8n kích hoạt đồng bộ từ xa
 * - Tự động thông báo Mac Mini Hot-Reload dữ liệu mới vào RAM
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync, fork } = require('child_process');

const baseDir = __dirname;
const PORT = 8888;

let isSyncing = false;

// Hàm thông báo Mac Mini Hot-Reload
function notifyMacMiniReload() {
  const macHosts = ['127.0.0.1', '10.10.10.70', '100.110.189.94'];
  macHosts.forEach(host => {
    try {
      const req = http.request({
        hostname: host,
        port: 8889,
        path: '/reload',
        method: 'POST',
        timeout: 3000
      }, (res) => {
        console.log(`📡 Đã thông báo Mac Mini (${host}:8889) nạp dữ liệu mới vào RAM!`);
      });
      req.on('error', () => {});
      req.end();
    } catch(e) {}
  });
}

// 1. Hàm bóc tách 1 file PDF cụ thể
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

    console.log(`🔄 Đang tái lập chỉ mục tìm kiếm mờ & Chunks...`);
    execSync(`node "${path.join(baseDir, 'build_smart_index.js')}"`, { stdio: 'inherit' });
    console.log(`🎯 Tri thức mới đã sẵn sàng!\n`);

    notifyMacMiniReload();

    try {
      execSync(`node "${path.join(baseDir, 'auto_git_sync.js')}"`, { stdio: 'inherit' });
    } catch (e) {
      console.warn('⚠️ Lỗi Git push:', e.message);
    }
  } catch (err) {
    console.error('⚠️ Lỗi xử lý PDF:', err.message);
  }
}

// 2. File Watcher theo dõi thư mục
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

// 3. HTTP Server
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

  // Cung cấp file index mới nhất qua HTTP để Mac Mini nạp vào RAM
  if (url.pathname === '/index.json' && req.method === 'GET') {
    const idxFile = path.join(baseDir, 'etnu_knowledge_index.json');
    if (fs.existsSync(idxFile)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return fs.createReadStream(idxFile).pipe(res);
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('Index not found');
  }

  if (url.pathname === '/sync' && (req.method === 'POST' || req.method === 'GET')) {
    if (isSyncing) {
      res.writeHead(429, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: false, message: 'Đang trong tiến trình đồng bộ, vui lòng đợi.' }));
    }

    isSyncing = true;
    console.log(`\n🚀 [WEBHOOK] Nhận tín hiệu kích hoạt đồng bộ từ n8n...`);
    
    const syncChild = fork(path.join(baseDir, 'sync.js'), [], { stdio: 'inherit' });
    syncChild.on('exit', (code) => {
      isSyncing = false;
      console.log(`✅ [WEBHOOK] Hoàn tất tiến trình đồng bộ (Exit code: ${code}).\n`);
      notifyMacMiniReload();
      try {
        execSync(`node "${path.join(baseDir, 'auto_git_sync.js')}"`, { stdio: 'inherit' });
      } catch (e) {
        console.warn('⚠️ Lỗi Git push:', e.message);
      }
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      success: true,
      message: 'Tiến trình đồng bộ, tải tài liệu & bóc tách tự động đã được kích hoạt!'
    }));
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🌐 eTNU Auto-Ingest Service đang chạy tại: http://0.0.0.0:${PORT}`);
});
