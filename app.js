/**
 * EcoLinux Revive - Orchestrated by Antigravity
 * Interactive Frontend Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. DATA GADGET & RECYCLE PROFILES
  // ==========================================
  const gadgetsData = [
    {
      id: 'android-termux',
      name: 'Smartphone Android Bekas',
      subtitle: 'Snapdragon / MediaTek / Exynos (Android 7 - 14)',
      category: 'android',
      icon: '📱',
      badge: 'Paling Populer',
      powerWatt: 3.5,
      weightKg: 0.2,
      arch: 'aarch64 / armv8l',
      ramRange: '2 GB – 6 GB',
      storage: '16 GB – 64 GB eMMC/UFS',
      osTarget: 'Termux + PRoot Ubuntu / Alpine',
      roles: ['AdGuard Home', 'FileBrowser', 'Python/Node Bot', 'Web Server'],
      difficulty: 'Sangat Mudah (Tanpa Root)',
      description: 'Manfaatkan smartphone jadul Anda yang baterai atau layarnya sudah aus menjadi micro-server 24/7 super hemat listrik.',
      setupSteps: [
        'Install aplikasi <strong>Termux</strong> versi F-Droid (jangan dari Play Store).',
        'Buka Termux, jalankan: <code>pkg update && pkg install openssh -y</code>.',
        'Atur password SSH: <code>passwd</code> lalu jalankan daemon: <code>sshd</code>.',
        'Kunci proses agar tidak tertidur di latar belakang: <code>termux-wake-lock</code>.',
        'Cek IP HP Anda dengan <code>ip addr</code> (biasanya 192.168.x.x).',
        'Serahkan ke Antigravity via SSH port <code>8022</code> untuk instalasi service otomatis!'
      ],
      antigravityTip: 'Antigravity dapat memonitor status baterai melalui `termux-battery-status` dan memberi peringatan jika suhu di atas 45°C.'
    },
    {
      id: 'stb-amlogic',
      name: 'STB TV Box (B860H / HG680P)',
      subtitle: 'Amlogic S905X / S905X2 / S905W (Ex-Indihome / FirstMedia)',
      category: 'stb',
      icon: '📺',
      badge: 'Andalan Komunitas',
      powerWatt: 5.0,
      weightKg: 0.35,
      arch: 'aarch64 (ARMv8)',
      ramRange: '1 GB – 2 GB',
      storage: '8 GB Internal + MicroSD slot',
      osTarget: 'Armbian Linux (Debian/Ubuntu Server)',
      roles: ['Pi-Hole / AdGuard', 'Docker Micro', 'Gitea', 'Samba/NAS'],
      difficulty: 'Menengah (Boot via SDCard)',
      description: 'TV Box ex-layanan ISP banyak terbuang sia-sia padahal prosesor quad-core Amlogic-nya sangat tangguh untuk server Linux Debian native.',
      setupSteps: [
        'Flash image Armbian Amlogic (meson-gxl) ke kartu MicroSD menggunakan balenaEtcher atau Rufus.',
        'Tentukan DTB yang sesuai di file <code>uEnv.txt</code> (misal: <code>gxl_p212_1g.dtb</code> atau <code>gxl_p212_2g.dtb</code>).',
        'Colok MicroSD ke STB, tekan tombol reset di lubang AV dengan tusuk gigi sambil colok adaptor power (metode toothpick).',
        'STB akan boot ke Armbian. Sambungkan kabel LAN router.',
        'Login via SSH: <code>ssh root@&lt;ip-stb&gt;</code> (password default: <code>1234</code>).',
        'Biarkan Antigravity mengamankan SSH dan memasang AdGuard / Docker.'
      ],
      antigravityTip: 'Antigravity dapat memeriksa kernel log (`dmesg`) untuk memastikan peripheral Wi-Fi dan USB berjalan stabil di Armbian.'
    },
    {
      id: 'old-laptop-x86',
      name: 'Laptop Jadul / Netbook',
      subtitle: 'Intel Core 2 Duo, Celeron, Atom, AMD E1 (64-bit / 32-bit)',
      category: 'laptop',
      icon: '💻',
      badge: 'UPS Alami (Ada Baterai)',
      powerWatt: 18.0,
      weightKg: 2.1,
      arch: 'x86_64 / i686',
      ramRange: '2 GB – 8 GB DDR2/DDR3',
      storage: '120 GB – 500 GB HDD/SSD',
      osTarget: 'Debian Minimal / Alpine Linux / AntiX',
      roles: ['Docker Host', 'Nextcloud', 'Media Server (Jellyfin)', 'CI/CD Runner'],
      difficulty: 'Mudah',
      description: 'Laptop lawas punya keuntungan besar: keyboard bawaan untuk debug darurat, serta baterai internal yang berfungsi seperti UPS pencegah mati lampu mendadak!',
      setupSteps: [
        'Download ISO <strong>Debian Minimal Netinst</strong> atau <strong>Alpine Linux</strong>.',
        'Buat bootable USB flashdisk dengan Rufus atau Ventoy.',
        'Boot laptop ke BIOS, aktifkan "Wake on LAN" atau "Restore on AC Power Loss" (jika tersedia).',
        'Install Linux tanpa Desktop Environment (Headless CLI mode) agar hemat RAM (< 150MB RAM saat idle).',
        'Edit file <code>/etc/systemd/logind.conf</code>: set <code>HandleLidSwitch=ignore</code> agar laptop tidak sleep saat layar ditutup.',
        'Orkestrasikan via SSH dari Antigravity workstation!'
      ],
      antigravityTip: 'Antigravity dapat mengotomatisasi konfigurasi TLP power management untuk memperpanjang usia baterai laptop tua.'
    },
    {
      id: 'thin-client',
      name: 'Thin Client / PC Mini Kantor',
      subtitle: 'HP t520/t620, Dell Wyse, Fujitsu Futro',
      category: 'laptop',
      icon: '🖥️',
      badge: 'Fanless & Heavy Duty',
      powerWatt: 9.0,
      weightKg: 1.2,
      arch: 'x86_64',
      ramRange: '4 GB – 16 GB DDR3/DDR4',
      storage: '16 GB Flash / M.2 SATA',
      osTarget: 'Debian Server / Proxmox VE / Alpine',
      roles: ['Proxmox Home Lab', 'Docker Swarm', 'Home Assistant', 'WireGuard VPN'],
      difficulty: 'Mudah',
      description: 'Perangkat eks-kantor yang didesain tanpa kipas (silent), tahan menyala bertahun-tahun tanpa henti, dan sangat efisien daya.',
      setupSteps: [
        'Nyalakan dan masuk BIOS (tombol F10 atau F12), atur Booting dari USB.',
        'Install Debian Server atau Alpine Linux pada drive SATA/M.2.',
        'Aktifkan service SSH dan pastikan IP statis dikonfigurasi di router.',
        'Cabut kabel monitor dan keyboard, letakkan perangkat di sudut rak router.'
      ],
      antigravityTip: 'Sangat cocok untuk cluster Docker swarm multi-node yang diorkestrasi agen Antigravity.'
    },
    {
      id: 'raspberry-pi-old',
      name: 'Raspberry Pi 1 / 2 / Zero W',
      subtitle: 'ARMv6 / ARMv7 (512MB - 1GB RAM)',
      category: 'sbc',
      icon: '🍓',
      badge: 'Irit Listrik (2W)',
      powerWatt: 2.2,
      weightKg: 0.05,
      arch: 'armv6l / armv7l (32-bit)',
      ramRange: '512 MB – 1 GB',
      storage: 'MicroSD 16GB+',
      osTarget: 'Raspberry Pi OS Lite / DietPi',
      roles: ['Pi-hole DNS', 'MQTT Broker', 'Zigbee Gateway', 'NTP Server'],
      difficulty: 'Sangat Mudah',
      description: 'Pi model lawas sering disimpan karena lambat untuk desktop modern, namun sangat mumpuni sebagai DNS sinkhole atau MQTT IoT broker.',
      setupSteps: [
        'Gunakan Raspberry Pi Imager, pilih OS: <strong>Raspberry Pi OS Lite (Legacy 32-bit)</strong> atau <strong>DietPi</strong>.',
        'Pada menu pengaturan rahasia (roda gigi), aktifkan SSH dan masukkan SSID Wi-Fi.',
        'Flash ke MicroSD, tancapkan ke Pi, dan hubungkan power micro-USB.',
        'Pi langsung online di jaringan Anda tanpa perlu dicolok layar.'
      ],
      antigravityTip: 'Gunakan binary Go kompilasi statis (seperti AdGuard Home armv6) agar tidak terkendala limitasi arsitektur ARM lawas.'
    },
    {
      id: 'stb-allwinner',
      name: 'TV Box Allwinner H3 / H6',
      subtitle: 'Tanix TX6, Sunvell, X96 Air (Budget Box)',
      category: 'stb',
      icon: '📦',
      badge: 'Opsi Murah Meriah',
      powerWatt: 6.0,
      weightKg: 0.3,
      arch: 'aarch64 / armv7l',
      ramRange: '1 GB – 4 GB',
      storage: '8 GB – 32 GB eMMC',
      osTarget: 'Armbian for Allwinner',
      roles: ['Micro Web Server', 'Torrent Downloader Headless', 'Local DNS'],
      difficulty: 'Menengah',
      description: 'Chipset Allwinner terkenal murah dan melimpah di pasaran TV box bekas dengan dukungan kernel Linux Armbian yang luas.',
      setupSteps: [
        'Download image Armbian khusus Allwinner SoC.',
        'Tulis ke kartu SD kecepatan tinggi Class 10.',
        'Boot TV box sambil menahan tombol recovery di port AV atau tombol tersembunyi bawah bodi.',
        'Konfigurasi SSH dan nikmati server Linux hemat tempat.'
      ],
      antigravityTip: 'Pasang heatsink tambahan jika TV box memakai SoC Allwinner H6 karena suhu operasionalnya relatif hangat.'
    }
  ];

  // ==========================================
  // 2. DOM ELEMENTS & INITIALIZATION
  // ==========================================
  const gadgetGrid = document.getElementById('gadget-grid');
  const gadgetSearch = document.getElementById('gadget-search');
  const gadgetFilter = document.getElementById('gadget-filter');
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const themeToggle = document.getElementById('theme-toggle');

  // Modal elements
  const deviceModal = document.getElementById('device-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDismissBtn = document.getElementById('modal-dismiss-btn');
  const modalApplyBtn = document.getElementById('modal-apply-builder-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalIcon = document.getElementById('modal-icon');
  const modalBody = document.getElementById('modal-body-content');

  // Builder elements
  const cfgPlatform = document.getElementById('cfg-platform');
  const cfgIp = document.getElementById('cfg-ip');
  const cfgPort = document.getElementById('cfg-port');
  const cfgUser = document.getElementById('cfg-user');
  const cfgHostname = document.getElementById('cfg-hostname');
  const btnGeneratePlaybook = document.getElementById('btn-generate-playbook');
  const generatedBash = document.getElementById('generated-bash');
  const generatedOrch = document.getElementById('generated-orch');
  const generatedOneliner = document.getElementById('generated-oneliner');
  const btnDownloadSh = document.getElementById('btn-download-sh');
  const outTabs = document.querySelectorAll('.out-tab');
  const outViews = document.querySelectorAll('.out-view');

  // Calculator elements
  const inputDeviceCount = document.getElementById('input-device-count');
  const inputDeviceWatt = document.getElementById('input-device-watt');
  const inputHours = document.getElementById('input-hours');
  const inputNewCost = document.getElementById('input-new-cost');
  const valDeviceCount = document.getElementById('val-device-count');
  const valDeviceWatt = document.getElementById('val-device-watt');
  const valHours = document.getElementById('val-hours');
  const valNewCost = document.getElementById('val-new-cost');
  const calcEwasteKg = document.getElementById('calc-ewaste-kg');
  const calcCo2Kg = document.getElementById('calc-co2-kg');
  const calcMoneySaved = document.getElementById('calc-money-saved');
  const calcKwhYear = document.getElementById('calc-kwh-year');
  const metricWaste = document.getElementById('metric-waste');

  // Terminal Simulator elements
  const termOutput = document.getElementById('term-output');
  const termInput = document.getElementById('term-input');
  const termSubmit = document.getElementById('term-submit');
  const chipCmds = document.querySelectorAll('.chip-btn');

  // Toast
  const toast = document.getElementById('toast');

  let activeGadgetSelected = gadgetsData[0];

  // ==========================================
  // 3. RENDER GADGET CATALOG
  // ==========================================
  function renderGadgets() {
    const query = gadgetSearch.value.toLowerCase().trim();
    const filterCat = gadgetFilter.value;

    const filtered = gadgetsData.filter(g => {
      const matchCat = (filterCat === 'all') || (g.category === filterCat);
      const matchQuery = g.name.toLowerCase().includes(query) ||
                         g.subtitle.toLowerCase().includes(query) ||
                         g.description.toLowerCase().includes(query) ||
                         g.arch.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      gadgetGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <p style="font-size: 1.2rem; margin-bottom: 8px;">🌱 Tidak ada gadget yang cocok dengan pencarian.</p>
          <p style="font-size: 0.85rem;">Coba gunakan kata kunci umum seperti "Android", "STB", atau "x86".</p>
        </div>
      `;
      return;
    }

    gadgetGrid.innerHTML = filtered.map(item => `
      <div class="gadget-card" data-id="${item.id}">
        <div>
          <div class="gadget-top">
            <div class="gadget-icon-wrap">${item.icon}</div>
            <div class="gadget-title-wrap">
              <h3>${item.name}</h3>
              <span class="badge-pill">${item.badge}</span>
            </div>
          </div>
          <p class="gadget-desc">${item.description}</p>
          <div class="gadget-specs">
            <div class="spec-item">
              <strong>Arsitektur:</strong>
              <span>${item.arch}</span>
            </div>
            <div class="spec-item">
              <strong>Daya Idle:</strong>
              <span>~${item.powerWatt} Watt</span>
            </div>
            <div class="spec-item">
              <strong>RAM / ROM:</strong>
              <span>${item.ramRange}</span>
            </div>
            <div class="spec-item">
              <strong>OS Target:</strong>
              <span>${item.osTarget.split('+')[0]}</span>
            </div>
          </div>
          <div class="gadget-roles">
            ${item.roles.map(r => `<span class="role-tag">${r}</span>`).join('')}
          </div>
        </div>
        <div class="gadget-actions">
          <button class="btn btn-secondary btn-full btn-detail" data-id="${item.id}">📖 Panduan Setup</button>
          <button class="btn btn-primary btn-full btn-use" data-id="${item.id}">⚙️ Playbook</button>
        </div>
      </div>
    `).join('');

    // Attach click listeners to cards
    document.querySelectorAll('.btn-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openDetailModal(id);
      });
    });

    document.querySelectorAll('.btn-use').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        applyGadgetToBuilder(id);
        switchTab('playbook');
      });
    });
  }

  // ==========================================
  // 4. MODAL DETAIL SYSTEM
  // ==========================================
  function openDetailModal(id) {
    const gadget = gadgetsData.find(g => g.id === id);
    if (!gadget) return;

    activeGadgetSelected = gadget;
    modalIcon.textContent = gadget.icon;
    modalTitle.textContent = gadget.name;
    modalBadge.textContent = gadget.badge;

    modalBody.innerHTML = `
      <div style="margin-bottom: 16px;">
        <p style="color: var(--text-main); font-size: 0.95rem; margin-bottom: 6px;">${gadget.subtitle}</p>
        <p style="color: var(--text-muted); font-size: 0.85rem;">${gadget.description}</p>
      </div>

      <div class="gadget-specs" style="margin-bottom: 20px;">
        <div class="spec-item">
          <strong>CPU Architecture:</strong>
          <span>${gadget.arch}</span>
        </div>
        <div class="spec-item">
          <strong>Estimasi Konsumsi Listrik:</strong>
          <span>${gadget.powerWatt} Watt (~Rp ${Math.round(gadget.powerWatt * 24 * 365 / 1000 * 1444).toLocaleString('id-ID')}/tahun)</span>
        </div>
        <div class="spec-item">
          <strong>Tingkat Kesulitan:</strong>
          <span>${gadget.difficulty}</span>
        </div>
        <div class="spec-item">
          <strong>Rekomendasi OS:</strong>
          <span>${gadget.osTarget}</span>
        </div>
      </div>

      <h4 style="color: #fff; margin-bottom: 10px; font-size: 0.95rem;">🛠️ Langkah Persiapan Awal (Headless):</h4>
      <ol style="padding-left: 20px; color: var(--text-muted); font-size: 0.85rem; line-height: 1.7; margin-bottom: 18px;">
        ${gadget.setupSteps.map(step => `<li>${step}</li>`).join('')}
      </ol>

      <div class="method-tips" style="margin-top: 14px;">
        <strong>🧠 Antigravity Pro-Tip:</strong> ${gadget.antigravityTip}
      </div>
    `;

    deviceModal.style.display = 'flex';
  }

  function closeModal() {
    deviceModal.style.display = 'none';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalDismissBtn.addEventListener('click', closeModal);
  deviceModal.addEventListener('click', (e) => {
    if (e.target === deviceModal) closeModal();
  });

  modalApplyBtn.addEventListener('click', () => {
    if (activeGadgetSelected) {
      applyGadgetToBuilder(activeGadgetSelected.id);
      closeModal();
      switchTab('playbook');
    }
  });

  function applyGadgetToBuilder(id) {
    const gadget = gadgetsData.find(g => g.id === id);
    if (!gadget) return;

    if (gadget.category === 'android') {
      cfgPlatform.value = 'termux';
      cfgPort.value = '8022';
      cfgUser.value = 'u0_a150';
      cfgHostname.value = 'android-ecoserver';
      document.getElementById('role-wake').checked = true;
    } else if (gadget.category === 'stb') {
      cfgPlatform.value = 'debian';
      cfgPort.value = '22';
      cfgUser.value = 'root';
      cfgHostname.value = 'armbian-node';
      document.getElementById('role-wake').checked = false;
    } else {
      cfgPlatform.value = 'debian';
      cfgPort.value = '22';
      cfgUser.value = 'root';
      cfgHostname.value = 'ecopc-server';
      document.getElementById('role-wake').checked = false;
    }

    generatePlaybook();
    showToast(`Konfigurasi profil ${gadget.name} dimuat ke Playbook Builder!`);
  }

  // ==========================================
  // 5. PLAYBOOK & SCRIPT GENERATOR
  // ==========================================
  function generatePlaybook() {
    const platform = cfgPlatform.value;
    const ip = cfgIp.value.trim() || '192.168.1.120';
    const port = cfgPort.value.trim() || '22';
    const user = cfgUser.value.trim() || 'root';
    const hostname = cfgHostname.value.trim() || 'ecobrain-node';

    const roleAdguard = document.getElementById('role-adguard').checked;
    const roleFilebrowser = document.getElementById('role-filebrowser').checked;
    const roleWeb = document.getElementById('role-web').checked;
    const roleTelemetry = document.getElementById('role-telemetry').checked;
    const roleWake = document.getElementById('role-wake').checked;

    // --- Generate Bash Script ---
    let bash = `#!/usr/bin/env bash
# ==============================================================================
# EcoLinux Revive - Node Automated Provisioning Script
# Orchestrated by Antigravity AI
# Target Hostname : ${hostname}
# Target IP       : ${ip} (Port ${port})
# Target OS       : ${platform}
# ==============================================================================

set -euo pipefail
echo "🌿 [EcoLinux Revive] Memulai orkestrasi setup pada perangkat lama..."
echo "🕒 Tanggal: $(date '+%Y-%m-%d %H:%M:%S')"

`;

    if (platform === 'termux') {
      bash += `# --- Setup Lingkungan Termux Android ---
echo "⚙️ Memperbarui paket Termux..."
pkg update -y && pkg upgrade -y
pkg install -y curl wget tar git jq bc coreutils procps

${roleWake ? `# Kunci proses dari Android Doze sleep
echo "🔋 Mengaktifkan Termux Wake-Lock..."
termux-wake-lock || true
` : ''}
`;
    } else if (platform === 'debian') {
      bash += `# --- Setup Lingkungan Debian / Armbian / Ubuntu ---
echo "⚙️ Memperbarui repositori APT..."
sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt-get install -y curl wget tar git jq ufw htop net-tools ca-certificates

# Set Hostname
echo "${hostname}" | sudo tee /etc/hostname > /dev/null
`;
    } else {
      bash += `# --- Setup Lingkungan Alpine Linux ---
echo "⚙️ Memperbarui APK Alpine..."
apk update && apk upgrade
apk add curl wget tar git jq bash ca-certificates
`;
    }

    if (roleAdguard) {
      bash += `
# ==============================================================================
# Role 1: AdGuard Home (Private DNS Sinkhole & Anti-Iklan Hemat Daya)
# ==============================================================================
echo "🛡️ Memasang AdGuard Home..."
ADGUARD_DIR="$HOME/adguardhome"
mkdir -p "$ADGUARD_DIR" && cd "$ADGUARD_DIR"

ARCH=$(uname -m)
case "$ARCH" in
  aarch64|arm64) AD_ARCH="arm64" ;;
  armv7*|armhf)  AD_ARCH="armv7" ;;
  armv6*)        AD_ARCH="armv6" ;;
  x86_64)        AD_ARCH="amd64" ;;
  i*86)          AD_ARCH="386" ;;
  *)             AD_ARCH="arm64" ;;
esac

echo "📦 Mengunduh AdGuardHome untuk arsitektur: $AD_ARCH..."
curl -s -L "https://static.adguard.com/adguardhome/release/AdGuardHome_linux_\${AD_ARCH}.tar.gz" -o adguard.tar.gz
tar -xzf adguard.tar.gz --strip-components=1
chmod +x AdGuardHome

${platform === 'termux' ? `# Jalankan background di Termux:
nohup ./AdGuardHome -c ./AdGuardHome.yaml -w ./work > ./adguard.log 2>&1 &
echo "✅ AdGuard Home aktif di background (Port Web Setup: 3000, DNS: 53)!"` : `sudo ./AdGuardHome -s install
echo "✅ Service AdGuard Home terdaftar di systemd!"`}
`;
    }

    if (roleFilebrowser) {
      bash += `
# ==============================================================================
# Role 2: FileBrowser (Cloud Pribadi Ringan Akses Web)
# ==============================================================================
echo "📁 Memasang FileBrowser..."
FB_DIR="$HOME/filebrowser"
mkdir -p "$FB_DIR/data" && cd "$FB_DIR"

curl -fsSL https://raw.githubusercontent.com/filebrowser/get/master/get.sh | bash
filebrowser config init -d "$FB_DIR/filebrowser.db" > /dev/null 2>&1 || true
filebrowser config set -a 0.0.0.0 -p 8088 -r "$HOME" -d "$FB_DIR/filebrowser.db" > /dev/null 2>&1 || true

${platform === 'termux' ? `nohup filebrowser -d "$FB_DIR/filebrowser.db" > ./filebrowser.log 2>&1 &
echo "✅ FileBrowser aktif di port 8088!"` : `echo "✅ FileBrowser siap dijalankan di port 8088!"`}
`;
    }

    if (roleWeb) {
      bash += `
# ==============================================================================
# Role 3: Micro Web Server (Nginx / PHP / SQLite)
# ==============================================================================
echo "🌐 Memasang Web Stack..."
${platform === 'termux' ? `pkg install -y nginx php php-sqlite sqlite
mkdir -p "$HOME/www"
echo "<h1>🌱 EcoLinux Reborn Server</h1><p>Ditenagai Antigravity di Android!</p>" > "$HOME/www/index.html"
nginx || true` : `sudo apt-get install -y nginx sqlite3 php-fpm
sudo systemctl enable --now nginx`}
echo "✅ Server Web aktif di port 80 / 8080!"
`;
    }

    if (roleTelemetry) {
      bash += `
# ==============================================================================
# Role 4: Telemetri & Healthcheck Ringan
# ==============================================================================
cat << 'EOF' > "$HOME/node-health.sh"
#!/usr/bin/env bash
echo "=== EcoLinux Revive Health Report ==="
echo "Host: $(hostname) | Uptime: $(uptime -p 2>/dev/null || uptime)"
echo "RAM Bebas:"
free -h 2>/dev/null || cat /proc/meminfo | grep MemFree
echo "Penyimpanan Tersedia:"
df -h "$HOME"
if command -v termux-battery-status > /dev/null 2>&1; then
  echo "Baterai: $(termux-battery-status | jq -r '.percentage')% | Suhu: $(termux-battery-status | jq -r '.temperature')°C"
fi
EOF
chmod +x "$HOME/node-health.sh"
bash "$HOME/node-health.sh"
`;
    }

    bash += `
echo "=============================================================================="
echo "🎉 [EcoLinux Revive] Selesai! Gadget lama Anda resmi reborn jadi server!"
echo "🌐 Akses Web Dashboard:"
${roleAdguard ? `echo "  - AdGuard Home  : http://${ip}:3000 (Konfigurasi awal) lalu http://${ip}"\n` : ''}${roleFilebrowser ? `echo "  - Cloud Storage : http://${ip}:8088 (Login: admin / admin)"\n` : ''}${roleWeb ? `echo "  - Web Server    : http://${ip}:8080"\n` : ''}echo "=============================================================================="
`;

    // --- Generate Antigravity Prompt ---
    const antigravityPrompt = `/goal Siapkan dan amankan perangkat lama (${platform}) di alamat IP ${ip} (SSH port ${port}, user '${user}').

Objektif Orkestrasi:
1. Hubungkan via SSH menggunakan run_command ('ssh -p ${port} ${user}@${ip}'). Lakukan uji konektivitas dan autentikasi.
2. Lakukan audit sistem awal: arsitektur kernel, kapasitas RAM, ruang sisa storage, dan kestabilan wake-lock / power management.
3. Eksekusi skrip provisioning berikut secara bertahap:
   - Pasang & aktifkan service: ${roleAdguard ? 'AdGuard Home (port 3000/53), ' : ''}${roleFilebrowser ? 'FileBrowser (port 8088), ' : ''}${roleWeb ? 'Nginx/PHP micro stack, ' : ''}${roleTelemetry ? 'Healthcheck telemetry watcher' : ''}.
4. Lakukan verifikasi fungsional via curl pada masing-masing port service di IP ${ip}.
5. Berikan ringkasan dashboard URL yang siap dibuka di browser dan status efisiensi dayanya. Jangan berhenti sampai semua service terverifikasi berjalan prima!`;

    // --- Generate SSH One-Liner ---
    const oneliner = `ssh -p ${port} ${user}@${ip} "bash -s" < setup-node.sh`;

    // Update UI
    generatedBash.textContent = bash;
    generatedOrch.textContent = antigravityPrompt;
    generatedOneliner.textContent = oneliner;
  }

  // Playbook output tabs
  outTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      outTabs.forEach(t => t.classList.remove('active'));
      outViews.forEach(v => v.classList.remove('active'));
      tab.classList.add('active');
      const view = tab.getAttribute('data-view');
      document.getElementById(`view-${view}`).classList.add('active');
    });
  });

  btnGeneratePlaybook.addEventListener('click', () => {
    generatePlaybook();
    showToast('Playbook & Prompt Antigravity berhasil diperbarui!');
  });

  // Download .sh
  btnDownloadSh.addEventListener('click', () => {
    const text = generatedBash.textContent;
    const blob = new Blob([text], { type: 'text/x-sh' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ecolinux-setup-node.sh';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('File ecolinux-setup-node.sh terunduh!');
  });

  // ==========================================
  // 6. E-WASTE & SAVINGS CALCULATOR
  // ==========================================
  function updateCalculator() {
    const count = parseInt(inputDeviceCount.value, 10);
    const watt = parseFloat(inputDeviceWatt.value);
    const hours = parseInt(inputHours.value, 10);
    const newHardwareCost = parseInt(inputNewCost.value, 10);

    valDeviceCount.textContent = `${count} Perangkat`;
    valDeviceWatt.textContent = `${watt.toFixed(1)} Watt`;
    valHours.textContent = `${hours} Jam / Hari`;
    valNewCost.textContent = `Rp ${newHardwareCost.toLocaleString('id-ID')} / unit`;

    // Calculations
    const ewasteKg = (count * 0.25).toFixed(2); // Avg 250g per small gadget
    const co2Kg = Math.round(count * 45); // Avg embodied CO2 footprint avoided ~45-60kg
    const moneySaved = count * newHardwareCost;
    const kwhYear = ((watt * hours * 365) / 1000 * count).toFixed(1);

    calcEwasteKg.textContent = `${ewasteKg} Kg`;
    calcCo2Kg.textContent = `${co2Kg} Kg CO₂e`;
    calcMoneySaved.textContent = `Rp ${moneySaved.toLocaleString('id-ID')}`;
    calcKwhYear.textContent = `${kwhYear} kWh`;

    metricWaste.textContent = `${ewasteKg} Kg E-Waste`;
    document.getElementById('header-eco-stat').textContent = `${ewasteKg} Kg E-Waste Diselamatkan`;
  }

  [inputDeviceCount, inputDeviceWatt, inputHours, inputNewCost].forEach(el => {
    el.addEventListener('input', updateCalculator);
  });

  // ==========================================
  // 7. TERMINAL SIMULATOR
  // ==========================================
  function printTermLine(text, type = 'info') {
    const div = document.createElement('div');
    div.className = `term-line ${type}`;
    div.textContent = text;
    termOutput.appendChild(div);
    termOutput.scrollTop = termOutput.scrollHeight;
  }

  function handleTermCommand(cmdRaw) {
    const cmd = cmdRaw.trim();
    if (!cmd) return;

    printTermLine(`agy@remote:~$ ${cmd}`, 'cmd');

    const lower = cmd.toLowerCase();

    if (lower === 'clear') {
      termOutput.innerHTML = '';
      printTermLine('🌿 EcoLinux Revive Virtual Terminal [Antigravity v2.4]', 'banner');
      return;
    }

    if (lower === 'help') {
      printTermLine('Daftar perintah simulasi:', 'success');
      printTermLine('  help              - Tampilkan bantuan ini');
      printTermLine('  connect           - Uji koneksi SSH ke target node');
      printTermLine('  neofetch          - Tampilkan info sistem & ASCII art');
      printTermLine('  status            - Cek telemetri (CPU, RAM, Suhu, Daya)');
      printTermLine('  install-adguard   - Simulasi pemasangan AdGuard Home');
      printTermLine('  antigravity-sync  - Simulasi healthcheck otomatis oleh Antigravity');
      printTermLine('  clear             - Bersihkan layar terminal');
      return;
    }

    if (lower === 'connect') {
      printTermLine('Menghubungkan ke 192.168.1.120:8022 (SSH Handshake)...', 'info');
      setTimeout(() => {
        printTermLine('Kunci publik host diverifikasi: SHA256:7uK...990L', 'info');
        printTermLine('Autentikasi SSH Key berhasil! Sesi aktif (termux userland).', 'success');
      }, 400);
      return;
    }

    if (lower === 'neofetch') {
      const art = `
    .---.      agy@ecobrain-node01
   /     \\     -------------------
  | () () |    OS: Android Termux (Linux 5.10.136-android-aarch64)
   \\  _  /     Host: Xiaomi Redmi Note (Recycled Smartphone)
    \`---\`      Uptime: 48 days, 14 hours, 22 mins
  /       \\    Packages: 142 (pkg-termux)
 |         |   Shell: bash 5.2.26
 |  EcoRev |   CPU: Snapdragon 8-Core (4x2.0GHz, 4x1.8GHz)
  \\_______/    Memory: 780MB / 3890MB (20% used)
               Battery: 82% (Power AC Plugged, 31.4°C)
      `;
      printTermLine(art, 'success');
      return;
    }

    if (lower === 'status') {
      printTermLine('⚡ Telemetri Real-time Perangkat Daur Ulang:', 'info');
      printTermLine('  • Konsumsi Daya : ~3.8 Watt (Stabil)', 'success');
      printTermLine('  • Beban CPU     : load average: 0.12, 0.08, 0.05', 'success');
      printTermLine('  • Suhu Chipset  : 34.5°C (Aman / Tanpa Throttling)', 'success');
      printTermLine('  • RAM Digunakan : 680MB / 4096MB (Sisa 3.4GB)', 'success');
      printTermLine('  • Wake-Lock     : AKTIF (Mencegah Android Deep Sleep)', 'success');
      return;
    }

    if (lower === 'install-adguard') {
      printTermLine('Mengunduh release AdGuardHome_linux_arm64.tar.gz...', 'info');
      setTimeout(() => {
        printTermLine('Mengekstrak binary dan membuat direktori kerja...', 'info');
      }, 500);
      setTimeout(() => {
        printTermLine('[OK] Service AdGuard Home berjalan pada http://192.168.1.120:3000', 'success');
        printTermLine('[OK] DNS Server mendengarkan di 127.0.0.1:53 & 192.168.1.120:53', 'success');
        printTermLine('✨ Server DNS Anti-Iklan siap melindungi semua gadget di rumah!', 'banner');
      }, 1000);
      return;
    }

    if (lower === 'antigravity-sync') {
      printTermLine('🧠 [Antigravity Orchestrator] Menjalankan subagent audit...', 'info');
      setTimeout(() => {
        printTermLine('  [Subagent TargetAuditor] Arsitektur arm64 diverifikasi valid.', 'info');
        printTermLine('  [Subagent SecurityHardener] Port 8022 dilindungi keypair.', 'info');
        printTermLine('  [Subagent TelemetryWatcher] CPU load < 15%, memory leak: TIDAK ADA.', 'info');
        printTermLine('✅ Orkestrasi Antigravity Sukses: Node remote dalam kondisi optimal.', 'success');
      }, 600);
      return;
    }

    printTermLine(`bash: ${cmd}: command not found. Ketik 'help' untuk panduan.`, 'error');
  }

  termSubmit.addEventListener('click', () => {
    const val = termInput.value;
    termInput.value = '';
    handleTermCommand(val);
  });

  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = termInput.value;
      termInput.value = '';
      handleTermCommand(val);
    }
  });

  chipCmds.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      handleTermCommand(cmd);
    });
  });

  // ==========================================
  // 8. NAVIGATION & SEARCH
  // ==========================================
  function switchTab(targetTabId) {
    navTabs.forEach(t => {
      if (t.getAttribute('data-tab') === targetTabId) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    tabPanes.forEach(pane => {
      if (pane.id === `tab-${targetTabId}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  gadgetSearch.addEventListener('input', renderGadgets);
  gadgetFilter.addEventListener('change', renderGadgets);

  // ==========================================
  // 9. COPY CLIPBOARD & TOAST NOTIFICATION
  // ==========================================
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;

    const targetId = btn.getAttribute('data-target');
    const el = document.getElementById(targetId);
    if (!el) return;

    const textToCopy = el.innerText || el.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalText = btn.textContent;
      btn.textContent = '✓ Tersalin!';
      btn.style.background = 'var(--eco-accent)';
      btn.style.color = '#03140c';
      showToast('Perintah berhasil disalin ke clipboard!');

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
      }, 2000);
    }).catch(err => {
      console.error('Gagal menyalin:', err);
    });
  });

  // Theme Toggle (Dark Eco vs Light Eco)
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    showToast(isLight ? 'Mode Terang (Eco Mint) aktif' : 'Mode Gelap (Cyber Green) aktif');
  });

  // Initial runs
  renderGadgets();
  generatePlaybook();
  updateCalculator();
});
