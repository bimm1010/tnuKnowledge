#!/usr/bin/env bash
set -e

DIR="/Volumes/MacEX/MacStorageEX/.gemini/antigravity/scratch/etnu-knowledge"
cd "$DIR"

# 1. Chạy sync toàn bộ môn học và tài liệu mới từ Moodle API
/opt/homebrew/bin/node sync.js >> "$DIR/sync.log" 2>&1

# 2. Tự động commit và đẩy lên GitHub nếu có tài liệu mới
/opt/homebrew/bin/node auto_git_sync.js >> "$DIR/sync.log" 2>&1 || true

# 3. Yêu cầu Discord Bot hot-reload RAM
curl -s -m 5 http://127.0.0.1:8889/reload > /dev/null 2>&1 || true
