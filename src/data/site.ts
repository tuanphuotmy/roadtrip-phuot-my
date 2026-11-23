// Thông tin chung của website. Sửa ở đây là cả site đổi theo.

export const SITE = {
  name: 'Phượt Mỹ',
  legalName: 'PHUOT MY LLC',
  url: 'https://phuotmy.com',
  tagline: 'Vui khỏi nghĩ',
  motto: 'Đi để sống, không để xem',
  description:
    'Tour Mỹ, Canada và liên tuyến cho khách Việt: ghép đoàn từ Việt Nam, caravan tự lái, tour riêng cho gia đình. Đội ngũ người Việt tại California đồng hành suốt chuyến đi.',
  gaId: 'G-Y10189DZC5',
  // Form đăng ký đang dùng của Readdy (giữ nguyên để dữ liệu về cùng chỗ cũ)
  formEndpoint: 'https://readdy.ai/api/form/d4h97v5tnoqs9bvm9oqg',
  thankYouUrl: 'https://thankyou.phuotmy.com/',
};

// Liên hệ: theo bộ nhận diện + hotline Việt Nam
export const CONTACT = {
  hotlineVN: { label: '088-999-2466', href: 'tel:0889992466' },
  office: { label: '+1 562-881-8190', href: 'tel:+15628818190' },
  emergency: { label: '+1 714-552-1068', href: 'tel:+17145521068' },
  zalo: { label: '0989 835 538', href: 'https://zalo.me/0989835538' },
  email: { label: 'phuotmy@gmail.com', href: 'mailto:phuotmy@gmail.com' },
  address: '721 S Susan St, Santa Ana, CA 92704',
  offices: 'Văn phòng California, USA · Đại diện tại Hà Nội',
};

// Mạng xã hội — kiểm tra lại đường dẫn trang Facebook nếu khác
export const SOCIAL = [
  { key: 'facebook', label: 'Trang Facebook Phượt Mỹ', short: 'Facebook', href: 'https://www.facebook.com/phuotmyroadtrip' },
  { key: 'group', label: 'Nhóm Cộng đồng Phượt Mỹ', short: 'Nhóm cộng đồng', href: 'https://www.facebook.com/groups/congdongphuotmy' },
  { key: 'youtube', label: 'YouTube PHƯỢT MỸ TV', short: 'YouTube', href: 'https://www.youtube.com/@phuotmytv' },
  { key: 'tuan', label: 'Facebook Tuấn Phùng', short: 'Tuấn Phùng', href: 'https://www.facebook.com/phunggiatuan' },
  { key: 'zalo', label: 'Zalo Phượt Mỹ', short: 'Zalo', href: 'https://zalo.me/0989835538' },
] as const;

// Số liệu & nhận xét cũ từ site Readdy — GIỮ TẠM theo yêu cầu, cần thay bằng số thật.
// Đặt show: false để ẩn toàn bộ.
export const LEGACY_PROOF = {
  show: true,
  stats: [
    { value: '500+', label: 'Khách đã phục vụ' },
    { value: '50+', label: 'Chuyến đi' },
    { value: '15+', label: 'Bang đã đi qua' },
    { value: '4.9/5', label: 'Đánh giá trung bình' },
  ],
  testimonials: [
    {
      name: 'Anh Minh & Chị Hương',
      from: 'Hà Nội',
      trip: 'Mobihome RV Roadtrip',
      text: 'Được tự do khám phá nước Mỹ theo cách của mình, không bị gò bó bởi lịch trình tour. Đội ngũ hỗ trợ nhiệt tình, RV rất tiện nghi. Grand Canyon và Monument Valley đẹp không thể tả!',
    },
    {
      name: 'Gia đình chị Lan',
      from: 'TP. Hồ Chí Minh',
      trip: 'Family Roadtrip',
      text: 'Mang cả gia đình 4 người đi roadtrip Mỹ là quyết định đúng đắn. Các con rất thích ngủ trong RV và thức dậy giữa thiên nhiên. Lịch trình phù hợp với trẻ em, không quá mệt.',
    },
    {
      name: 'Nhóm bạn Sài Gòn',
      from: 'TP. Hồ Chí Minh',
      trip: 'West Coast Adventure',
      text: 'Năm người bạn thân cùng roadtrip từ LA đến San Francisco. Pacific Coast Highway đẹp như mơ, Yosemite hùng vĩ. Được tự lái xe và dừng chân bất cứ đâu thích thật sự tuyệt vời!',
    },
  ],
};
