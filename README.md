# phuotmy.com — website Phượt Mỹ

Vite + React + TypeScript + Tailwind. Toàn bộ nội dung nằm trong `src/data/` — sửa dữ liệu, không cần đụng giao diện.

| Muốn sửa | Mở file |
|---|---|
| Hotline, Zalo, email, địa chỉ, mạng xã hội, số liệu cũ (`LEGACY_PROOF.show`) | `src/data/site.ts` |
| Tour: thêm/sửa giá, lịch, trạng thái (mở đăng ký sớm, đang nhận khách…) | `src/data/tours.ts` |
| Loại hình tour, nhu cầu, quốc gia, mùa | `src/data/taxonomy.ts` |
| Điểm đến | `src/data/destinations.ts` |
| Bài blog | `src/data/posts.ts` |
| Ảnh, album, video Drive, playlist YouTube | `src/data/media.ts` (+ file ảnh trong `public/media/`) |
| Menu | `src/data/nav.ts` |

Ảnh thật: WebP 2 cỡ — `ten-anh.webp` (1600px) và `ten-anh-sm.webp` (800px). Ảnh minh hoạ tự gắn nhãn "Ảnh minh hoạ".

```bash
npm install
npm run dev     # chạy thử
npm run build   # xuất bản ra dist/ (tự sinh sitemap.xml, robots.txt)
```

Triển khai: đẩy lên GitHub → trong Readdy bấm **Pull** → **Publish**. Bản cũ vẫn nằm trong lịch sử phiên bản của Readdy.
