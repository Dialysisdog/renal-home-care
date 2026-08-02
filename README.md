# Cẩm nang chạy thận tại nhà / Home Dialysis Guide

Website đơn giản bằng Next.js (App Router) + Tailwind CSS, trình bày 9 chủ đề
chăm sóc chạy thận tại nhà theo cấu trúc sơ đồ tư duy: trang chủ là "trung
tâm", mỗi thẻ dẫn tới một "nhánh" chủ đề. Toàn bộ nội dung **song ngữ
Việt–Anh**, chuyển đổi qua nút VI/EN ở góc trên bên phải; lựa chọn ngôn ngữ
được lưu lại trong trình duyệt (localStorage) cho lần truy cập sau.

## Cài đặt

Yêu cầu: Node.js 18.18 trở lên.

```bash
npm install
npm run dev
```

Mở http://localhost:3000 để xem trang.

## Cấu trúc dự án

```
app/
  page.tsx                # Trang chủ - lưới 9 chủ đề
  chu-de/[slug]/page.tsx  # Route tĩnh, chỉ tìm topic rồi giao cho component client
  layout.tsx              # Layout gốc, khai báo font, bọc LanguageProvider + TopBar
  globals.css             # Tailwind + style nền
lib/
  topics.ts               # Nội dung 9 chủ đề, mỗi chủ đề có bản `vi` và `en`
  ui-strings.ts           # Các chuỗi giao diện tĩnh (nút, tiêu đề...) theo 2 ngôn ngữ
components/
  LanguageProvider.tsx    # Context lưu ngôn ngữ hiện tại + đọc/ghi localStorage
  TopBar.tsx              # Thanh trên cùng, chứa nút chuyển VI/EN
  TopicCard.tsx           # Thẻ chủ đề ở trang chủ
  TopicDetailClient.tsx   # Nội dung trang chi tiết chủ đề (client component)
  Disclaimer.tsx          # Hộp lưu ý y khoa
```

## Chỉnh sửa nội dung

Toàn bộ nội dung văn bản nằm trong `lib/topics.ts` — mỗi chủ đề là một object
gồm `slug`, `icon`, `color` (màu nhánh), và hai object `vi` / `en`, mỗi object
có `title`, `shortTitle`, `summary`, và `sections` (mảng mục con, mỗi mục có
`heading` và mảng `items`). Sửa nội dung ngôn ngữ nào thì sửa trong object đó;
hai bản không bắt buộc phải giống cấu trúc số mục tuyệt đối. Các chuỗi giao
diện tĩnh (như "Xem chi tiết", "Về trang chủ") nằm trong `lib/ui-strings.ts`.

Thêm/sửa/xoá trực tiếp trong mảng `topics`, trang sẽ tự cập nhật vì route
`/chu-de/[slug]` được sinh động từ mảng này.

## Ngôn ngữ mặc định

Lần đầu vào trang, ứng dụng thử đoán ngôn ngữ theo trình duyệt (`vi` nếu trình
duyệt đặt tiếng Việt, ngược lại `en`); sau đó luôn ưu tiên lựa chọn đã lưu
trong `localStorage`. Muốn đổi mặc định cứng, sửa giá trị khởi tạo trong
`components/LanguageProvider.tsx`.

## Build cho production

```bash
npm run build
npm start
```

## Lưu ý

Nội dung trong dự án mang tính thông tin tham khảo chung, không thay thế
hướng dẫn cá nhân hóa từ đội ngũ y tế của người bệnh.
