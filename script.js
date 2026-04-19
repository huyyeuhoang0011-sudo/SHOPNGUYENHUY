(function(){
  const products = {
    standard: [
      { id: 1, name: "LOCKHEAD VIP", effect: "Kéo nhẹ khoá đầu 40%", price: "50.000đ", desc: "50k/10B Hỗ trợ Android Và Ios" },
      { id: 2, name: "NHẸ TÂM BASIC", effect: "Kéo tâm nhẹ không bị nặng", price: "50.000đ", desc: "50k/10B Hỗ trợ Android Và Ios" },
      { id: 9, name: "REGEDIT APP", effect: "AIMLOCK-Nhẹ Tâm-Fix Delay-Lock Đầu Nhẹ-Fix LAg Auto", price: "200.000đ", desc: "Vĩnh viễn" },
      { id: 10, name: "Combo 5 File Vip", effect: "5 FILE CƠ BẢN SIÊU NGON", price: "150.000đ", desc: "Tiết kiệm CHi Phí- Hạn SD Vĩnh Viễn Hỗ Trợ ADNROID IOS PC" }
    ],
    vip: [
      { id: 1, name: "Aimlock Sensi", effect: "TÂM BÁM ĐẦU CỰC CHUẨN_LOCK NHẸ 70%", price: "150.000đ", desc: "HSD 1OB _ HỖ TRỢ ANDROID & IOS" },
      { id: 2, name: "Định Vị & Nhẹ Tâm", effect: "Định Vị Súng Xanh - Kéo Nhẹ Tâm", price: "100.000đ", desc: "100k/1ob" },
      { id: 3, name: "Config Iphone Ultra", effect: "Unlock Function - Nhẹ Tâm Vip 80%", price: "200.000đ", desc: "Vĩnh Viễn-HỖ Trợ IOS" },
      { id: 4, name: "DATA SAFE ANDROID", effect: "Nhích Là Đỏ - Tối Ưu Android Sâu", price: "200.000đ", desc: "Vĩnh Viễn-Hỗ Trợ ADR" },
      { id: 5, name: "AIMLOCK VIP ULTRA", effect: "Kích hoạt cơ chế VIP Nhích Nhẹ Là Đầu", price: "300.000đ", desc: "Vĩnh Viễn-Hỗ Trợ ADR_IOS" },
      { id: 6, name: "Extracly Aimlock", effect: "Antiban-Tâm Nhẹ Vùng Đầu Bám Chặt Tâm Hơn", price: "350.000đ", desc: "Bản đặc biệt-Vĩnh Viễn_HỖ TRỢ ADR_IOS" }
    ],
    premium: [
      { id: 1, name: "NGUYENHUY ULTIMATE", effect: "Ngon Bổ Rẻ Nhất Trong Tầm Giá Không Quá 500k-Nhích Nút Bắn Là Ghim Đầu", price: "500.000đ", desc: "Vĩnh Viễn-HỖ Trợ ADR_IOS" },
      { id: 2, name: "AIMLOCK PREMIUM", effect: "Nhích Là Ghim-Giảm Lực Cản Kéo Tâm Cực Dễ", price: "500.000đ", desc: "Vĩnh Viễn-Hỗ Trợ ADR_IOS" },
      { id: 3, name: "PREMIUM VIP +", effect: "Full Chức Năng Nhích Là Ghim Đầu", price: "750.000đ", desc: "Vĩnh Viễn-Hỗ Trợ All Thiết Bị" },
      { id: 4, name: "PREMIUM VIP ++", effect: "Độc quyền NGUYENHUY", price: "1.000.000đ", desc: "Vĩnh Viễn-Hỗ Trợ ALl Thiết Bị" }
    ]
  };

  const sCanvas = document.getElementById('sakuraCanvas');
  const sCtx = sCanvas.getContext('2d');
  let petals = [];

  class Petal {
    constructor() {
      this.x = Math.random() * sCanvas.width;
      this.y = Math.random() * sCanvas.height - sCanvas.height;
      this.w = Math.random() * 10 + 5;
      this.opacity = Math.random() * 0.6 + 0.3;
      this.speedX = Math.random() * 1 + 0.5;
      this.speedY = Math.random() * 1 + 1;
    }
    draw() {
      if (this.y > sCanvas.height || this.x > sCanvas.width) {
        this.y = -10;
        this.x = Math.random() * sCanvas.width;
      }
      sCtx.fillStyle = `rgba(255, 183, 197, ${this.opacity})`;
      sCtx.beginPath();
      sCtx.arc(this.x, this.y, this.w / 2, 0, Math.PI);
      sCtx.fill();
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  function initSakura() {
    sCanvas.width = window.innerWidth;
    sCanvas.height = window.innerHeight;
    petals = Array.from({ length: 30 }, () => new Petal());
  }

  function animateSakura() {
    sCtx.clearRect(0, 0, sCanvas.width, sCanvas.height);
    petals.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateSakura);
  }

  const nCanvas = document.getElementById('notifyCanvas');
  const nCtx = nCanvas.getContext('2d');
  let dots = [];

  function initDots() {
    nCanvas.width = window.innerWidth;
    nCanvas.height = window.innerHeight;
    dots = Array.from({ length: 50 }, () => ({
      x: Math.random() * nCanvas.width,
      y: Math.random() * nCanvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));
  }

  function drawDots() {
    nCtx.clearRect(0, 0, nCanvas.width, nCanvas.height);
    const primaryRgb = getComputedStyle(document.documentElement).getPropertyValue('--primary-rgb').trim();
    dots.forEach((d, i) => {
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0 || d.x > nCanvas.width) d.vx *= -1;
      if (d.y < 0 || d.y > nCanvas.height) d.vy *= -1;
      nCtx.fillStyle = `rgba(${primaryRgb}, 0.6)`;
      nCtx.beginPath();
      nCtx.arc(d.x, d.y, 2, 0, Math.PI * 2);
      nCtx.fill();
      for (let j = i + 1; j < dots.length; j++) {
        const d2 = dots[j];
        const dist = Math.hypot(d.x - d2.x, d.y - d2.y);
        if (dist < 100) {
          nCtx.strokeStyle = `rgba(${primaryRgb}, ${1 - dist / 100})`;
          nCtx.beginPath();
          nCtx.moveTo(d.x, d.y);
          nCtx.lineTo(d2.x, d2.y);
          nCtx.stroke();
        }
      }
    });
    requestAnimationFrame(drawDots);
  }

  window.showPanel = (type) => {
    const container = document.getElementById('product-container');
    document.querySelectorAll('.tab-btn').forEach(b => {
      const text = b.innerText.toLowerCase();
      b.classList.toggle('active',
        (type === 'standard' && text.includes('thường')) ||
        (type === 'vip' && text.includes('vip')) ||
        (type === 'premium' && text.includes('premium'))
      );
    });
    container.innerHTML = products[type].map(p => `
      <div class="prod-card">
        <div class="prod-info">
          <div class="prod-name">${p.name}</div>
          <div class="prod-effect">${p.effect}</div>
          <div class="price">${p.price} <span class="price-desc">/ ${p.desc}</span></div>
        </div>
        <button class="buy-btn" onclick="window.open('https://zalo.me/0899241533')">MUA NGAY</button>
      </div>
    `).join('');
  };

  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

  window.openAdminPopup = () => {
    const popup = document.getElementById('adminPopup');
    const loading = document.getElementById('adminLoadingBox');
    const box = document.getElementById('adminInfoBox');
    popup.classList.remove('hidden');
    loading.style.display = 'block';
    box.style.display = 'none';
    setTimeout(() => {
      loading.style.display = 'none';
      box.style.display = 'block';
    }, 1500);
  };

  window.closeAdminPopup = () => {
    const popup = document.getElementById('adminPopup');
    popup.classList.add('hidden');
    document.getElementById('adminLoadingBox').style.display = 'block';
    document.getElementById('adminInfoBox').style.display = 'none';
  };

  document.getElementById('adminPopup').addEventListener('click', (e) => {
    if (e.target.classList.contains('admin-popup')) closeAdminPopup();
  });

  window.openBankPopup = () => {
    const popup = document.getElementById('bankPopup');
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeBankPopup = () => {
    const popup = document.getElementById('bankPopup');
    popup.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.copyBankInfo = () => {
    const bankNumber = '0976350194';
    navigator.clipboard.writeText(bankNumber).then(() => {
      showToast('Sao chép thành công!');
    }).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = bankNumber;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast('Sao chép thành công!');
    });
  };

  const themeColors = [
    { name: 'Hồng', h: 335, s: 100, l: 55, rgb: '255, 45, 135' },
    { name: 'Đỏ', h: 0, s: 100, l: 55, rgb: '255, 0, 0' },
    { name: 'Cam', h: 30, s: 100, l: 55, rgb: '255, 128, 0' },
    { name: 'Vàng', h: 60, s: 100, l: 55, rgb: '255, 255, 0' },
    { name: 'Lục', h: 120, s: 100, l: 55, rgb: '0, 255, 0' },
    { name: 'Lam', h: 200, s: 100, l: 55, rgb: '0, 128, 255' },
    { name: 'Tím', h: 280, s: 100, l: 55, rgb: '128, 0, 255' }
  ];

  let themeIndex = 0;

  function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  window.cycleTheme = () => {
    themeIndex = (themeIndex + 1) % themeColors.length;
    const color = themeColors[themeIndex];
    const root = document.documentElement;

    root.style.setProperty('--primary-h', color.h);
    root.style.setProperty('--primary-s', color.s + '%');
    root.style.setProperty('--primary-l', color.l + '%');
    root.style.setProperty('--primary', `hsl(${color.h}, ${color.s}%, ${color.l}%)`);
    root.style.setProperty('--primary-rgb', color.rgb);
    root.style.setProperty('--primary-dark', `hsl(${color.h}, 80%, 40%)`);

    const neonH = (color.h + 180) % 360;
    root.style.setProperty('--neon-h', neonH);
    root.style.setProperty('--neon', `hsl(${neonH}, 100%, 60%)`);
    
    const neonRgbArr = hslToRgb(neonH / 360, 1, 0.6);
    const neonRgb = `${neonRgbArr[0]}, ${neonRgbArr[1]}, ${neonRgbArr[2]}`;
    root.style.setProperty('--neon-rgb', neonRgb);

    document.getElementById('themeStatus').innerText = color.name;
  };

  const playlist = [
    { title: "Trước Khi Tuổi Trẻ Này Đóng Lối ( Ngắn - Dick - Xám )", src: "1.mp3" },
    { title: "Ghé Qua ( Pc - Dick - Tofutns )", src: "2.mp3" },
    { title: "Khi Cơn Mưa Dần Phai ( Tez - Myra )", src: "3.mp3" },
    { title: "Mưa Cứ Rơi ( Mr.A - Wxrdie )", src: "4.mp3" },
    { title: "Ở Lại ( Dick )", src: "5.mp3" }
  ];

  let currentTrack = 0;
  let isPlaying = false;
  const audio = new Audio();
  const playPauseBtn = document.getElementById('playPauseBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const songTitle = document.getElementById('songTitle');

  function loadTrack(index) {
    if (playlist.length === 0) return;
    const track = playlist[index];
    audio.src = track.src;
    songTitle.textContent = `🎵 ${track.title}`;
    audio.load();
    if (isPlaying) audio.play().catch(e => console.log("Không thể phát nhạc"));
  }

  function togglePlay() {
    if (!audio.src && playlist.length > 0) loadTrack(currentTrack);
    if (isPlaying) {
      audio.pause();
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
      audio.play().catch(e => console.log("Lỗi phát nhạc"));
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
  }

  function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    if (isPlaying) playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }

  function prevTrack() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
    if (isPlaying) playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }

  playPauseBtn.addEventListener('click', togglePlay);
  nextBtn.addEventListener('click', nextTrack);
  prevBtn.addEventListener('click', prevTrack);
  audio.addEventListener('ended', nextTrack);
  audio.addEventListener('play', () => { isPlaying = true; playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; });
  audio.addEventListener('pause', () => { isPlaying = false; playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'; });
  audio.addEventListener('error', () => {
    console.log("Không tìm thấy file nhạc");
    songTitle.textContent = '🎵 Lỗi tải nhạc';
  });

  if (playlist.length > 0) loadTrack(0);

  document.addEventListener('DOMContentLoaded', function() {
    const bankPopup = document.getElementById('bankPopup');
    if (bankPopup) {
      bankPopup.addEventListener('click', function(e) {
        if (e.target === bankPopup) {
          closeBankPopup();
        }
      });
    }
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeBankPopup();
      }
    });

    const qrImg = document.getElementById('bankQRImg');
    if (qrImg) {
      qrImg.onerror = function() {
        this.src = '2.jpg';
      };
    }
  });

  window.onload = () => {
    initDots();
    drawDots();
    initSakura();
    animateSakura();
    document.getElementById('progressBar').style.width = '100%';
    setTimeout(() => {
      document.getElementById('notifyOverlay').classList.add('hidden');
      document.getElementById('shopContent').classList.remove('hidden');
      showPanel('standard');
    }, 3000);
  };

  window.onresize = () => {
    initDots();
    initSakura();
  };
})();