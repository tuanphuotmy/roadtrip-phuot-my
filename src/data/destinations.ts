// ĐIỂM ĐẾN — nội dung giữ từ site cũ, bổ sung Las Vegas, Washington DC, Banff.
import type { MediaKey } from './media';

export interface Destination {
  slug: string;
  name: string;
  region: string;
  country: 'my' | 'canada';
  summary: string;
  stay: string; // nên ở bao lâu
  season: string; // mùa đẹp
  image: MediaKey;
  overview: string;
  highlights: string[];
  tips: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    slug: 'yosemite',
    name: 'Yosemite',
    region: 'California',
    country: 'my',
    summary: 'Vách đá granite, thác nước và thung lũng xanh — một trong những công viên quốc gia đẹp nhất nước Mỹ.',
    stay: '2–4 ngày',
    season: 'Tháng 5–9',
    image: 'doanYosemite',
    overview:
      'Yosemite nổi tiếng với những vách đá granite khổng lồ như El Capitan và Half Dome, thác Yosemite Falls và thung lũng xanh. Công viên được UNESCO công nhận là Di sản Thế giới.',
    highlights: [
      'Half Dome – vách đá hình bán cầu cao 1.444 m',
      'El Capitan – vách granite dựng đứng cao khoảng 900 m',
      'Yosemite Falls – thác cao 739 m, đẹp nhất mùa xuân khi tuyết tan',
      'Glacier Point – nhìn toàn cảnh thung lũng',
      'Mariposa Grove – rừng sequoia khổng lồ',
      'Tunnel View – góc chụp kinh điển của Yosemite',
    ],
    tips: [
      'Mùa hè rất đông, nên đặt chỗ ở trước 6–12 tháng.',
      'Tháng 5–6 và 9–10 ít đông hơn mà thời tiết vẫn đẹp.',
      'Dùng xe buýt miễn phí trong thung lũng để khỏi tìm chỗ đỗ xe.',
      'Có gấu đen: không để thức ăn trong xe, dùng hộp chống gấu khi cắm trại.',
    ],
  },
  {
    slug: 'las-vegas',
    name: 'Las Vegas',
    region: 'Nevada',
    country: 'my',
    summary: 'Thành phố giải trí giữa sa mạc, điểm xuất phát đến Grand Canyon và các công viên miền Tây.',
    stay: '1–2 ngày',
    season: 'Tháng 3–5, 9–11',
    image: 'lasVegas',
    overview:
      'Las Vegas không chỉ có casino mà còn có các show diễn lớn, nhà hàng và là điểm xuất phát thuận tiện đến Grand Canyon, Zion, Red Rock Canyon.',
    highlights: ['Biển chào mừng "Welcome to Fabulous Las Vegas"', 'Đại lộ The Strip về đêm', 'Red Rock Canyon ngay ngoại ô', 'Điểm nối đi Grand Canyon'],
    tips: ['Mùa hè rất nóng, tránh đi bộ ngoài trời giữa trưa.', 'Khách sạn giữa tuần thường rẻ hơn cuối tuần.'],
  },
  {
    slug: 'washington-dc',
    name: 'Washington DC',
    region: 'Bờ Đông',
    country: 'my',
    summary: 'Thủ đô nước Mỹ: Nhà Trắng, Đồi Capitol, các đài tưởng niệm và mùa hoa anh đào bên sông Potomac.',
    stay: '1–2 ngày',
    season: 'Tháng 3–4 (hoa anh đào), 9–10',
    image: 'hoaAnhDaoDC',
    overview:
      'Washington DC tập trung các biểu tượng chính trị và lịch sử của nước Mỹ. Mùa xuân, hàng anh đào quanh hồ Tidal Basin và dọc sông Potomac nở rộ.',
    highlights: ['National Mall và các đài tưởng niệm', 'Đồi Capitol, Nhà Trắng (chụp ảnh bên ngoài)', 'Bảo tàng Smithsonian', 'Hoa anh đào mùa xuân'],
    tips: ['Ngày hoa nở rộ thay đổi theo năm, thường cuối tháng 3 – đầu tháng 4.', 'Nhiều bảo tàng Smithsonian miễn phí vào cửa.'],
  },
  {
    slug: 'banff-rockies',
    name: 'Banff & Rockies',
    region: 'Alberta, Canada',
    country: 'canada',
    summary: 'Hồ ngọc bích, núi tuyết và sông băng của dãy Rockies Canada.',
    stay: '2–3 ngày',
    season: 'Tháng 6–9 (lá vàng cuối tháng 9)',
    image: 'doanAlberta',
    overview:
      'Vườn quốc gia Banff là Di sản Thế giới UNESCO, nổi tiếng với Lake Louise, Moraine Lake và cung đường Icefields Parkway nối sang Jasper.',
    highlights: ['Lake Louise, Moraine Lake', 'Icefields Parkway, sông băng Columbia', 'Cáp treo Banff Gondola', 'Thị trấn Banff'],
    tips: ['Mùa thu rất đông, nên giữ phòng trước 3–6 tháng.', 'Khách Việt đi đường bộ từ Mỹ sang cần visa Canada (eTA chỉ dùng khi đi máy bay).'],
  },
  {
    slug: 'grand-canyon',
    name: 'Grand Canyon',
    region: 'Arizona',
    country: 'my',
    summary: 'Hẻm núi sâu hơn 1,6 km, Di sản Thế giới UNESCO.',
    stay: '1–2 ngày',
    season: 'Tháng 3–5, 9–11',
    image: 'illusCanyon',
    overview:
      'Grand Canyon sâu hơn 1,6 km, rộng tới 29 km và dài 446 km, với những lớp đá hình thành qua hàng triệu năm. Đây là điểm không thể thiếu khi đi miền Tây nước Mỹ.',
    highlights: ['South Rim – mở cửa quanh năm, nhiều điểm ngắm', 'North Rim – hoang sơ, cao hơn khoảng 300 m', 'Mather Point', 'Desert View Watchtower', 'Bình minh và hoàng hôn trên các lớp đá'],
    tips: ['Đến điểm ngắm trước bình minh để tránh đông.', 'Mang 3–4 lít nước/người/ngày khi đi bộ.', 'Mặc nhiều lớp vì nhiệt độ thay đổi theo độ cao.'],
  },
  {
    slug: 'yellowstone',
    name: 'Yellowstone',
    region: 'Wyoming, Montana, Idaho',
    country: 'my',
    summary: 'Công viên quốc gia đầu tiên trên thế giới: suối nước nóng, mạch nước phun, động vật hoang dã.',
    stay: '2–3 ngày',
    season: 'Tháng 5–6, 9–10',
    image: 'illusGeyser',
    overview:
      'Thành lập năm 1872, Yellowstone nổi tiếng với Old Faithful, Grand Prismatic Spring và hàng nghìn hiện tượng địa nhiệt, cùng bò rừng bison, gấu, sói, nai elk.',
    highlights: ['Old Faithful – phun đều đặn khoảng 90 phút một lần', 'Grand Prismatic Spring', 'Grand Canyon of Yellowstone, thác Lower Falls', 'Lamar Valley, Hayden Valley – ngắm động vật'],
    tips: ['Luôn đi trên lối đi đánh dấu ở khu địa nhiệt.', 'Giữ khoảng cách 23 m với hầu hết động vật, 91 m với gấu và sói.', 'Công viên rất rộng, tính dư thời gian di chuyển.'],
  },
  {
    slug: 'route-66',
    name: 'Route 66',
    region: 'Illinois – California',
    country: 'my',
    summary: 'Con đường huyền thoại dài khoảng 3.940 km, biểu tượng văn hoá road trip Mỹ.',
    stay: 'Một đoạn 1–2 ngày hoặc trọn tuyến 10–14 ngày',
    season: 'Tháng 4–6, 9–10',
    image: 'route66',
    overview:
      'Route 66 – "Main Street of America" – chạy từ Chicago đến Santa Monica, thành lập năm 1926. Dù không còn là quốc lộ chính thức từ 1985, con đường vẫn hút khách với thị trấn nhỏ, quán diner cổ điển và biển neon.',
    highlights: ['Thị trấn nhỏ và quán diner cổ điển', 'Biển neon thập niên 1950–60', 'Điểm dừng độc đáo: Cadillac Ranch, Blue Whale, Wigwam Motel', 'Cảnh quan từ đồng bằng đến sa mạc'],
    tips: ['Nhiều quán nhỏ chỉ nhận tiền mặt.', 'Một số đoạn xa trạm xăng, kiểm tra xe trước khi đi.'],
  },
  {
    slug: 'monument-valley',
    name: 'Monument Valley',
    region: 'Arizona & Utah',
    country: 'my',
    summary: 'Những khối đá đỏ khổng lồ trên đất của người Navajo.',
    stay: '1 ngày',
    season: 'Tháng 3–5, 9–11',
    image: 'illusCanyon',
    overview:
      'Monument Valley nằm trên đất bộ tộc Navajo ở biên giới Arizona – Utah, với các khối đá sa thạch đỏ cao tới 300 m, xuất hiện trong rất nhiều phim miền Tây.',
    highlights: ['The Mittens', 'Valley Drive dài 27 km', 'John Ford Point', 'Bình minh và hoàng hôn'],
    tips: ['Cần mua vé vào khu bảo tồn của bộ tộc Navajo.', 'Đường Valley Drive là đường đất, xe gầm cao đi dễ hơn.', 'Tôn trọng văn hoá Navajo, không leo lên các khối đá.'],
  },
  {
    slug: 'antelope-canyon',
    name: 'Antelope Canyon',
    region: 'Page, Arizona',
    country: 'my',
    summary: 'Hẻm núi khe với vách đá uốn lượn và những tia sáng chiếu xuống.',
    stay: 'Nửa ngày',
    season: 'Tháng 3–10',
    image: 'illusCanyon',
    overview:
      'Antelope Canyon trên đất Navajo gần Page, Arizona, gồm Upper và Lower Canyon. Vào giữa trưa mùa hè, tia sáng chiếu qua khe hở tạo cảnh tượng nổi tiếng.',
    highlights: ['Tia sáng (tháng 3–10)', 'Upper Canyon – dễ đi', 'Lower Canyon – hẹp, có thang leo'],
    tips: ['Bắt buộc đi cùng hướng dẫn viên Navajo, đặt tour trước 2–3 tháng mùa cao điểm.', 'Tour có thể huỷ khi có nguy cơ lũ.'],
  },
];

export const destinationBySlug = (slug: string) => DESTINATIONS.find((d) => d.slug === slug);
