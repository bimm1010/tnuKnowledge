#!/usr/bin/env node

/**
 * eTNU Auto Git Sync - Tự động đồng bộ Tri thức eTNU lên GitHub
 *
 * Tính năng:
 * - Tự động phát hiện thay đổi (file PDF, giáo trình text, database câu hỏi JSON)
 * - Tự động `git add`, `git commit` kèm timestamp chi tiết
 * - Tự động `git push` lên GitHub (branch main)
 * - Hỗ trợ cả 2 chế độ:
 *     1. Chạy 1 lần (on-demand): `node auto_git_sync.js`
 *     2. Chạy thường trực (daemon/watch): `node auto_git_sync.js --watch`
 *     3. Cấu hình GitHub remote: `node auto_git_sync.js --set-remote <git_url>`
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoDir = __dirname;

// Hàm thực thi lệnh shell an toàn
function run(cmd, ignoreError = false) {
  try {
    return execSync(cmd, { cwd: repoDir, encoding: 'utf8', stdio: 'pipe' }).trim();
  } catch (err) {
    if (!ignoreError) {
      throw err;
    }
    return null;
  }
}

// Kiểm tra remote git
function getRemoteOrigin() {
  try {
    return run('git remote get-url origin', true);
  } catch (e) {
    return null;
  }
}

// Lấy danh sách file thay đổi
function getGitChanges() {
  const status = run('git status --porcelain', true);
  if (!status) return [];
  return status.split('\n').map(l => l.trim()).filter(Boolean);
}

// Hàm thực hiện commit và push
async function syncToGit(options = { quiet: false }) {
  const log = (...args) => {
    if (!options.quiet) console.log(...args);
  };

  const remote = getRemoteOrigin();
  const changes = getGitChanges();

  if (changes.length === 0) {
    log('ℹ️ [GIT-SYNC] Không có thay đổi nào mới. Trạng thái sạch (working tree clean).');
    return { success: true, changes: 0, pushed: false };
  }

  const now = new Date();
  const timeStr = now.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  const commitMsg = `feat(knowledge): auto-sync eTNU knowledge base [${timeStr}]`;

  log(`\n📦 [GIT-SYNC] Phát hiện ${changes.length} thay đổi mới:`);
  changes.slice(0, 5).forEach(c => log(`   - ${c}`));
  if (changes.length > 5) log(`   ... và ${changes.length - 5} file khác.`);

  try {
    // 1. Git add
    log('⏳ Đang chạy: git add -A ...');
    run('git add -A');

    // 2. Git commit
    log(`📝 Đang commit: "${commitMsg}" ...`);
    run(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`);

    // 3. Git push
    if (!remote) {
      log('\n⚠️ [LƯU Ý] Chưa cấu hình Remote GitHub!');
      log('👉 Bạn hãy tạo repo trên GitHub và chạy lệnh sau để kết nối:');
      log(`   node auto_git_sync.js --set-remote <link_repo_github_cua_ban>\n`);
      return { success: true, changes: changes.length, committed: true, pushed: false };
    }

    log(`🚀 Đang đẩy dữ liệu lên GitHub (${remote})...`);
    run('git push origin main');
    log('✅ [GIT-SYNC] Đồng bộ thành công lên GitHub! Máy ngoài có thể pull về ngay.\n');
    return { success: true, changes: changes.length, committed: true, pushed: true };
  } catch (err) {
    console.error('❌ [GIT-SYNC] Lỗi khi thực hiện Git Sync:', err.message);
    if (err.stderr) console.error(err.stderr.toString());
    return { success: false, error: err.message };
  }
}

// Chế độ Watch (giám sát liên tục theo thời gian thực)
function startWatcher() {
  console.log('👀 [GIT-SYNC DAEMON] Đã bật chế độ giám sát tự động!');
  console.log(`📁 Thư mục theo dõi: ${repoDir}`);
  const remote = getRemoteOrigin();
  console.log(`🌐 GitHub Remote: ${remote || 'Chưa cấu hình (chạy --set-remote để cấu hình)'}`);
  console.log('------------------------------------------------------------');

  let syncTimeout = null;
  const triggerDebouncedSync = (reason) => {
    if (syncTimeout) clearTimeout(syncTimeout);
    syncTimeout = setTimeout(() => {
      console.log(`\n🔔 Kích hoạt đồng bộ do: ${reason}`);
      syncToGit();
    }, 5000); // Đợi 5 giây sau lần thay đổi cuối cùng để file ghi hoàn tất
  };

  // 1. Theo dõi filesystem
  fs.watch(repoDir, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    // Bỏ qua .git, node_modules, log
    if (
      filename.includes('.git') ||
      filename.includes('node_modules') ||
      filename.endsWith('.log')
    ) {
      return;
    }
    triggerDebouncedSync(`Phát hiện file thay đổi: ${filename}`);
  });

  // 2. Quét định kỳ mỗi 10 phút một lần (phòng trường hợp fs.watch sót event)
  setInterval(() => {
    const changes = getGitChanges();
    if (changes.length > 0) {
      triggerDebouncedSync('Quét định kỳ phát hiện thay đổi tồn đọng');
    }
  }, 10 * 60 * 1000);

  // Chạy thử 1 lần lúc khởi động
  syncToGit();
}

// Xử lý tham số dòng lệnh CLI
const args = process.argv.slice(2);

if (args.includes('--set-remote')) {
  const remoteIdx = args.indexOf('--set-remote') + 1;
  const remoteUrl = args[remoteIdx];
  if (!remoteUrl) {
    console.error('❌ Thiếu URL. Ví dụ: node auto_git_sync.js --set-remote https://github.com/user/etnu.git');
    process.exit(1);
  }

  try {
    const currentRemote = getRemoteOrigin();
    if (currentRemote) {
      run(`git remote set-url origin ${remoteUrl}`);
      console.log(`✅ Đã cập nhật remote origin thành: ${remoteUrl}`);
    } else {
      run(`git remote add origin ${remoteUrl}`);
      console.log(`✅ Đã thêm remote origin: ${remoteUrl}`);
    }
    run('git branch -M main');
    console.log('🎉 Sẵn sàng! Hãy chạy `node auto_git_sync.js` để đẩy code lần đầu.');
  } catch (err) {
    console.error('❌ Lỗi thiết lập remote:', err.message);
  }
  process.exit(0);
}

if (args.includes('--status')) {
  console.log('📊 [TRẠNG THÁI REPO eTNU]');
  console.log(`📁 Đường dẫn: ${repoDir}`);
  console.log(`🌐 Remote Origin: ${getRemoteOrigin() || 'Chưa cấu hình'}`);
  const changes = getGitChanges();
  console.log(`📝 Số file thay đổi: ${changes.length}`);
  if (changes.length > 0) {
    changes.forEach(c => console.log(`   - ${c}`));
  }
  const lastCommit = run('git log -1 --pretty=format:"%h - %s (%cr)"', true);
  console.log(`📌 Commit gần nhất: ${lastCommit || 'Chưa có'}`);
  process.exit(0);
}

if (args.includes('--watch')) {
  startWatcher();
} else {
  // Mặc định: sync 1 lần
  syncToGit();
}
