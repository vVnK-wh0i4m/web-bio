# Bio Web - Trang Liên Kết Cá Nhân

Mẫu trang bio/link-in-bio tự host, hoàn toàn có thể tuỳ chỉnh. Chia sẻ hồ sơ, mạng xã hội, trạng thái Discord của bạn — tất cả trong một trang đẹp.

## Xem trước

![Xem trước](https://i.postimg.cc/524RpJKb/1.png)

## Tính năng

- **Hiệu ứng khởi động terminal** với ASCII art và thông tin hệ thống
- **Nhạc & video nền** kèm visualizer âm thanh
- **Trạng thái Discord trực tuyến** qua Lanyard API (avatar, trạng thái, hoạt động)
- **Mèo Neko** theo dõi con trỏ chuột
- **Hiệu ứng nghiêng 3D** trên thẻ hồ sơ
- **Hiệu ứng gõ chữ** cho tên người dùng
- **Tab trình duyệt animation** tự động chuyển
- **Liên kết mạng xã hội** (Facebook, GitHub, TikTok, X, Email)
- **Hệ thống huy hiệu** (Developer, Verified, Music, Love)
- **Logo ngôn ngữ lập trình** hiển thị kỹ năng
- **Responsive hoàn toàn** — hoạt động trên điện thoại & máy tính
- **Không phụ thuộc** — HTML/CSS/JS thuần, không cần build

## Bắt đầu nhanh

### Tải mã nguồn

📦 [**Tải file ZIP**](https://github.com/vVnK-wh0i4m/web-bio/archive/refs/heads/main.zip)

Hoặc clone bằng Git:
```bash
git clone https://github.com/vVnK-wh0i4m/web-bio.git
```

### Các bước tuỳ chỉnh

1. **Sửa** `index.html` — thay `Your Name`, liên kết mạng xã hội, mô tả
2. **Sửa** `assets/js/lanyard.js` và `assets/js/discord.js` — thay `YOUR_DISCORD_USER_ID`
3. **Thay** ảnh hồ sơ tại `assets/pfp/default.jpg`
4. **Triển khai** trên bất kỳ hosting static nào (xem [Hướng dẫn Hosting](HOSTING.md))

## Cấu trúc dự án

```
bio-web/
├── index.html                 # Trang chính
├── styles.css                 # Stylesheet chính
├── LICENSE                    # Giấy phép MIT
├── CUSTOMIZATION.md           # Hướng dẫn tuỳ chỉnh
├── HOSTING.md                 # Hướng dẫn hosting
├── LICENSE-AND-TERMS.md       # Giấy phép & điều khoản
├── assets/
│   ├── back/default.mp4       # Video nền
│   ├── badge/                 # Huy hiệu hồ sơ (PNG)
│   ├── css/tilt-effect.css    # CSS hiệu ứng nghiêng 3D
│   ├── cursor/neko.png        # Sprite mèo Neko
│   ├── favico/default.jpg     # Favicon
│   ├── js/
│   │   ├── audio-visualizer.js
│   │   ├── discord.js         # Khung avatar Discord
│   │   ├── lanyard.js         # Trạng thái Discord (Lanyard API)
│   │   ├── music.js           # Trình phát nhạc
│   │   ├── neko.js            # Class mèo Neko
│   │   ├── neko-init.js       # Khởi tạo Neko
│   │   ├── script.js          # Hiệu ứng khởi động terminal
│   │   ├── tilt-effect.js     # Logic hiệu ứng nghiêng 3D
│   │   ├── title.js           # Animation tab trình duyệt
│   │   └── username-animation.js
│   ├── logo/                  # Logo ngôn ngữ lập trình
│   ├── music/                 # Nhạc nền (MP3)
│   └── pfp/default.jpg        # Ảnh hồ sơ
```

## Tài liệu

| Tài liệu | Mô tả |
|----------|--------|
| [Hướng dẫn Tuỳ chỉnh](CUSTOMIZATION.md) | Cách cá nhân hoá trang bio của bạn |
| [Hướng dẫn Hosting](HOSTING.md) | Triển khai lên GitHub Pages, Netlify, Vercel, v.v. |
| [Giấy phép & Điều khoản](LICENSE-AND-TERMS.md) | Giấy phép MIT và điều khoản sử dụng |

## Công nghệ sử dụng

- **HTML5 / CSS3 / Vanilla JavaScript** (không framework)
- **Font Awesome 6.5.0** (biểu tượng)
- **Google Fonts** (Inter, Comic Neue)
- **vanilla-tilt.js** (hiệu ứng 3D)
- **Lanyard API** (tích hợp Discord)
- **Web Audio API** (visualizer âm thanh)

## Giấy phép

Dự án này sử dụng [Giấy phép MIT](LICENSE).

Được tạo ban đầu bởi [c0mplex](https://github.com/c0mplex07). Xem [Giấy phép & Điều khoản](LICENSE-AND-TERMS.md) để biết thêm chi tiết.
