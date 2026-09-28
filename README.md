# 🌿 EcoLinux Revive (Orchestrated by Antigravity AI)

> **Misi:** Menyelamatkan smartphone bekas, TV Box STB lawas (B860H / HG680P), laptop tua, dan mini PC agar tidak menjadi sampah elektronik (**e-waste**), dengan mengubahnya menjadi server Linux produktif dan hemat daya, diorkestrasi secara otomatis oleh **Antigravity AI**.

---

## 🚀 Fitur Aplikasi

1. **📱 Katalog Gadget & Triage:**
   - Rekomendasi penanganan spesifik untuk Smartphone Android (via Termux/PRoot), TV Box Amlogic & Allwinner (via Armbian), Laptop tua (x86_64/i686), Thin Client, dan Raspberry Pi 1/2.
   - Info arsitektur prosesor (`aarch64`, `armv7`, `x86_64`), estimasi konsumsi daya (Watt), dan profil servis terbaik.

2. **⚡ Metode Akses Remote (Headless):**
   - Panduan SSH Termux (port 8022).
   - OpenSSH server di Debian / Armbian / Alpine.
   - ADB over Wi-Fi untuk kendali tanpa layar sentuh.
   - Serial UART/TTL untuk unbrick STB.

3. **🧠 Antigravity AI Orchestrator:**
   - Pola Autonomous Goal (`/goal`) untuk hands-off provisioning.
   - Subagent roles (Auditor, Playbook Executor, Security Hardener, Telemetry Watcher).
   - Auto-healing & monitoring wake-lock.

4. **🛠️ Playbook & Script Generator Interaktif:**
   - Kustomisasi IP, port, user, hostname, dan service (AdGuard Home, FileBrowser, Web Server Nginx/PHP/SQLite, Telemetri).
   - Hasilkan file skrip Bash `.sh` yang dapat langsung diunduh atau disalin dengan 1 klik.
   - Hasilkan prompt Antigravity siap pakai.

5. **💻 Terminal Simulator Interaktif:**
   - Coba perintah simulasi `connect`, `status`, `neofetch`, `install-adguard`, `antigravity-sync`, dan `clear`.

6. **♻️ Kalkulator Dampak E-Waste:**
   - Simulasi interaktif penghitungan Kg limbah elektronik dicegah, jejak karbon embodied CO₂ yang dihemat, serta perbandingan biaya dengan membeli hardware mini PC baru.

---

## 🏃 Cara Menjalankan

Cukup jalankan script launcher di Termux atau terminal Linux:

```bash
bash ~/start_ecolinux_revive.sh
```

Atau langsung dari folder proyek:

```bash
cd ~/ecolinux-revive-antigravity
python3 -m http.server 8080
```

Buka browser Anda di:
👉 **`http://localhost:8080`** atau **`http://127.0.0.1:8080`**

---

## 🎨 Desain & Filosofi
- **Nuansa Green Recycle:** Palet warna hijau zamrud (*emerald*), *lime eco*, dan *forest dark* yang merefleksikan teknologi ramah lingkungan.
- **Standar Web Murni:** HTML5, CSS modern (*responsive flexbox & grid, glassmorphism*), dan vanilla JavaScript tanpa dependensi eksternal yang berat.
