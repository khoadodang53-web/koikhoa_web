# Alex Minh Khang - Production ReactJS Personal Portfolio 🚀

Trang web cá nhân chuyên nghiệp chuẩn **Production-Ready** được xây dựng bằng **React 19**, **Tailwind CSS**, **Lucide Icons** và đóng gói bằng **Vite**.

---

## 🌟 Tính Năng Nổi Bật

1. **Hiệu năng & Tối ưu chuẩn Production**:
   - Tốc độ tải siêu tốc với Vite và nén bundle tự động (CSS ~7KB gzip, JS ~99KB gzip).
   - Đạt chuẩn SEO với thẻ meta OpenGraph, mô tả chi tiết, responsive đa thiết bị (Mobile, Tablet, Desktop).
2. **Giao diện & Trải nghiệm (UI/UX)**:
   - Hỗ trợ chế độ **Dark / Light Mode** mượt mà, lưu trạng thái vào `localStorage`.
   - Hiệu ứng **Glassmorphism**, đường viền phát sáng, hạt confetti chúc mừng sống động khi bấm "Hợp tác" hoặc gửi form.
   - Đồng hồ thời gian thực (GMT+7) và trạng thái sẵn sàng nhận dự án.
3. **Các phân hệ nội dung**:
   - **Hero Section**: Giới thiệu ấn tượng, số liệu thống kê (8+ năm kinh nghiệm, 54+ dự án, 1.8M+ users, 99.99% uptime), thẻ profile tương tác.
   - **About Me & Core Philosophy**: Câu chuyện nghề nghiệp và 4 nguyên tắc kỹ thuật chuẩn mực.
   - **Skills Matrix**: Phân loại theo Frontend, Backend & Cloud, AI & Data, DevOps & Tools với thanh tiến trình trực quan.
   - **Featured Projects**: Bộ lọc danh mục (AI & Cloud, Fullstack, Mã nguồn mở) kèm **Interactive Modal** xem kiến trúc chi tiết, thông số và link live demo.
   - **Career Experience & Milestones**: Dòng thời gian kinh nghiệm và dấu mốc học vấn (Thủ khoa Bách Khoa).
   - **Testimonials**: Lời chứng thực và đánh giá 5 sao từ CTO, VP of Product và Head of Engineering.
   - **Developer Interactive Terminal (Playground)**: Cửa sổ dòng lệnh mini cho phép gõ các lệnh như `help`, `about`, `skills`, `projects`, `contact`, `coffee`, `sudo hire`, `clear`.
   - **Contact Form & Toast System**: Biểu mẫu liên hệ với validation, hiệu ứng loading và toast alert thông báo phản hồi.

---

## 📁 Cấu Trúc Thư Mục

```text
personal-portfolio/
├── public/
│   └── favicon.svg           # Favicon vector sắc nét
├── src/
│   ├── components/           # Các component giao diện
│   │   ├── Navbar.jsx        # Thanh điều hướng sticky & responsive
│   │   ├── Hero.jsx          # Banner chính & thẻ profile sống động
│   │   ├── About.jsx         # Giới thiệu & triết lý phát triển
│   │   ├── Skills.jsx        # Bảng kỹ năng chuyên môn & tiến trình
│   │   ├── Projects.jsx      # Danh mục dự án kèm bộ lọc
│   │   ├── ProjectModal.jsx  # Modal chi tiết kiến trúc dự án
│   │   ├── Experience.jsx    # Lộ trình sự nghiệp dạng timeline
│   │   ├── Testimonials.jsx  # Nhận xét từ đối tác & đồng nghiệp
│   │   ├── InteractiveTerminal.jsx # Cửa sổ dòng lệnh tương tác (CLI)
│   │   ├── Contact.jsx       # Form liên hệ & kênh kết nối
│   │   ├── Footer.jsx        # Chân trang & nút cuộn lên đầu
│   │   └── Icons.jsx         # Vector icons tùy biến
│   ├── data/
│   │   └── portfolioData.js  # NƠI TẬP TRUNG TẤT CẢ DỮ LIỆU (Dễ dàng thay thế)
│   ├── App.jsx               # Root component & theme provider
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind base & utilities
├── index.html                # HTML template tối ưu SEO
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Hướng Dẫn Cài Đặt & Khởi Chạy

### 1. Khởi động môi trường phát triển (Development)
```bash
npm run dev
```
Trang web sẽ chạy tại `http://localhost:5173/`.

### 2. Đóng gói cho Production (Build)
```bash
npm run build
```
Kết quả sản phẩm tối ưu sẽ nằm tại thư mục `dist/`.

### 3. Xem trước bản Production (Preview)
```bash
npm run preview
```

---

## ✏️ Cách Đổi Sang Thông Tin Thực Của Bạn

Tất cả thông tin (Tên, Tiểu sử, Dự án, Kỹ năng, Kinh nghiệm, Mạng xã hội, Email...) đều được tách riêng trong file duy nhất:
👉 [src/data/portfolioData.js](file:///C:/Users/Admin/Documents/personal-portfolio/src/data/portfolioData.js)

Chỉ cần mở file này và thay đổi các giá trị theo ý muốn, toàn bộ website sẽ tự động cập nhật ngay lập tức!

---

## 🚀 Hướng Dẫn Triển Khai (Deploy) Lên Internet Miễn Phí

- **Vercel**: Chạy lệnh `npx vercel` hoặc kết nối kho Git trên [vercel.com](https://vercel.com).
- **Netlify**: Kéo thả thư mục `dist/` vào [app.netlify.com/drop](https://app.netlify.com/drop).
- **Cloudflare Pages**: Kết nối GitHub repository, chọn framework preset là `Vite`, build command là `npm run build`, output directory là `dist`.
