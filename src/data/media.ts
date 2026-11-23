// Thư viện ảnh & video. Ảnh thật lấy từ Google Drive "ALL MEDIA" của Phượt Mỹ,
// đã nén sang WebP (bản lớn 1600px + bản nhỏ 800px) trong public/media.
// Thêm ảnh mới: chép file vào public/media (tên-anh.webp và tên-anh-sm.webp) rồi khai báo 1 dòng ở đây.

export type IllusTheme = 'graduation' | 'river' | 'autumn' | 'ocean' | 'canyon' | 'geyser';

export interface Photo {
  kind: 'photo';
  file: string; // tên file không đuôi trong public/media
  alt: string;
  caption?: string;
  w: number;
  h: number;
}
export interface Illustration {
  kind: 'illus';
  theme: IllusTheme;
  alt: string;
}
export type Media = Photo | Illustration;

const p = (file: string, alt: string, w: number, h: number, caption?: string): Photo => ({ kind: 'photo', file, alt, w, h, caption });
const i = (theme: IllusTheme, alt: string): Illustration => ({ kind: 'illus', theme, alt });

export const MEDIA = {
  caravanTuyet: p('caravan-tuyet', 'Đoàn caravan Phượt Mỹ dừng xe giữa rừng thông phủ tuyết', 1600, 900, 'Đoàn caravan Phượt Mỹ'),
  doanYosemite: p('doan-yosemite', 'Đoàn khách Phượt Mỹ trong thung lũng Yosemite', 1600, 900, 'Đoàn caravan tại Yosemite'),
  doanArizona: p('doan-arizona', 'Đoàn Fam Caravan 2026 trên vùng đất đỏ miền Tây nước Mỹ', 1600, 900, 'Đoàn Fam Caravan 2026'),
  vachDaDo: p('vach-da-do', 'Hai khách Phượt Mỹ tạo dáng trên vách đá đỏ', 1600, 1067, 'Fam Caravan 2026'),
  buaToiDoan: p('bua-toi-doan', 'Đoàn khách Phượt Mỹ nâng ly trong bữa ăn', 1600, 900, 'Bữa ăn của đoàn'),
  doanVancouver: p('doan-vancouver', 'Đoàn khách bên các cột totem ở Vancouver, Canada', 1280, 960, 'Đoàn Canada tại Vancouver'),
  doanAlberta: p('doan-alberta', 'Đoàn caravan Mỹ – Canada bên biển chào mừng Alberta', 1600, 1200, 'Đoàn caravan Mỹ – Canada, tháng 9'),
  capDoiAlberta: p('cap-doi-alberta', 'Cặp đôi khách Phượt Mỹ vui mừng trước biển Welcome to Alberta', 1200, 1600, 'Caravan Mỹ – Canada'),
  hoaAnhDaoDC: p('hoa-anh-dao-dc', 'Hai khách Phượt Mỹ dưới hàng hoa anh đào bên sông Potomac, Washington DC', 1200, 1600, 'Đoàn Đông Tây, mùa hoa anh đào'),
  lasVegas: p('las-vegas', 'Khách Phượt Mỹ trước biển Welcome to Fabulous Las Vegas', 1200, 1600, 'Đoàn Bờ Tây di sản'),
  route66: p('route-66', 'Dấu Route 66 khắc trên vỉa hè', 1600, 900, 'Route 66'),
  // Ảnh minh hoạ (vẽ) cho chỗ chưa có ảnh thật — thay bằng ảnh thật khi có
  illusGraduation: i('graduation', 'Ảnh minh hoạ: lễ tốt nghiệp tại Mỹ'),
  illusRiver: i('river', 'Ảnh minh hoạ: sông Mississippi'),
  illusAutumn: i('autumn', 'Ảnh minh hoạ: mùa thu lá đỏ'),
  illusOcean: i('ocean', 'Ảnh minh hoạ: biển Hawaii'),
  illusCanyon: i('canyon', 'Ảnh minh hoạ: hẻm núi miền Tây'),
  illusGeyser: i('geyser', 'Ảnh minh hoạ: suối nước nóng Yellowstone'),
} satisfies Record<string, Media>;

export type MediaKey = keyof typeof MEDIA;

// Ảnh dùng cho Album trên Góc chia sẻ
export const ALBUMS: { title: string; note: string; cover: MediaKey; photos: MediaKey[]; driveFolder?: string }[] = [
  { title: 'Caravan Mỹ – Canada', note: 'Tháng 9 · Rockies, Alberta', cover: 'doanAlberta', photos: ['doanAlberta', 'capDoiAlberta'] },
  { title: 'Caravan miền Tây', note: 'California, Yosemite, rừng tuyết', cover: 'doanYosemite', photos: ['doanYosemite', 'caravanTuyet', 'buaToiDoan'] },
  { title: 'Fam Caravan 2026', note: 'Đoàn đại lý trải nghiệm', cover: 'doanArizona', photos: ['doanArizona', 'vachDaDo'] },
  { title: 'Đông Tây Hoa Kỳ', note: 'Washington DC mùa hoa anh đào', cover: 'hoaAnhDaoDC', photos: ['hoaAnhDaoDC'] },
  { title: 'Bờ Tây di sản', note: 'Las Vegas', cover: 'lasVegas', photos: ['lasVegas', 'route66'] },
  { title: 'Canada', note: 'Vancouver', cover: 'doanVancouver', photos: ['doanVancouver'] },
];

// Video: danh sách phát "tải lên" của kênh YouTube tự cập nhật khi đăng video mới.
export const YOUTUBE_UPLOADS_PLAYLIST = 'UU1swlbrZ--gJxWQYFlVSCaw';

// Clip trên Google Drive (thư mục đã chia sẻ công khai). Đặt lại tên cho dễ hiểu khi xem xong.
export const DRIVE_VIDEOS: { id: string; title: string; note: string }[] = [
  { id: '1mQINZw6Mc892XIBOpCeZOF03nmjNhJcF', title: 'Flycam đoàn caravan', note: 'Drive · VIDEO TOUR / DJI_0315' },
  { id: '1hhDbKEu7qN7M1Rm6FMtpFHY3QuPG-mmn', title: 'Flycam hành trình', note: 'Drive · VIDEO TOUR / DJI_0421' },
  { id: '1w6s3fjvgGQmiQ42lDIVqa28xtS6nonS3', title: 'Phượt Mỹ – tháng 3', note: 'Drive · VIDEO / Phượt Mỹ T3 (3)' },
];
