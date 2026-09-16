# Hướng dẫn Hosting

Bio Web là một **trang web tĩnh** — không cần server, không cơ sở dữ liệu, không cần build. Bạn có thể host ở bất kỳ đâu hỗ trợ file HTML.

---

## Lựa chọn 1: GitHub Pages (Khuyến nghị — Miễn phí)

### Các bước:

1. **Tạo tài khoản GitHub** tại [github.com](https://github.com)

2. **Tạo repository mới**
   - Đặt tên: `ten-cua-ban.github.io` (cho trang chính)
   - Hoặc bất kỳ tên nào như `bio` (cho `ten-cua-ban.github.io/bio`)

3. **Tải file lên**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TEN_CUA_BAN/TEN_REPO.git
   git push -u origin main
   ```

4. **Bật GitHub Pages**
   - Vào repo → Settings → Pages
   - Source: nhánh `main`
   - Nhấn Save

5. **Trang của bạn đã trực tuyến tại:**
   - `https://ten-cua-ban.github.io` (nếu repo là `ten-cua-ban.github.io`)
   - `https://ten-cua-ban.github.io/TEN_REPO` (ngược lại)

### Tên miền tuỳ chọn:

1. Mua tên miền (ví dụ từ Namecheap, Cloudflare)
2. Sửa file `CNAME` trong repo, thêm tên miền:
   ```
   tendomaincuaban.com
   ```
3. Trong cài đặt DNS của tên miền, thêm:
   - Loại: `CNAME`
   - Name: `@` hoặc `www`
   - Giá trị: `ten-cua-ban.github.io`
4. Chờ 5-30 phút để DNS propagte

---

## Lựa chọn 2: Netlify (Miễn phí)

### Các bước:

1. Vào [netlify.com](https://netlify.com) và đăng ký

2. **Kéo thả** thư mục dự án vào khu vực deploy

3. Hoặc kết nối GitHub:
   - Nhấn "Add new site" → Import from Git
   - Chọn repo của bạn
   - Build command: (để trống)
   - Publish directory: `.` (dấu chấm)
   - Nhấn "Deploy site"

4. **Trang của bạn sẽ có URL dạng:** `https://ten-ngau-nhien.netlify.app`

5. **Tên miền tuỳ chọn:**
   - Site settings → Domain management → Add custom domain
   - Làm theo hướng dẫn DNS

### Tự động deploy từ GitHub:

Netlify tự động redeploy khi bạn push lên GitHub.

---

## Lựa chọn 3: Vercel (Miễn phí)

### Các bước:

1. Vào [vercel.com](https://vercel.com) và đăng ký bằng GitHub

2. Nhấn **"Add New Project"**

3. Import repository GitHub của bạn

4. **Cấu hình:**
   - Framework: `Other`
   - Build command: (để trống)
   - Output directory: `.` (dấu chấm)

5. Nhấn **Deploy**

6. **Trang của bạn sẽ có URL dạng:** `https://du-an-cua-ban.vercel.app`

7. **Tên miền tuỳ chọn:**
   - Project Settings → Domains → Add
   - Làm theo hướng dẫn DNS

---

## Lựa chọn 4: Cloudflare Pages (Miễn phí)

### Các steps:

1. Đăng nhập [Cloudflare](https://dash.cloudflare.com)

2. Vào **Workers & Pages** → Create → Pages

3. **Upload trực tiếp** hoặc kết nối GitHub

4. Nếu upload trực tiếp:
   - Kéo thư mục dự án
   - Nhấn Deploy

5. **Trang của bạn sẽ có URL dạng:** `https://du-an-cua-ban.pages.dev`

6. **Tên miền tuỳ chọn:**
   - Custom domains → Set up a custom domain
   - Thêm tên miền và cấu hình DNS

---

## Lựa chọn 5: Hosting web truyền thống (Trả phí)

Bất kỳ hosting nào hỗ trợ HTML đều hoạt động:

### Nhà cung cấp:
- **Hostinger** (~500k/tháng)
- **Bluehost** (~75k/tháng)
- **SiteGround** (~75k/tháng)
- **A2 Hosting** (~75k/tháng)

### Các steps:

1. Đăng ký gói hosting

2. Truy cập bảng điều khiển hosting (cPanel)

3. Mở **File Manager** → điều hướng đến `public_html/`

4. **Upload tất cả file dự án**, giữ nguyên cấu trúc thư mục:
   ```
   public_html/
   ├── index.html
   ├── styles.css
   ├── assets/
   │   ├── back/
   │   ├── badge/
   │   ├── css/
   │   ├── cursor/
   │   ├── favico/
   │   ├── js/
   │   ├── logo/
   │   ├── music/
   │   └── pfp/
   └── ...
   ```

5. Trang của bạn đã trực tuyến tại tên miền

### Qua FTP:

1. Lấy thông tin FTP từ nhà cung cấp hosting
2. Sử dụng client FTP (FileZilla, WinSCP)
3. Kết nối và upload vào `public_html/`

---

## Lựa chọn 6: Phát triển cục bộ

### Xem nhanh trên máy tính:

**Windows:**
```bash
# Dùng Python
cd duong-dan/bio-web
python -m http.server 8000
# Mở http://localhost:8000

# Dùng Node.js (nếu đã cài)
npx serve .
```

**Mac/Linux:**
```bash
cd duong-dan/bio-web
python3 -m http.server 8000
# Mở http://localhost:8000
```

**VS Code:**
1. Cài extension "Live Server"
2. Nhấp chuột phải `index.html` → "Open with Live Server"

---

## Bảng so sánh

| Nền tảng | Giá | Tên miền tuỳ chỉnh | Tự động deploy | Tốc độ |
|----------|-----|---------------------|-----------------|--------|
| GitHub Pages | Miễn phí | Có | Có (Git) | Tốt |
| Netlify | Miễn phí | Có | Có (Git) | Nhanh |
| Vercel | Miễn phí | Có | Có (Git) | Nhanh |
| Cloudflare Pages | Miễn phí | Có | Có (Git) | Nhanh nhất |
| Hosting truyền thống | 500k-1.2tr/tháng | Có | Không (FTP) | Tuỳ chọn |

---

## Khuyến nghị

- **Cho người mới:** GitHub Pages hoặc Netlify (dễ thiết lập nhất)
- **Hiệu suất tốt nhất:** Cloudflare Pages
- **Tên miền + email:** Hosting truyền thống
- **Test nhanh:** Local với Live Server

---

## Xử lý sự cố

### "Page not found" sau khi deploy
- Kiểm tra `index.html` nằm ở gốc thư mục publish
- Với GitHub Pages, đảm bảo đã chọn đúng nhánh/thư mục

### Nhạc/video không phát
- Một số trình duyệt chặn autoplay. Trang xử lý điều này bằng tương tác người dùng (nhấn Enter)
- Đảm bảo đường dẫn file chính xác (phân biệt hoa/thường trên server Linux)

### Trạng thái Discord không hiển thị
- Kiểm tra Discord User ID đúng trong cả `lanyard.js` và `discord.js`
- Discord phải đang mở và hiển thị để Lanyard hoạt động
- Kiểm tra console trình duyệt (F12) để xem lỗi

### Ảnh không tải
- Kiểm tra đường dẫn file là tương đối (bắt đầu bằng `./`)
- Đảm bảo file đã upload đúng cấu trúc thư mục
- Tên file phân biệt hoa/thường trên server Linux
