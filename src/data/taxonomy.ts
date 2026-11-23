// Các nhóm menu: loại hình, nhu cầu, quốc gia, mùa.
// Mỗi tour gắn slug của nhóm trong tours.ts — trang danh mục tự lọc theo đó.
import type { MediaKey } from './media';

export type Group = 'loai-hinh' | 'nhu-cau' | 'quoc-gia' | 'theo-mua';

export interface Term {
  slug: string;
  name: string;
  short: string; // một dòng mô tả trên thẻ / menu
  intro: string; // đoạn mở đầu trang danh mục
  image: MediaKey;
}

export const GROUPS: Record<Group, { title: string; menu: string; terms: Term[] }> = {
  'loai-hinh': {
    title: 'Loại hình tour',
    menu: 'Loại hình tour',
    terms: [
      {
        slug: 'ghep-doan-tu-viet-nam',
        name: 'Ghép đoàn từ Việt Nam',
        short: 'Lịch cố định, bay cùng đoàn',
        intro: 'Bay cùng đoàn từ Hà Nội hoặc TP.HCM, lịch khởi hành cố định, có trưởng đoàn đi cùng. Phù hợp khách lần đầu đi Mỹ muốn mọi thứ được lo sẵn.',
        image: 'hoaAnhDaoDC',
      },
      {
        slug: 'ghep-doan-tai-my',
        name: 'Ghép đoàn tại Mỹ',
        short: 'Caravan tự lái, nhập đoàn tại Mỹ',
        intro: 'Dành cho khách đã có mặt ở Mỹ hoặc tự đặt vé máy bay: nhập đoàn caravan, road trip tự lái theo nhóm nhỏ với xe dẫn đường của Phượt Mỹ.',
        image: 'caravanTuyet',
      },
      {
        slug: 'thiet-ke-rieng',
        name: 'Thiết kế riêng',
        short: 'Gia đình, nhóm 4–12 khách',
        intro: 'Lịch trình riêng cho gia đình hoặc nhóm bạn: chọn ngày đi, nhịp đi, nơi ở. Xe 7 chỗ cho 4–5 khách, xe 12–15 chỗ cho 6–11 khách.',
        image: 'doanYosemite',
      },
      {
        slug: 'su-kien-dac-biet',
        name: 'Sự kiện đặc biệt',
        short: 'Tốt nghiệp, khen thưởng, hội chợ',
        intro: 'Chuyến đi gắn với một dịp: lễ tốt nghiệp của con, đoàn khen thưởng doanh nghiệp, hội chợ và xúc tiến thương mại tại Mỹ.',
        image: 'buaToiDoan',
      },
      {
        slug: 'theo-mua',
        name: 'Theo mùa',
        short: 'Xuân hoa, hè công viên, thu lá, đông tuyết',
        intro: 'Mỗi mùa nước Mỹ một vẻ. Chọn mùa trước, Phượt Mỹ gợi ý tuyến đẹp nhất cho thời điểm đó.',
        image: 'capDoiAlberta',
      },
    ],
  },
  'nhu-cau': {
    title: 'Theo nhu cầu',
    menu: 'Đi cùng ai?',
    terms: [
      { slug: 'gia-dinh-co-con-du-hoc', name: 'Gia đình có con du học', short: 'Tốt nghiệp, nhập học, thăm con', intro: 'Chương trình lõi ngắn, xoay quanh thời gian bên con; muốn đi thêm thì mở rộng sang thành phố, bang khác theo nhu cầu.', image: 'illusGraduation' },
      { slug: 'gia-dinh-nhieu-the-he', name: 'Gia đình nhiều thế hệ', short: 'Nhịp chậm, nghỉ ngơi hợp lý', intro: 'Ông bà, bố mẹ và các cháu cùng đi: chặng xe vừa phải, nơi ở thoải mái, bữa ăn hợp khẩu vị.', image: 'doanVancouver' },
      { slug: 'cap-doi-nhom-ban', name: 'Cặp đôi & nhóm bạn', short: 'Tự lái, trải nghiệm', intro: 'Tự cầm lái trên cung đường đẹp, dừng chân nơi mình thích, nhóm nhỏ dễ gắn kết.', image: 'capDoiAlberta' },
      { slug: 'huu-tri-an-nhan', name: 'Hưu trí an nhàn', short: 'Khách sạn tốt, ít di chuyển đêm', intro: 'Hành trình nhẹ nhàng, có người lo mọi việc, thời gian thong thả ở mỗi điểm.', image: 'doanAlberta' },
      { slug: 'doanh-nghiep-khen-thuong', name: 'Doanh nghiệp, khen thưởng', short: 'Đoàn MICE, tri ân khách hàng', intro: 'Đoàn khen thưởng, tri ân khách hàng, kết hợp gặp gỡ đối tác và hội chợ tại Mỹ.', image: 'buaToiDoan' },
      { slug: 'tham-than-nhan', name: 'Thăm thân nhân', short: 'Kết hợp tour ngắn', intro: 'Sang thăm người thân, ghép thêm vài ngày đi chơi theo lịch của gia đình.', image: 'lasVegas' },
    ],
  },
  'quoc-gia': {
    title: 'Điểm đến theo quốc gia',
    menu: 'Quốc gia',
    terms: [
      { slug: 'my', name: 'Nước Mỹ', short: 'Bờ Tây, Bờ Đông, công viên quốc gia', intro: 'Từ California, Las Vegas, các công viên quốc gia miền Tây đến New York, Washington DC.', image: 'doanYosemite' },
      { slug: 'canada', name: 'Canada', short: 'Vancouver, Victoria, Rockies', intro: 'Vancouver, đảo Victoria và dãy Rockies với Banff, Lake Louise. Hiện Phượt Mỹ đi Canada trong các tuyến liên tuyến cùng nước Mỹ.', image: 'doanVancouver' },
      { slug: 'lien-tuyen', name: 'Liên tuyến', short: 'Mỹ – Canada và hơn thế', intro: 'Một chuyến đi qua hai quốc gia. Lưu ý giấy tờ: vào Canada bằng đường bộ cần visa Canada, không dùng eTA.', image: 'doanAlberta' },
    ],
  },
  'theo-mua': {
    title: 'Tour theo mùa',
    menu: 'Theo mùa',
    terms: [
      { slug: 'mua-xuan', name: 'Mùa xuân', short: 'Hoa anh đào, thời tiết dễ chịu', intro: 'Tháng 3–5: hoa anh đào Washington DC, các công viên miền Tây chưa nóng.', image: 'hoaAnhDaoDC' },
      { slug: 'mua-he', name: 'Mùa hè', short: 'Công viên quốc gia, lễ tốt nghiệp', intro: 'Tháng 6–8: mùa của công viên quốc gia và lễ tốt nghiệp. Nên đặt sớm vì nơi ở nhanh hết chỗ.', image: 'doanYosemite' },
      { slug: 'mua-thu', name: 'Mùa thu', short: 'Lá vàng, lá đỏ', intro: 'Tháng 9–10: lá vàng ở Rockies, lá đỏ New England, trời mát và ít đông.', image: 'doanAlberta' },
      { slug: 'mua-dong', name: 'Mùa đông', short: 'Tuyết, lễ hội cuối năm', intro: 'Tháng 12–2: rừng thông phủ tuyết, không khí Giáng sinh và năm mới.', image: 'caravanTuyet' },
    ],
  },
};

export function findTerm(group: Group, slug: string) {
  return GROUPS[group].terms.find((t) => t.slug === slug);
}
