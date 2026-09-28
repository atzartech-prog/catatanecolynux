#!/usr/bin/env bash
# ==============================================================================
# EcoLinux Revive Launcher
# ==============================================================================

PROJECT_DIR="/data/data/com.termux/files/home/ecolinux-revive-antigravity"
cd "$PROJECT_DIR" || exit 1

PORT=8080
while lsof -i :$PORT >/dev/null 2>&1 || netstat -tuln 2>/dev/null | grep -q ":$PORT "; do
  PORT=$((PORT + 1))
done

echo "=================================================================="
echo "🌿 EcoLinux Revive - Orchestrated by Antigravity AI"
echo "=================================================================="
echo "🌱 Server lokal berjalan di port: $PORT"
echo "🌐 Buka browser Anda di:"
echo "   👉 http://localhost:$PORT"
echo "   👉 http://127.0.0.1:$PORT"
echo "=================================================================="
echo "Tekan CTRL + C untuk menghentikan server."

python3 -m http.server "$PORT"
