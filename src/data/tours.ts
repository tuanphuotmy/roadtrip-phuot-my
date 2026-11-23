// DỮ LIỆU TOUR — thêm/sửa tour chỉ cần sửa file này.
// Trạng thái: early = Mở đăng ký sớm · open = Đang nhận khách · year = Nhận đặt quanh năm
//             soon = Sắp ra mắt · sample = Lịch trình mẫu (thiết kế riêng theo nhóm)
import type { MediaKey } from './media';

export type TourStatus = 'early' | 'open' | 'year' | 'soon' | 'sample';

export interface Day {
  day: number;
  title: string;
  text?: string;
  items?: string[];
  stay?: string;
}

export interface Tour {
  slug: string;
  name: string;
  short: string;
  duration: string;
  route: string[];
  status: TourStatus;
  statusNote?: string;
  types: string[]; // slug trong taxonomy 'loai-hinh'
  needs: string[]; // 'nhu-cau'
  countries: string[]; // 'quoc-gia'
  seasons: string[]; // 'theo-mua'
  style?: string; // nhãn phụ: Caravan tự lái, Xe có tài xế…
  price: { text: string; note?: string; tiers?: { label: string; amount: string; badge?: string }[] };
  departures?: { date: string; note: string }[];
  image: MediaKey;
  gallery?: MediaKey[];
  overview: string;
  highlights: { title: string; text: string }[];
  itinerary?: Day[];
  itineraryNote?: string;
  included?: string[];
  excluded?: string[];
  tips?: { title: string; text: string }[];
  destinations?: string[]; // slug trong destinations.ts
  featured?: boolean;
}

export const STATUS_LABEL: Record<TourStatus, string> = {
  early: 'Mở đăng ký sớm',
  open: 'Đang nhận khách',
  year: 'Nhận đặt quanh năm',
  soon: 'Sắp ra mắt',
  sample: 'Lịch trình mẫu',
};

