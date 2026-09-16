# Hướng dẫn Tuỳ chỉnh

Hướng dẫn này bao gồm mọi thứ bạn cần để cá nhân hoá trang bio của mình.

---

## 1. Ảnh hồ sơ

**File:** `assets/pfp/default.jpg`

Thay file này bằng ảnh của bạn. Thông số khuyến nghị:
- Định dạng: JPG hoặc PNG
- Kích thước: 300x300px hoặc lớn hơn (tỷ lệ vuông)
- Dung lượng tối đa: 500KB để tải nhanh

---

## 2. Tên người dùng

Tên hiển thị kèm hiệu ứng gõ chữ.

### Nơi thay đổi:

**`index.html`** (dòng ~52):
```html
<span id="username">Your Name</span>
```

**`assets/js/script.js`** (dòng ~11) — Màn hình khởi động terminal:
```javascript
"User: Your Name",
```

**`assets/js/username-animation.js`** (dòng ~5) — Các biến thể hiệu ứng gõ chữ:
```javascript
const usernameVariants = ["Your Name", "Your Alias"];
```
Bạn có thể thêm nhiều biến thể hơn để hiển thị xoay vòng.

---

## 3. Tiêu đề tab trình duyệt

**File:** `assets/js/title.js`

Thay mảng titles bằng nội dung tuỳ ý. Mỗi mục hiển thị trong 1 giây:
```javascript
var titles = [
  "Xin",
  "chào",
  "đến với",
  "trang",
  "của tôi!"
];
```

---

## 4. Mô tả hồ sơ

**File:** `index.html` (dòng ~72-75)

```html
<p id="user-description" style="color: white;">
  Xin chào mọi người, mình là Your Name
  <br>Sửa nội dung này để giới thiệu bản thân<br>Thêm sở thích và lĩnh vực của bạn
</p>
```

---

## 5. Liên kết mạng xã hội

**File:** `index.html` (dòng ~103-119)

Thay từng URL bằng thông tin của bạn:

```html
<a href="https://facebook.com/YOUR_ID" target="_blank">
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://tiktok.com/@YOUR_USERNAME" target="_blank">
<a href="https://x.com/YOUR_USERNAME" target="_blank">
<a href="mailto:your@email.com" target="_blank">
```

Để thêm/bớt biểu tượng mạng xã hội, sao chép hoặc xoá một block `<a>`. Các biểu tượng Font Awesome khả dụng:
- `fa-brands fa-discord`
- `fa-brands fa-instagram`
- `fa-brands fa-youtube`
- `fa-brands fa-linkedin`
- `fa-brands fa-reddit`
- Xem [Danh sách biểu tượng Font Awesome](https://fontawesome.com/icons)

---

## 6. Tích hợp Discord

### Discord User ID

Để hiển thị trạng thái Discord, bạn cần **User ID**:

1. Mở Discord → Cài đặt → Nâng cao → Bật **Chế độ nhà phát triển**
2. Nhấp chuột phải vào tên người dùng → **Sao chép User ID**
3. Dán vào hai file:

**`assets/js/lanyard.js`** (dòng ~2):
```javascript
const userId = "YOUR_DISCORD_USER_ID";
```

**`assets/js/discord.js`** (dòng ~2):
```javascript
const userId = "YOUR_DISCORD_USER_ID";
```

### Cách hoạt động:
- Sử dụng [Lanyard API](https://docs.lanyard.rest/) để lấy trạng thái Discord
- Tự động cập nhật mỗi 10 giây
- Hiển thị avatar, trạng thái (online/idle/dnd/offline) và hoạt động hiện tại
- Cũng lấy khung trang trí avatar Discord của bạn

---

## 7. Video nền

**File:** `assets/back/default.mp4`

Thay bằng video tuỳ ý. Khuyến nghị:
- Định dạng: MP4 (H.264)
- Độ phân giải: 1920x1080 hoặc 1280x720
- Thời lượng: 10-30 giây (video sẽ chạy lặp)
- Dung lượng: Giữ dưới 10MB để tải nhanh
- Nội dung: Trừu tượng/trầm lắng thường phù hợp nhất

---

## 8. Nhạc nền

**File:** `assets/music/`

Thay các file MP3 trong thư mục này. Trình phát hỗ trợ:
- Nhiều bài hát với chế độ phát ngẫu nhiên
- Thanh điều chỉnh âm lượng
- Thanh tiến trình

Định dạng hỗ trợ: MP3

---

## 9. Favicon

**File:** `assets/favico/default.jpg`

Thay bằng favicon tuỳ ý. Khuyến nghị:
- Định dạng: JPG, PNG hoặc ICO
- Kích thước: 32x32px hoặc 64x64px

---

## 10. Huy hiệu

**File:** `assets/badge/`

Ảnh huy hiệu hiển thị dưới tên người dùng:
- `developer.png`
- `love.png`
- `music.png`
- `verified.png`

Thay các file PNG này hoặc xoá các thẻ `<img>` trong `index.html` (dòng ~57-60) để ẩn huy hiệu.

---

## 11. Logo ngôn ngữ lập trình

**File:** `assets/logo/`

Ảnh logo ngôn ngữ hiển thị trên hồ sơ:
- `c.png`, `cplusplus.png`, `csharp.png`
- `java.png`, `matlab.png`, `python.png`

Thay bằng logo kỹ năng của bạn hoặc xoá các thẻ `<img>` trong `index.html` (dòng ~63-68).

---

## 12. CSS tuỳ chỉnh

**File:** `styles.css`

Các biến CSS và phần quan trọng bạn có thể sửa:

```css
/* Độ tối của lớp phủ nền */
#video-overlay { background: rgba(0, 0, 0, 0.5); }

/* Độ mờ của thẻ hồ sơ */
#blurred-box { backdrop-filter: blur(10px); }

/* Cỡ chữ tên người dùng */
#username { font-size: 32px; }
```

---

## 13. ASCII Art

**File:** `assets/js/script.js` (dòng ~235-250)

Hàm `getAsciiArt()` trả về nghệ thuật màn hình khởi động. Thay bằng ASCII art tuỳ ý.

---

## 14. Hành vi trình phát nhạc

**File:** `assets/js/music.js`

Trình phát nhạc tự động bắt đầu khi người dùng nhấn Enter hoặc nhấp vào terminal. Phát ngẫu nhiên qua các bài hát. Chỉnh sửa file này để thay đổi hành vi.

---

## Danh sách kiểm tra

Sau khi tuỳ chỉnh, hãy kiểm tra các file sau đã được cập nhật:

| File | Cần kiểm tra |
|------|--------------|
| `index.html` | Tên, bio, liên kết mạng xã hội |
| `assets/js/script.js` | Tên trong terminal |
| `assets/js/username-animation.js` | Các biến thể tên |
| `assets/js/title.js` | Tiêu đề tab trình duyệt |
| `assets/js/lanyard.js` | Discord User ID |
| `assets/js/discord.js` | Discord User ID |
| `assets/pfp/default.jpg` | Ảnh hồ sơ của bạn |
| `assets/back/default.mp4` | Video nền của bạn |
| `assets/music/*.mp3` | File nhạc của bạn |
| `assets/favico/default.jpg` | Favicon của bạn |
