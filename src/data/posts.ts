// BÀI VIẾT — 3 chuyên mục: điểm đến · hành trình (nhật ký ảnh từng đoàn) · cẩm nang.
// Mỗi bài là danh sách khối nội dung, thêm bài mới chỉ cần thêm 1 phần tử.
import type { MediaKey } from './media';

export type PostCategory = 'diem-den' | 'hanh-trinh' | 'cam-nang';
export const POST_CATEGORIES: Record<PostCategory, { name: string; short: string }> = {
  'diem-den': { name: 'Blog điểm đến', short: 'Nên đi mùa nào, ở mấy ngày, xem gì' },
  'hanh-trinh': { name: 'Blog hành trình', short: 'Nhật ký ảnh từng đoàn' },
  'cam-nang': { name: 'Cẩm nang', short: 'Visa, hành lý, lái xe ở Mỹ' },
};

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h2'; text: string }
  | { t: 'list'; items: string[] }
  | { t: 'img'; media: MediaKey; caption?: string }
  | { t: 'note'; text: string }
  | { t: 'sources'; items: { label: string; href: string }[] };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  date: string; // YYYY-MM-DD
  readMin: number;
  cover: MediaKey;
  body: Block[];
  relatedTours?: string[];
}

export const POSTS: Post[] = [
  {
    slug: 'visa-canada-khi-di-duong-bo-tu-my',
    title: 'Đi từ Mỹ sang Canada bằng đường bộ: cần visa Canada, không dùng eTA',
    excerpt: 'Điều nhiều khách hiểu nhầm khi đi tour liên tuyến Mỹ – Canada bằng xe.',
    category: 'cam-nang',
    date: '2026-11-23',
    readMin: 3,
    cover: 'doanAlberta',
    relatedTours: ['phuot-my-autumn-us-canada'],
    body: [
      { t: 'p', text: 'Nhiều khách đã có visa Mỹ nghĩ rằng chỉ cần khai eTA (giấy phép du lịch điện tử) là vào được Canada. Điều này chỉ đúng khi đi máy bay.' },
      { t: 'h2', text: 'eTA chỉ dùng cho đường hàng không' },
      { t: 'p', text: 'Theo Bộ Di trú Canada (IRCC), công dân một số nước cần visa có thể xin eTA thay cho visa, nhưng chỉ khi bay đến hoặc quá cảnh tại sân bay Canada. Khi vào Canada bằng ô tô, xe buýt, tàu hoả hay tàu thuỷ, vẫn phải có visa du lịch Canada (Temporary Resident Visa).' },
      { t: 'h2', text: 'Áp dụng cho tour liên tuyến của Phượt Mỹ' },
      { t: 'p', text: 'Tour Xuyên biên giới Hoa Kỳ & Canada đi xe qua cửa khẩu Peace Arch, nên mỗi khách cần cả visa Mỹ (B1/B2) và visa Canada. Phượt Mỹ hướng dẫn hồ sơ khi anh chị đăng ký.' },
      { t: 'note', text: 'Quy định có thể thay đổi. Luôn kiểm tra lại trên trang chính thức của Chính phủ Canada trước khi nộp hồ sơ.' },
      { t: 'sources', items: [
        { label: 'IRCC – Ai được xin eTA', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/eligibility.html' },
        { label: 'IRCC – eTA cho công dân một số nước cần visa', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/eligibility/eta-x.html' },
      ] },
    ],
  },
  {
    slug: 'caravan-my-canada-thang-9',
    title: 'Nhật ký ảnh: đoàn caravan Mỹ – Canada qua dãy Rockies',
    excerpt: 'Những khoảnh khắc của đoàn caravan Mỹ – Canada khi vào địa phận Alberta.',
    category: 'hanh-trinh',
    date: '2026-10-07',
    readMin: 2,
    cover: 'doanAlberta',
    relatedTours: ['phuot-my-autumn-us-canada'],
    body: [
      { t: 'p', text: 'Đoàn caravan Mỹ – Canada của Phượt Mỹ dừng chân tại biển chào mừng tỉnh bang Alberta, cửa ngõ vào dãy Rockies.' },
      { t: 'img', media: 'doanAlberta', caption: 'Cả đoàn trước biển "Welcome to Alberta – Wild Rose Country"' },
      { t: 'img', media: 'capDoiAlberta', caption: 'Niềm vui khi chạm tới Rockies' },
      { t: 'note', text: 'Phượt Mỹ sẽ bổ sung câu chuyện của đoàn trong bài này.' },
    ],
  },
  {
    slug: 'top-10-destinations',
    title: 'Top 10 điểm đến không thể bỏ lỡ khi road trip Mỹ',
    excerpt: 'Từ Grand Canyon đến Yellowstone, từ bờ Đông sang bờ Tây nước Mỹ.',
    category: 'diem-den',
    date: '2025-01-15',
    readMin: 8,
    cover: 'route66',
    body: [
      { t: 'p', text: 'Nước Mỹ là thiên đường road trip với hệ thống cao tốc hiện đại và cảnh quan đa dạng từ sa mạc đến núi tuyết, từ bờ biển đến thung lũng. Dưới đây là 10 điểm đến đáng đi nhất.' },
      { t: 'h2', text: '1. Grand Canyon, Arizona' },
      { t: 'p', text: 'Hẻm núi sâu hơn 1,6 km, rộng tới 29 km và dài 446 km. Nên đi tháng 3–5 và 9–11, ở lại qua đêm để ngắm bình minh và hoàng hôn, mang đủ nước vì mùa hè có thể lên tới 40°C.' },
      { t: 'h2', text: '2. Yellowstone, Wyoming' },
      { t: 'list', items: ['Old Faithful – phun đều đặn khoảng 90 phút một lần', 'Grand Prismatic Spring – suối nước nóng nhiều màu lớn nhất nước Mỹ', 'Hồ Yellowstone', 'Lamar Valley – nơi gặp bison, elk, gấu'] },
      { t: 'h2', text: '3. Route 66' },
      { t: 'img', media: 'route66' },
      { t: 'p', text: 'Khoảng 3.940 km từ Chicago đến Santa Monica, biểu tượng văn hoá road trip Mỹ. Dành ít nhất 2 tuần nếu đi trọn tuyến, ghé các thị trấn nhỏ và quán ăn cổ điển dọc đường.' },
      { t: 'h2', text: '4. Yosemite, California' },
      { t: 'img', media: 'doanYosemite', caption: 'Đoàn caravan Phượt Mỹ tại Yosemite' },
      { t: 'list', items: ['Half Dome – cần giấy phép nếu leo', 'El Capitan – vách granite cao khoảng 900 m', 'Yosemite Falls – thác cao 739 m', 'Glacier Point – điểm ngắm đẹp nhất'] },
      { t: 'h2', text: '5. Pacific Coast Highway, California' },
      { t: 'p', text: 'Highway 1 dọc bờ biển California. Đi từ Bắc xuống Nam để sát biển hơn, dừng ở Big Sur, Carmel-by-the-Sea, Santa Barbara, kiểm tra tình trạng đường vì có thể sạt lở.' },
      { t: 'h2', text: '6. Monument Valley, Utah/Arizona' },
      { t: 'p', text: 'Những khối đá sa thạch đỏ trên đất Navajo, cần mua vé vào cửa. Bình minh và hoàng hôn là lúc đẹp nhất.' },
      { t: 'h2', text: '7. New York City' },
      { t: 'p', text: 'Tượng Nữ thần Tự do, Times Square, Central Park. Đi tàu điện ngầm là nhanh nhất, nên đặt trước vé các điểm nổi tiếng.' },
      { t: 'h2', text: '8. Miami & Florida Keys' },
      { t: 'list', items: ['South Beach với kiến trúc Art Deco', 'Key West – cực Nam nước Mỹ', 'Vườn quốc gia Everglades', 'Overseas Highway – đường trên biển'] },
      { t: 'h2', text: '9. Las Vegas, Nevada' },
      { t: 'img', media: 'lasVegas' },
      { t: 'p', text: 'Thành phố giải trí với show diễn lớn và là điểm xuất phát đi Grand Canyon. Khách sạn giữa tuần thường rẻ hơn.' },
      { t: 'h2', text: '10. Great Smoky Mountains' },
      { t: 'p', text: 'Công viên quốc gia đông khách nhất nước Mỹ, miễn phí vào cửa. Tháng 10 là mùa lá vàng lá đỏ đẹp nhất.' },
      { t: 'p', text: 'Mỗi nơi một vẻ đẹp riêng. Road trip không chỉ là đích đến mà là cả hành trình dọc đường.' },
    ],
  },
  {
    slug: 'preparation-guide',
    title: 'Chuẩn bị gì cho chuyến road trip Mỹ đầu tiên?',
    excerpt: 'Giấy tờ, hành lý, thiết bị và danh sách kiểm tra trước khi lên đường.',
    category: 'cam-nang',
    date: '2025-01-12',
    readMin: 6,
    cover: 'caravanTuyet',
    body: [
      { t: 'p', text: 'Chuẩn bị kỹ là chìa khoá cho một chuyến road trip suôn sẻ. Dưới đây là những gì cần mang.' },
      { t: 'h2', text: 'Giấy tờ' },
      { t: 'list', items: ['Hộ chiếu còn hạn ít nhất 6 tháng', 'Visa Mỹ B1/B2 (công dân Việt Nam không thuộc diện miễn visa ESTA)', 'Bằng lái quốc tế (IDP) nếu tự lái', 'Hợp đồng thuê xe, bảo hiểm du lịch và bảo hiểm xe', 'Thẻ tín dụng quốc tế (Visa/Mastercard)', 'Bản sao giấy tờ, lưu cả bản điện tử'] },
      { t: 'h2', text: 'Hành lý và quần áo' },
      { t: 'list', items: ['Quần áo cho 7–10 ngày, giặt dọc đường nếu đi lâu hơn', 'Áo khoác cho mọi mùa vì đêm có thể lạnh', 'Giày thể thao, dép, giày đi bộ đường núi', 'Mũ, kính râm, kem chống nắng — nhất là ở sa mạc'] },
      { t: 'h2', text: 'Thiết bị điện tử' },
      { t: 'list', items: ['Sạc dự phòng từ 20.000 mAh', 'Ổ chuyển điện (Mỹ dùng điện 110V)', 'Dây sạc trên xe', 'Thẻ nhớ dự phòng cho máy ảnh'] },
      { t: 'h2', text: 'Thuốc và đồ cá nhân' },
      { t: 'list', items: ['Thuốc cá nhân kèm đơn bác sĩ', 'Thuốc cảm, đau đầu, dị ứng, tiêu hoá', 'Thuốc chống muỗi, băng cá nhân'] },
      { t: 'h2', text: 'Danh sách kiểm tra trước khi khởi hành' },
      { t: 'list', items: ['Tải bản đồ offline', 'Báo ngân hàng về chuyến đi', 'Đặt trước chỗ ở 2–3 đêm đầu', 'Xem thời tiết dọc tuyến', 'Gửi lịch trình cho người thân'] },
      { t: 'p', text: 'Mang đủ chứ không cần mang mọi thứ — hầu hết đồ dùng đều mua được dọc đường.' },
    ],
  },
  {
    slug: 'driving-safety',
    title: 'Kinh nghiệm lái xe an toàn trên đường Mỹ',
    excerpt: 'Luật giao thông, biển báo và những lưu ý quan trọng cho người Việt lái xe tại Mỹ.',
    category: 'cam-nang',
    date: '2025-01-10',
    readMin: 8,
    cover: 'doanYosemite',
    relatedTours: ['c2-caravan-california'],
    body: [
      { t: 'p', text: 'Lái xe ở Mỹ có nhiều điểm khác Việt Nam. Hiểu luật và văn hoá lái xe giúp anh chị tự tin và an toàn.' },
      { t: 'h2', text: 'Khác biệt cơ bản' },
      { t: 'list', items: ['Đơn vị dặm (miles), gallon', 'Đèn đỏ được rẽ phải sau khi dừng hẳn, trừ khi có biển cấm', 'Xe buýt trường học bật đèn đỏ nhấp nháy: phải dừng hẳn', 'Ưu tiên tuyệt đối cho người đi bộ', 'Không cầm điện thoại khi lái; mọi người trên xe thắt dây an toàn'] },
      { t: 'h2', text: 'Biển báo quan trọng' },
      { t: 'list', items: ['STOP (bát giác đỏ): dừng hẳn, xe đến trước đi trước', 'YIELD (tam giác): nhường đường', 'Speed Limit: giới hạn tốc độ (mph)', 'School Zone: giảm tốc khu trường học', 'Railroad Crossing: dừng, quan sát đường sắt'] },
      { t: 'h2', text: 'Luật cần nhớ' },
      { t: 'list', items: ['Thành phố 25–35 mph, cao tốc 55–75 mph', 'Không uống rượu bia khi lái', 'Trẻ nhỏ ngồi ghế an toàn phù hợp', 'Nhường đường xe cứu thương, cảnh sát, cứu hoả'] },
      { t: 'h2', text: 'Trên cao tốc' },
      { t: 'list', items: ['Làn trái để vượt', 'Giữ khoảng cách 3 giây', 'Bật xi nhan trước khi chuyển làn', 'Bị cảnh sát dừng: đỗ sát lề, tắt máy, để tay trên vô lăng'] },
      { t: 'h2', text: 'Đổ xăng tự phục vụ' },
      { t: 'list', items: ['Tắt máy, mở nắp bình', 'Chọn xăng Regular 87', 'Quẹt thẻ hoặc trả trong quầy', 'Bơm đến khi vòi tự ngắt, đóng nắp, lấy hoá đơn'] },
      { t: 'h2', text: 'Khi có sự cố' },
      { t: 'list', items: ['Xe hỏng: bật đèn cảnh báo, đỗ sát lề, gọi hỗ trợ của hãng xe', 'Va chạm nhỏ: chụp ảnh, trao đổi thông tin bảo hiểm', 'Tai nạn nghiêm trọng: gọi 911'] },
      { t: 'note', text: 'Vi phạm giao thông ở Mỹ có thể bị phạt nặng và ảnh hưởng hồ sơ visa sau này.' },
    ],
  },
];

export const postBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);
export const sortedPosts = () => [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
