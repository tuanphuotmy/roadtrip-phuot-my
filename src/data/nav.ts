// Menu chính: dựng tự động từ taxonomy, điểm đến và chuyên mục blog.
import { GROUPS } from './taxonomy';
import { POST_CATEGORIES } from './posts';

export interface NavItem {
  label: string;
  to: string;
  note?: string;
}
export interface NavGroup {
  label: string;
  to: string; // trang tổng của nhóm
  items: NavItem[];
}

export const NAV: NavGroup[] = [
  {
    label: 'Loại hình tour',
    to: '/tour',
    items: GROUPS['loai-hinh'].terms.map((t) => ({ label: t.name, note: t.short, to: `/loai-hinh/${t.slug}` })),
  },
  {
    label: 'Theo nhu cầu',
    to: '/tour',
    items: GROUPS['nhu-cau'].terms.map((t) => ({ label: t.name, note: t.short, to: `/nhu-cau/${t.slug}` })),
  },
  {
    label: 'Điểm đến',
    to: '/diem-den',
    items: [
      ...GROUPS['quoc-gia'].terms.map((t) => ({ label: t.name, note: t.short, to: `/quoc-gia/${t.slug}` })),
      { label: 'Tất cả điểm đến', note: 'Yosemite, Las Vegas, Banff…', to: '/diem-den' },
    ],
  },
  {
    label: 'Blog',
    to: '/blog',
    items: (Object.keys(POST_CATEGORIES) as (keyof typeof POST_CATEGORIES)[]).map((k) => ({
      label: POST_CATEGORIES[k].name,
      note: POST_CATEGORIES[k].short,
      to: `/blog?muc=${k}`,
    })),
  },
  {
    label: 'Góc chia sẻ',
    to: '/goc-chia-se',
    items: [
      { label: 'Video', note: 'YouTube PHƯỢT MỸ TV, clip đoàn', to: '/goc-chia-se#video' },
      { label: 'Album ảnh', note: 'Ảnh thật theo từng chuyến', to: '/goc-chia-se#album' },
      { label: 'Cảm nhận khách', note: 'Lời kể từ các đoàn', to: '/goc-chia-se#cam-nhan' },
    ],
  },
  {
    label: 'Về Phượt Mỹ',
    to: '/ve-phuot-my',
    items: [
      { label: 'Câu chuyện & đội ngũ', note: 'Đi để sống, không để xem', to: '/ve-phuot-my' },
      { label: 'Dành cho đại lý', note: 'Liên minh bán tour Mỹ', to: '/dai-ly' },
      { label: 'Liên hệ', note: 'Santa Ana, CA · Hà Nội', to: '/lien-he' },
    ],
  },
];
