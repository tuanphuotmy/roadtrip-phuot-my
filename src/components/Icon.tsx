// Bộ icon nét (stroke) dùng chung, không phụ thuộc thư viện ngoài.
const PATHS: Record<string, string> = {
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-3.5-3.5',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',
  chat: 'M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z',
  list: 'M4 6h16M4 12h16M4 18h10',
  chevronRight: 'M9 6l6 6-6 6',
  chevronLeft: 'M15 6l-6 6 6 6',
  chevronDown: 'M6 9l6 6 6-6',
  plane: 'M2 16l20-6-2-3-7 2-6-5-2 1 4 6-4 1-2-2-2 1zM3 21h18',
  car: 'M3 13l2-5h11l3 5M2 13h20v5H2zM7 18.5a1.8 1.8 0 1 0 0 .1M17 18.5a1.8 1.8 0 1 0 0 .1',
  heart: 'M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z',
  star: 'M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z',
  leaf: 'M5 19c0-8 6-14 15-14 0 9-6 15-14 15zM5 19l7-7',
  calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
  pin: 'M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11zM12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
  users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7.5M22 21v-1a6 6 0 0 0-4-5.6',
  play: 'M8 5v14l11-7z',
  check: 'M5 12l5 5L20 7',
  x: 'M7 7l10 10M17 7L7 17',
  share: 'M18 5a2.5 2.5 0 1 0 0 .1M6 12a2.5 2.5 0 1 0 0 .1M18 19a2.5 2.5 0 1 0 0 .1M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4',
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z',
  route: 'M6 19a2 2 0 1 0 0-.1M18 5a2 2 0 1 0 0 .1M6 17V9a4 4 0 0 1 4-4h2M18 7v8a4 4 0 0 1-4 4h-2',
};

export function Icon({ name, size = 22, className = '', fill = false }: { name: keyof typeof PATHS | string; size?: number; className?: string; fill?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}
      fill={fill ? 'currentColor' : 'none'} stroke={fill ? 'none' : 'currentColor'} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
      <path d={PATHS[name] ?? ''} />
    </svg>
  );
}