export const TOURS: Tour[] = [
  {
    slug: 'phuot-my-autumn-us-canada',
    name: 'Xuyên biên giới Hoa Kỳ & Canada – hành trình mùa thu',
    short: '14 ngày qua Seattle, Vancouver, Victoria, Banff, Glacier và Yellowstone.',
    duration: '14 ngày 13 đêm',
    route: ['Seattle', 'Leavenworth', 'Vancouver', 'Victoria', 'Kelowna', 'Banff', 'Glacier NP', 'Yellowstone'],
    status: 'early',
    types: ['ghep-doan-tu-viet-nam', 'theo-mua'],
    needs: ['cap-doi-nhom-ban', 'huu-tri-an-nhan'],
    countries: ['lien-tuyen', 'my', 'canada'],
    seasons: ['mua-thu'],
    style: 'Xe SUV 7 chỗ, có hướng dẫn viên',
    price: {
      text: 'Từ 129 triệu',
      note: 'Giá cho 1 khách, gồm vé máy bay khứ hồi Việt Nam – Seattle, xe, khách sạn, HDV, bảo hiểm, vé tham quan và một số bữa ăn.',
      tiers: [
        { label: 'Khách đã đi chuyến trước', amount: '129.000.000 đ', badge: 'Ưu đãi' },
        { label: 'Đăng ký lần đầu', amount: '149.000.000 đ' },
      ],
    },
    departures: [{ date: 'Mùa thu 2027', note: 'Ngày cụ thể đang chốt – đăng ký để giữ chỗ sớm' }],
    image: 'doanAlberta',
    gallery: ['doanAlberta', 'capDoiAlberta', 'doanVancouver'],
    featured: true,
    overview:
      'Trong 14 ngày, đoàn đi qua hai quốc gia Bắc Mỹ: từ Seattle bên bờ Thái Bình Dương, làng Bavaria Leavenworth giữa dãy Cascade, nhà máy Boeing Everett, vượt biên giới ở Peace Arch sang Vancouver, đi phà ra đảo Victoria, qua thung lũng rượu vang Okanagan, lên dãy Rockies với Banff, Lake Louise và sông băng Columbia, rồi quay về Mỹ qua Glacier National Park, vùng đất người Blackfeet và kết thúc ở Yellowstone.',
    highlights: [
      { title: 'Hai quốc gia một hành trình', text: 'Mỹ và Canada, qua nhiều bang và tỉnh bang.' },
      { title: 'Dãy Rockies mùa thu', text: 'Banff, Lake Louise, Icefields Parkway, Glacier National Park.' },
      { title: 'Cộng đồng Phượt Mỹ đồng hành', text: 'Đội ngũ tổ chức và hướng dẫn đi cùng suốt chuyến.' },
      { title: 'Nhóm nhỏ', text: 'Không đông, có thời gian thật sự ở từng điểm.' },
      { title: 'Văn hoá bản địa', text: 'Làng Bavaria Leavenworth, vùng đất của người Blackfeet.' },
      { title: 'Học hỏi dọc đường', text: 'Nhà máy Boeing, địa chất các công viên quốc gia.' },
    ],
    itinerary: [
      { day: 1, title: 'Đến Seattle', items: ['Đón tại sân bay Seattle-Tacoma (SEA), nhập cảnh Hoa Kỳ', 'Về khách sạn nghỉ ngơi', 'Tối: gặp gỡ cộng đồng Phượt Mỹ, bữa tối chào mừng'], stay: 'Khách sạn trung tâm Seattle' },
      { day: 2, title: 'Seattle – làng Bavaria Leavenworth', items: ['Space Needle, Pike Place Market, quán Starbucks đầu tiên', 'Vượt đèo Stevens Pass qua dãy Cascade', 'Đến làng cổ tích Leavenworth'], stay: 'Khách sạn/Resort Leavenworth' },
      { day: 3, title: 'Nhà máy Boeing Everett', items: ['Dây chuyền lắp ráp Boeing 747, 777, 787 Dreamliner', 'Future of Flight Aviation Center', 'Chuẩn bị giấy tờ vượt biên giới'], stay: 'Khu vực Seattle/Everett' },
      { day: 4, title: 'Vượt biên giới – Vancouver', items: ['Cửa khẩu Peace Arch', 'Stanley Park, Canada Place', 'Phố cổ Gastown'], stay: 'Trung tâm Vancouver' },
      { day: 5, title: 'Đảo Victoria', items: ['Phà BC Ferries qua eo biển Georgia', 'Vườn Butchart Gardens', 'Inner Harbour, toà nhà Quốc hội, khách sạn Fairmont Empress', 'Phà tối về Vancouver'], stay: 'Trung tâm Vancouver' },
      { day: 6, title: 'Vancouver – Kelowna, thung lũng Okanagan', items: ['Qua dãy Coast Mountains', 'Vườn nho, rượu vang Icewine', 'Hoàng hôn bên hồ Okanagan'], stay: 'Kelowna' },
      { day: 7, title: 'Kelowna – Banff', items: ['Đèo Rogers Pass, hẻm Kicking Horse', 'Vườn quốc gia Yoho, thác Takakkaw', 'Thị trấn Banff, hoàng hôn Vermilion Lakes'], stay: 'Banff' },
      { day: 8, title: 'Trọn ngày Banff', items: ['Glacier Skywalk', 'Lake Louise, Moraine Lake', 'Cáp treo Banff Gondola', 'Icefields Parkway, xe Ice Explorer trên sông băng Columbia'], stay: 'Banff' },
      { day: 9, title: 'Về Mỹ – Glacier National Park', items: ['Cửa khẩu Chief Mountain', 'Going-to-the-Sun Road (nếu còn mở), Logan Pass', 'Hidden Lake Overlook, Many Glacier'], stay: 'Khu vực Glacier NP' },
      { day: 10, title: 'Vùng đất Blackfeet', items: ['Bảo tàng Museum of the Plains Indian', 'Lều tepee, giao lưu văn hoá', 'Thảo nguyên Montana'], stay: 'Khu vực Browning' },
      { day: 11, title: 'Yellowstone', items: ['Mammoth Hot Springs, Norris Geyser Basin', 'Old Faithful, Grand Prismatic Spring', 'Hayden Valley, hồ Yellowstone'], stay: 'Lodge trong Yellowstone' },
      { day: 12, title: 'Yellowstone – Spokane', items: ['Thị trấn miền Tây Montana', 'Dãy Bitterroot, Idaho', 'Thác Spokane Falls'], stay: 'Trung tâm Spokane' },
      { day: 13, title: 'Spokane – Seattle, tiệc chia tay', items: ['Đèo Snoqualmie', 'Mua sắm quà', 'Tiệc chia tay cùng cộng đồng Phượt Mỹ'], stay: 'Trung tâm Seattle' },
      { day: 14, title: 'Bay về Việt Nam', items: ['Sáng tự do', 'Ra sân bay SEA, kết thúc hành trình'] },
    ],
    included: [
      'Vé máy bay khứ hồi Việt Nam – Seattle',
      'Xe SUV 7 chỗ suốt 14 ngày',
      'Khách sạn 3–4 sao hoặc lodge (13 đêm)',
      'Hướng dẫn viên xuyên suốt hai quốc gia',
      'Bảo hiểm du lịch quốc tế',
      'Vé tham quan theo lịch trình, phà BC Ferries, Ice Explorer',
      'Một số bữa ăn: tối chào mừng, sáng tại khách sạn, tiệc chia tay',
      'Sim 4G Mỹ & Canada',
      'Hỗ trợ 24/7 từ Phượt Mỹ tại Mỹ và Việt Nam',
    ],
    excluded: [
      'Chi phí cá nhân, đồ uống ngoài bữa chính',
      'Lệ phí visa Mỹ và visa Canada',
      'Tip HDV và tài xế (khuyến nghị 10–15 USD/ngày/khách)',
      'Phụ thu phòng đơn',
      'Hoạt động tự chọn ngoài lịch trình',
    ],
    tips: [
      { title: 'Giấy tờ', text: 'Cần visa Mỹ (B1/B2) và visa Canada. Đoàn vào Canada bằng đường bộ nên không dùng eTA (eTA chỉ áp dụng khi đi máy bay). Hộ chiếu còn hạn ít nhất 6 tháng.' },
      { title: 'Thời điểm', text: 'Cuối tháng 9 – đầu tháng 10 đẹp nhất. Glacier NP có thể đóng một số đường từ giữa tháng 10 do tuyết.' },
      { title: 'Quần áo', text: 'Rockies có thể xuống dưới 0°C ở độ cao, ban ngày 15–20°C: mang áo lông vũ, găng tay, mũ len, giày chống trượt.' },
      { title: 'Đặt sớm', text: 'Banff và Yellowstone mùa thu rất đông, cần giữ phòng trước 3–6 tháng.' },
      { title: 'Động vật hoang dã', text: 'Giữ khoảng cách tối thiểu 91 m với gấu và sói, 23 m với bò rừng và nai.' },
    ],
    destinations: ['yellowstone', 'banff-rockies'],
  },
  {
    slug: 'c2-caravan-california',
    name: 'C2 Road trip California: sa mạc, rừng và biển',
    short: '10 ngày caravan tự lái: 3 vườn quốc gia, 2 sa mạc, 5 thành phố, hơn 3.000 km.',
    duration: '10 ngày 9 đêm',
    route: ['San Francisco', 'Napa', 'Lake Tahoe', 'Reno', 'Death Valley', 'Sequoia', 'Yosemite', 'Big Sur', 'Silicon Valley'],
    status: 'open',
    types: ['ghep-doan-tu-viet-nam'],
    needs: ['cap-doi-nhom-ban'],
    countries: ['my'],
    seasons: [],
    style: 'Caravan tự lái',
    price: { text: 'Liên hệ báo giá', note: 'Báo giá chi tiết theo gói dịch vụ và số xe.' },
    image: 'doanYosemite',
    gallery: ['doanYosemite', 'caravanTuyet', 'buaToiDoan'],
    featured: true,
    overview:
      'Hành trình caravan 10 ngày qua cung đường biển Thái Bình Dương và vùng núi rừng Nam Bắc California: San Francisco, thung lũng rượu Napa, hồ Lake Tahoe, bảo tàng xe cổ ở Reno, cung đường 395, Thung Lũng Chết, rừng cây khổng lồ Sequoia, Yosemite, Big Sur và Silicon Valley.',
    highlights: [
      { title: 'Hơn 3.000 km đường bộ', text: 'Khoảng 50 giờ xe qua những cung đường đẹp nhất California.' },
      { title: '3 vườn quốc gia', text: 'Death Valley, Sequoia và Yosemite.' },
      { title: 'Tự cầm lái', text: 'Xe SUV/Pickup theo nhóm 4 người/xe, có bộ đàm và GPS.' },
      { title: 'Bảo tàng xe cổ ở Reno', text: 'Một trong những bảo tàng xe hơi cổ lớn nhất thế giới.' },
      { title: 'Big Sur', text: 'Cung đường ven biển với cầu Bixby Bridge.' },
      { title: 'Silicon Valley', text: 'Ghé trụ sở Google, Meta, Apple Park.' },
    ],
    itinerary: [
      { day: 1, title: 'Việt Nam – San Francisco', items: ['Bay qua Đài Bắc nối chuyến đi San Francisco', 'Nhập cảnh Mỹ, xe đón theo giờ cố định 20:00'], stay: 'Holiday Inn SFO hoặc AirBnB' },
      { day: 2, title: 'Napa Valley – Cầu Cổng Vàng', items: ['Nhận xe, lái làm quen đến Napa (~2 giờ)', 'Trang trại nho và hầm rượu', 'Lái qua Golden Gate, phố hoa Lombard, Bay Bridge, đỉnh Twin Peaks', 'Ăn tối nhà hàng Việt'], stay: 'Holiday Inn SFO hoặc AirBnB' },
      { day: 3, title: 'Lake Tahoe – Reno', items: ['Đường núi rừng thông đến Lake Tahoe', 'Vượt dãy Sierra đến Reno', 'Bảo tàng xe hơi cổ, Reno Riverwalk'], stay: 'Reno Casino Hotel' },
      { day: 4, title: 'Cung đường 395 – Death Valley', items: ['Dọc dãy Sierra trên đường 395', 'Thị trấn cowboy miền Tây', 'Badwater Basin (-86 m), Zabriskie Point, Artist\'s Palette', 'Tối ngắm sao trên sa mạc'], stay: 'Ranch of Death Valley' },
      { day: 5, title: 'Vườn quốc gia Sequoia', items: ['Băng đèo vượt núi đến Sequoia', 'Giant Forest, cây General Sherman', 'Hiking Sequoia – Kings Canyon'], stay: 'Lodge trong VQG Sequoia' },
      { day: 6, title: 'Yosemite', items: ['Thác Yosemite Falls, thung lũng Yosemite', 'Tunnel View, Half Dome, El Capitan, thác Bridalveil', 'Picnic trong công viên'], stay: 'Best Western Yosemite' },
      { day: 7, title: 'Monterey – Big Sur', items: ['Qua vùng nông nghiệp California', 'Monterey, 17 Miles Drive', 'Big Sur, cầu Bixby Bridge'], stay: 'Holiday Inn Monterey' },
      { day: 8, title: 'San Jose – Silicon Valley', items: ['Google, Meta, Apple Park', 'Vietnam Town – cộng đồng Việt lớn thứ 2 California', 'Mua sắm, ăn tối, trả xe, ra sân bay (bay 23:55)'] },
      { day: 9, title: 'Trên máy bay', items: ['Bay về Đài Bắc với Eva Air, vượt tuyến đổi ngày'] },
      { day: 10, title: 'Đài Bắc – Hà Nội / TP.HCM', items: ['Nối chuyến về Việt Nam, kết thúc chương trình'] },
    ],
    included: [
      'Vé máy bay quốc tế Hà Nội/TP.HCM – San Francisco khứ hồi (hành lý, thuế phí)',
      'HDV từ Việt Nam khi đoàn từ 10 khách bay',
      'Phòng đôi khách sạn/AirBnB 3–4 sao',
      'Vé tham quan theo hành trình',
      'Xe đón tiễn sân bay tại Mỹ',
      'Thuê xe 5–7 chỗ theo nhóm 4 khách/xe',
      'Bữa sáng và tối',
      'Trưởng đoàn hỗ trợ suốt hành trình tại Mỹ',
      'Nước uống, đồ ăn vặt trên xe',
      'Bảo hiểm du lịch toàn cầu tối đa 1 tỷ đồng/vụ/người',
      'Bộ đàm và bản đồ GPS',
      'Bằng lái quốc tế miễn phí khi đăng ký trước 3 tháng',
    ],
    excluded: [
      'Tip đội hậu cần caravan (100 USD/khách)',
      'Bảo hiểm cá nhân khác mua khi nhận xe',
      'Hư hại xe, phạt giao thông, phí cầu đường, đỗ xe',
      'Bữa trưa, đồ uống',
      'Lệ phí visa Mỹ',
      'Chi phí cá nhân, đổi vé',
    ],
    tips: [
      { title: 'Yêu cầu lái xe', text: 'Bằng lái Việt Nam (PET), kinh nghiệm tối thiểu 2 năm, thẻ tín dụng (không áp dụng debit). Nên có bằng lái quốc tế.' },
      { title: 'Không lái xe vẫn đi được', text: 'Có xe 15 chỗ với tài xế riêng cho khách không lái. Đăng ký sớm để sắp xếp.' },
      { title: 'An toàn', text: 'Không uống rượu bia suốt hành trình, kể cả buổi tối. Vi phạm luật giao thông có thể ảnh hưởng hồ sơ visa Mỹ sau này.' },
      { title: 'Số lượng tối thiểu', text: 'Chương trình chạy khi đủ 15 khách hoặc tối thiểu 4 xe.' },
      { title: 'Nâng cấp xe', text: 'Có thể nâng cấp F150, Ram, Jeep, Expedition, Suburban, Cadillac.' },
      { title: 'Đặt sớm', text: 'Đặt trước 3 tháng được tặng bằng lái quốc tế; sau đó phí 120 USD/khách.' },
    ],
    destinations: ['yosemite', 'route-66'],
  },
  {
    slug: 'dong-tay-hoa-ky',
    name: 'Đông Tây Hoa Kỳ',
    short: 'Tour ghép đoàn bờ Đông – bờ Tây cho khách lẻ, gia đình và người đi một mình.',
    duration: '10 ngày 9 đêm',
    route: ['New York', 'Washington DC', 'Las Vegas', 'Bờ Tây'],
    status: 'early',
    statusNote: 'Lịch 2027',
    types: ['ghep-doan-tu-viet-nam'],
    needs: ['gia-dinh-nhieu-the-he', 'huu-tri-an-nhan', 'tham-than-nhan', 'gia-dinh-co-con-du-hoc'],
    countries: ['my'],
    seasons: ['mua-xuan', 'mua-he', 'mua-thu'],
    style: 'Hai hạng: 3★ và 4★',
    price: { text: 'Đang cập nhật giá 2027', note: 'Hai lựa chọn tiêu chuẩn 3★ và 4★. Mùa khởi hành tháng 3 – 10.' },
    departures: [{ date: 'Tháng 3 – 10/2027', note: '2–3 đoàn mỗi tháng, cao điểm tháng 5 – 8' }],
    image: 'hoaAnhDaoDC',
    gallery: ['hoaAnhDaoDC', 'lasVegas'],
    featured: true,
    overview:
      'Sản phẩm chủ lực của Phượt Mỹ cho người lần đầu đi Mỹ: một chuyến đi cả hai bờ nước Mỹ, lịch khởi hành cố định, có trưởng đoàn. Lịch trình chi tiết năm 2027 đang được hoàn thiện — để lại thông tin, Phượt Mỹ gửi ngay khi có.',
    highlights: [
      { title: 'Hai bờ nước Mỹ', text: 'Bờ Đông và bờ Tây trong một chuyến.' },
      { title: 'Hai hạng dịch vụ', text: '3★ tiết kiệm hoặc 4★ thoải mái hơn.' },
      { title: 'Lịch cố định', text: 'Khởi hành đều đặn từ tháng 3 đến tháng 10.' },
    ],
  },
  {
    slug: 'tot-nghiep-cung-con',
    name: 'Gia đình dự lễ tốt nghiệp của con',
    short: 'Lõi 5 ngày 4 đêm ở Orange County, xoay quanh thời gian bên con; muốn đi thêm thì mở rộng.',
    duration: 'Lõi 5N4Đ + tuỳ chọn',
    route: ['Orange County', 'Trường của con', 'Tuỳ chọn: các điểm trong ~300 dặm', 'Tuỳ chọn: tuyến di sản miền Tây'],
    status: 'open',
    statusNote: 'Mùa tốt nghiệp 2027',
    types: ['thiet-ke-rieng', 'su-kien-dac-biet'],
    needs: ['gia-dinh-co-con-du-hoc', 'gia-dinh-nhieu-the-he'],
    countries: ['my'],
    seasons: ['mua-xuan', 'mua-he'],
    style: 'Tour riêng, xe 7 chỗ hoặc 9–10 chỗ',
    price: { text: 'Báo giá theo gia đình', note: 'Nhóm cơ bản 5 khách. Nơi ở chủ yếu Airbnb/homestay nguyên căn.' },
    image: 'illusGraduation',
    overview:
      'Chương trình lõi ngắn và nhẹ: đón gia đình, ổn định chỗ ở tại Orange County, dự lễ tốt nghiệp, dành thời gian bên con; ngày thứ 5 để con lo giấy tờ, mua sắm rồi bay về hoặc đi tiếp. Gia đình muốn đi thêm có hai lựa chọn mở rộng.',
    highlights: [
      { title: 'Xoay quanh con', text: 'Lịch đi theo lịch trường và lịch của con.' },
      { title: 'Mở rộng 2–3 ngày', text: 'Đến các điểm mới trong bán kính khoảng 300 dặm quanh Orange County.' },
      { title: 'Mở rộng 1 tuần', text: 'Tuyến di sản miền Tây Hoa Kỳ.' },
      { title: 'Xe nhỏ, nhóm riêng', text: 'Xe 7 chỗ hoặc 9–10 chỗ, không ghép khách lạ.' },
    ],
    itineraryNote: 'Lịch gợi ý, điều chỉnh theo lịch trường và mong muốn của gia đình.',
    itinerary: [
      { day: 1, title: 'Đến Los Angeles, về Orange County', text: 'Đón tại sân bay, nhận nhà, nghỉ ngơi.' },
      { day: 2, title: 'Ở bên con', text: 'Thăm trường, nơi con sống và học.' },
      { day: 3, title: 'Lễ tốt nghiệp', text: 'Dự lễ, chụp ảnh gia đình, bữa tối mừng con.' },
      { day: 4, title: 'Ngày tự do cùng gia đình', text: 'Đi chơi gần Orange County theo ý gia đình.' },
      { day: 5, title: 'Con lo giấy tờ, mua sắm', text: 'Ra sân bay về Việt Nam hoặc bắt đầu chương trình mở rộng.' },
    ],
    destinations: ['las-vegas'],
  },
  {
    slug: 'mien-tay-hoa-ky-tour-rieng',
    name: 'Miền Tây Hoa Kỳ – tour riêng',
    short: 'Tour riêng cố định cho nhóm 4–12 khách từ Việt Nam: California, Las Vegas, Arizona, Utah.',
    duration: 'Theo nhóm',
    route: ['California', 'Las Vegas', 'Arizona', 'Utah'],
    status: 'year',
    types: ['thiet-ke-rieng'],
    needs: ['gia-dinh-nhieu-the-he', 'cap-doi-nhom-ban', 'huu-tri-an-nhan', 'gia-dinh-co-con-du-hoc', 'tham-than-nhan'],
    countries: ['my'],
    seasons: ['mua-xuan', 'mua-he', 'mua-thu', 'mua-dong'],
    style: 'Xe 7 chỗ (4–5 khách) hoặc 12–15 chỗ (6–11 khách)',
    price: { text: 'Báo giá riêng', note: 'Giá gồm xe, nơi ở 4★ hoặc homestay đặc biệt, hướng dẫn viên. Các khoản khác có bảng giá tuỳ chọn.' },
    departures: [{ date: 'Quanh năm', note: 'Ưu tiên tháng 5 – 7 và 9 – 12' }],
    image: 'doanArizona',
    gallery: ['doanArizona', 'vachDaDo', 'lasVegas'],
    overview:
      'Một chương trình cố định cho nhóm riêng từ Việt Nam, cùng điểm đầu và điểm cuối, đi qua California, Nevada (Las Vegas), Arizona và Utah. Nhóm càng nhỏ càng linh hoạt nhịp đi.',
    highlights: [
      { title: 'Không ghép khách lạ', text: 'Cả xe là gia đình, bạn bè của anh chị.' },
      { title: 'Nơi ở chọn lọc', text: 'Khách sạn 4★ hoặc homestay đặc biệt.' },
      { title: 'Giá minh bạch', text: 'Giá gồm xe, nơi ở, hướng dẫn viên; phần khác chọn thêm theo bảng giá.' },
    ],
    destinations: ['las-vegas', 'grand-canyon', 'monument-valley', 'antelope-canyon'],
  },
  {
    slug: 'mien-dong-hoa-ky-tour-rieng',
    name: 'Miền Đông Hoa Kỳ – tour riêng',
    short: 'Tour riêng cho nhóm 4–12 khách: New York, Washington DC, Niagara, Boston.',
    duration: 'Theo nhóm',
    route: ['New York', 'Washington DC', 'Niagara', 'Boston'],
    status: 'year',
    types: ['thiet-ke-rieng'],
    needs: ['gia-dinh-nhieu-the-he', 'huu-tri-an-nhan', 'gia-dinh-co-con-du-hoc', 'tham-than-nhan'],
    countries: ['my'],
    seasons: ['mua-xuan', 'mua-he', 'mua-thu', 'mua-dong'],
    style: 'Xe 7 chỗ (4–5 khách) hoặc 12–15 chỗ (6–11 khách)',
    price: { text: 'Báo giá riêng', note: 'Giá gồm xe, nơi ở 4★ hoặc homestay đặc biệt, hướng dẫn viên.' },
    departures: [{ date: 'Cuối tháng 3 – 7, tháng 9 – 10, tháng 12', note: 'Theo lịch nhóm' }],
    image: 'hoaAnhDaoDC',
    overview:
      'Chương trình riêng cố định cho bờ Đông nước Mỹ, cùng điểm đầu và điểm cuối, đi New York, Washington DC, thác Niagara và Boston.',
    highlights: [
      { title: 'Bốn điểm biểu tượng', text: 'New York, Washington DC, Niagara, Boston.' },
      { title: 'Mùa đẹp', text: 'Hoa anh đào mùa xuân, lá thu tháng 9 – 10, không khí cuối năm tháng 12.' },
    ],
    destinations: ['washington-dc'],
  },
  {
    slug: 'doan-khen-thuong-doanh-nghiep',
    name: 'Đoàn khen thưởng & tri ân khách hàng doanh nghiệp',
    short: 'Thiết kế theo mục tiêu doanh nghiệp: khen thưởng, tri ân, gặp đối tác, hội chợ.',
    duration: 'Theo yêu cầu',
    route: ['Theo yêu cầu doanh nghiệp'],
    status: 'open',
    types: ['su-kien-dac-biet', 'thiet-ke-rieng'],
    needs: ['doanh-nghiep-khen-thuong'],
    countries: ['my', 'lien-tuyen'],
    seasons: [],
    price: { text: 'Báo giá riêng' },
    image: 'buaToiDoan',
    overview:
      'Phượt Mỹ có kinh nghiệm tổ chức đoàn khen thưởng, tri ân khách hàng và đưa doanh nghiệp Việt tham gia hội chợ, xúc tiến thương mại tại Mỹ. Lịch trình, hạng dịch vụ và hoạt động gắn kết được thiết kế theo mục tiêu của doanh nghiệp.',
    highlights: [
      { title: 'Đúng mục tiêu', text: 'Khen thưởng, tri ân, kết nối đối tác hay khảo sát thị trường.' },
      { title: 'Một đầu mối', text: 'Một đội lo từ visa, vé, xe, nơi ở đến sự kiện tại Mỹ.' },
    ],
  },
  {
    slug: 'caravan-mississippi',
    name: 'Caravan dọc sông Mississippi',
    short: 'Tuyến caravan mới xuôi theo sông Mississippi về miền Nam nước Mỹ.',
    duration: 'Đang hoàn thiện',
    route: ['Dọc sông Mississippi', 'Miền Nam nước Mỹ'],
    status: 'soon',
    types: ['ghep-doan-tai-my'],
    needs: ['cap-doi-nhom-ban'],
    countries: ['my'],
    seasons: [],
    style: 'Caravan tự lái',
    price: { text: 'Nhận tin sớm' },
    image: 'illusRiver',
    overview: 'Phượt Mỹ đang hoàn thiện lịch trình tuyến caravan dọc sông Mississippi xuống miền Nam nước Mỹ. Để lại thông tin để nhận lịch trình đầu tiên.',
    highlights: [{ title: 'Tuyến mới', text: 'Lịch trình đang được hoàn thiện.' }],
  },
  // ===== Lịch trình mẫu từ site cũ (giữ giá đã công bố) =====
  {
    slug: 'mobihome-rv-roadtrip',
    name: 'Trải nghiệm RV cao cấp',
    short: 'Sống trên nhà di động, camping trong công viên quốc gia Tây Bắc Hoa Kỳ.',
    duration: '10–14 ngày',
    route: ['Tây Bắc Hoa Kỳ'],
    status: 'sample',
    types: ['ghep-doan-tai-my', 'thiet-ke-rieng'],
    needs: ['cap-doi-nhom-ban', 'gia-dinh-nhieu-the-he'],
    countries: ['my'],
    seasons: ['mua-he'],
    style: 'RV / Motorhome',
    price: { text: 'Từ 85 triệu', note: 'Cho 2 người, đã gồm thuê RV 10 ngày.' },
    image: 'caravanTuyet',
    overview: 'Lịch trình mẫu trải nghiệm RV: nhà di động tiện nghi, tự do khám phá theo nhịp riêng, cắm trại tại công viên quốc gia, có hỗ trợ 24/7. Liên hệ để nhận lịch trình chi tiết theo nhóm.',
    highlights: [
      { title: 'Nhà di động', text: 'Bếp, phòng tắm, giường ngủ trên xe.' },
      { title: 'Camping công viên quốc gia', text: 'Thức dậy giữa thiên nhiên.' },
    ],
  },
  {
    slug: 'self-drive-national-parks',
    name: 'Tự lái công viên quốc gia',
    short: 'Tự lái qua Grand Canyon, Zion, Bryce Canyon, Antelope Canyon, Horseshoe Bend.',
    duration: '7–10 ngày',
    route: ['Utah', 'Arizona', 'Nevada'],
    status: 'sample',
    types: ['ghep-doan-tai-my', 'thiet-ke-rieng'],
    needs: ['cap-doi-nhom-ban'],
    countries: ['my'],
    seasons: ['mua-xuan', 'mua-thu'],
    style: 'Tự lái',
    price: { text: 'Từ 65 triệu', note: 'Cho 2 người, đã gồm thuê xe 7 ngày.' },
    image: 'vachDaDo',
    overview: 'Lịch trình mẫu tự lái qua các công viên quốc gia vùng Utah – Arizona – Nevada, khách sạn 3–4 sao chọn lọc, lịch trình linh hoạt. Liên hệ để nhận lịch trình chi tiết.',
    highlights: [
      { title: '5+ công viên quốc gia', text: 'Grand Canyon, Zion, Bryce Canyon.' },
      { title: 'Antelope Canyon & Horseshoe Bend', text: 'Hai điểm chụp ảnh nổi tiếng gần Page, Arizona.' },
    ],
    destinations: ['grand-canyon', 'antelope-canyon', 'monument-valley'],
  },
  {
    slug: 'family-roadtrip',
    name: 'Road trip gia đình',
    short: 'California – Nevada cho gia đình có trẻ nhỏ: Universal Studios, biển California, Grand Canyon.',
    duration: '8–12 ngày',
    route: ['California', 'Nevada'],
    status: 'sample',
    types: ['thiet-ke-rieng'],
    needs: ['gia-dinh-nhieu-the-he'],
    countries: ['my'],
    seasons: ['mua-he'],
    price: { text: 'Từ 95 triệu', note: 'Cho gia đình 4 người (2 người lớn + 2 trẻ em).' },
    image: 'lasVegas',
    overview: 'Lịch trình mẫu cho gia đình có trẻ em: Universal Studios, biển California, Grand Canyon, khách sạn gia đình có bể bơi, hoạt động hợp mọi lứa tuổi. Liên hệ để thiết kế theo tuổi các con.',
    highlights: [{ title: 'Hợp trẻ em', text: 'Chặng xe vừa phải, nhiều hoạt động vui chơi.' }],
    destinations: ['las-vegas', 'grand-canyon'],
  },
  {
    slug: 'hawaii-roadtrip',
    name: 'Phượt đảo Hawaii',
    short: 'Big Island – Maui: núi lửa, Road to Hana, lặn ngắm rùa biển.',
    duration: '6–8 ngày',
    route: ['Big Island', 'Maui'],
    status: 'sample',
    types: ['thiet-ke-rieng'],
    needs: ['cap-doi-nhom-ban'],
    countries: ['my'],
    seasons: ['mua-xuan', 'mua-he', 'mua-thu', 'mua-dong'],
    price: { text: 'Từ 78 triệu', note: 'Cho 2 người, đã gồm thuê xe 7 ngày.' },
    image: 'illusOcean',
    overview: 'Lịch trình mẫu khám phá Hawaii: núi lửa, bãi biển độc đáo, cung đường Road to Hana, lặn ngắm rùa biển. Liên hệ để nhận lịch trình chi tiết.',
    highlights: [{ title: 'Road to Hana', text: 'Cung đường ven biển nổi tiếng của Maui.' }],
  },
  {
    slug: 'west-coast-adventure',
    name: 'Phiêu lưu Bờ Tây',
    short: 'Từ Seattle đến San Diego theo Pacific Coast Highway qua Big Sur và rừng Redwood.',
    duration: '12–16 ngày',
    route: ['Seattle', 'Portland', 'San Francisco', 'Los Angeles', 'San Diego'],
    status: 'sample',
    types: ['ghep-doan-tai-my', 'thiet-ke-rieng'],
    needs: ['cap-doi-nhom-ban'],
    countries: ['my'],
    seasons: ['mua-he', 'mua-thu'],
    price: { text: 'Từ 125 triệu', note: 'Cho 2 người, đã gồm thuê xe 14 ngày.' },
    image: 'doanYosemite',
    overview: 'Lịch trình mẫu dọc bờ Tây: Pacific Coast Highway qua Big Sur, rừng Redwood, năm thành phố Seattle, Portland, San Francisco, Los Angeles, San Diego. Liên hệ để nhận lịch trình chi tiết.',
    highlights: [{ title: 'Pacific Coast Highway', text: 'Cung đường ven biển từ Bắc xuống Nam.' }],
    destinations: ['yosemite'],
  },
  {
    slug: 'autumn-foliage',
    name: 'Mùa thu lá đỏ New England',
    short: 'Vermont – New Hampshire – Maine: cung đường lá vàng, làng cổ, Acadia.',
    duration: '9–12 ngày',
    route: ['Vermont', 'New Hampshire', 'Maine'],
    status: 'sample',
    types: ['theo-mua', 'thiet-ke-rieng'],
    needs: ['cap-doi-nhom-ban', 'huu-tri-an-nhan'],
    countries: ['my'],
    seasons: ['mua-thu'],
    price: { text: 'Từ 88 triệu', note: 'Cho 2 người, đã gồm thuê xe 10 ngày.' },
    image: 'illusAutumn',
    overview: 'Lịch trình mẫu mùa thu New England: cung đường lá vàng lá đỏ, làng cổ, thác nước, vườn quốc gia Acadia ven biển. Liên hệ để nhận lịch trình chi tiết.',
    highlights: [{ title: 'Mùa lá đỏ', text: 'Đẹp nhất khoảng cuối tháng 9 – giữa tháng 10.' }],
  },
];

// Tiện ích dùng chung
export const tourBySlug = (slug: string) => TOURS.find((t) => t.slug === slug);
export const isBookable = (t: Tour) => t.status !== 'sample';
const GROUP_FIELD = { 'loai-hinh': 'types', 'nhu-cau': 'needs', 'quoc-gia': 'countries', 'theo-mua': 'seasons' } as const;
export function toursIn(group: keyof typeof GROUP_FIELD, slug: string) {
  // "Theo mùa" trong loại hình = mọi tour có mùa
  if (group === 'loai-hinh' && slug === 'theo-mua') return TOURS.filter((t) => t.seasons.length || t.types.includes('theo-mua'));
  return TOURS.filter((t) => (t[GROUP_FIELD[group]] as string[]).includes(slug));
}
// Thứ tự hiển thị: đang bán trước, mẫu sau
const ORDER: TourStatus[] = ['early', 'open', 'year', 'soon', 'sample'];
export const sortTours = (list: Tour[]) => [...list].sort((a, b) => ORDER.indexOf(a.status) - ORDER.indexOf(b.status) || Number(!!b.featured) - Number(!!a.featured));
