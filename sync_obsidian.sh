#!/usr/bin/env bash
# ==============================================================================
# Script: sync_obsidian.sh
# Mục đích:
# 1. Đồng bộ hóa Obsidian Vault "tnu-knowledge" sang máy Windows (nếu có mount OneDrive)
# 2. Đồng bộ hóa trực tiếp sang Homelab Server (10.10.10.103: /opt/stacks/tnu-knowledge-vault)
# 3. Commit và đẩy lên GitHub repo (git@github.com:bimm1010/tnuKnowledge.git)
# ==============================================================================

set -euo pipefail

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_DIR="$BASE_DIR/tnu-knowledge"
HOMELAB_HOST="root@10.10.10.103"
HOMELAB_DEST="/opt/stacks/tnu-knowledge-vault"

WIN_DOCS_VAULT="/mnt/c/Users/thanh/OneDrive/Documents/Obsidian Vault/tnu-knowledge"
WIN_DESKTOP_VAULT="/mnt/c/Users/thanh/OneDrive/Desktop/knowledge/tnu-knowledge"

echo "🔄 [TNU Obsidian Sync] Bắt đầu đồng bộ kho tri thức eTNU..."

# 1. Đồng bộ sang Windows Obsidian (Documents & Desktop) nếu có môi trường WSL
if [ -d "/mnt/c/Users/thanh/OneDrive/Documents/Obsidian Vault" ]; then
    echo "📂 Đồng bộ sang Windows Documents Vault..."
    mkdir -p "$WIN_DOCS_VAULT"
    cp -u -r "$VAULT_DIR"/* "$WIN_DOCS_VAULT/" 2>/dev/null || cp -r "$VAULT_DIR"/* "$WIN_DOCS_VAULT/" || true
fi

if [ -d "/mnt/c/Users/thanh/OneDrive/Desktop/knowledge" ]; then
    echo "📂 Đồng bộ sang Windows Desktop Knowledge Vault..."
    mkdir -p "$WIN_DESKTOP_VAULT"
    cp -u -r "$VAULT_DIR"/* "$WIN_DESKTOP_VAULT/" 2>/dev/null || cp -r "$VAULT_DIR"/* "$WIN_DESKTOP_VAULT/" || true
fi

# 2. Đồng bộ sang Homelab Host qua SSH + tar pipeline (không cần rsync)
echo "🚀 Đồng bộ sang Homelab Host ($HOMELAB_HOST:$HOMELAB_DEST)..."
if ssh -o BatchMode=yes -o ConnectTimeout=5 "$HOMELAB_HOST" "echo ping" >/dev/null 2>&1; then
    ssh "$HOMELAB_HOST" "mkdir -p $HOMELAB_DEST"
    tar -C "$VAULT_DIR" -czf - . | ssh "$HOMELAB_HOST" "tar -xzf - -C $HOMELAB_DEST"
    echo "✅ [Homelab] Đã đồng bộ thành công sang $HOMELAB_HOST:$HOMELAB_DEST"
else
    echo "⚠️ [Homelab] Không kết nối được tới $HOMELAB_HOST (offline hoặc timeout)."
fi

# 3. Git auto commit & push
cd "$BASE_DIR"
if [ -d ".git" ]; then
    echo "📦 Đang đồng bộ Git..."
    git add tnu-knowledge/ sync_obsidian.sh
    if ! git diff-index --quiet HEAD --; then
        git commit -m "feat(obsidian): sync eTNU knowledge vault [$(date '+%Y-%m-%d %H:%M:%S')]"
        git push origin main || true
        echo "✅ [Git] Đã commit và đẩy lên GitHub thành công!"
    else
        echo "ℹ️ [Git] Không có thay đổi mới."
    fi
fi

TOTAL_FILES=$(find "$VAULT_DIR" -name "*.md" | wc -l)
echo "🎉 Hoàn tất! Vault tnu-knowledge có tổng cộng $TOTAL_FILES ghi chú Markdown."
