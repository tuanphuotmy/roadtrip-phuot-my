import { MEDIA, type MediaKey, type IllusTheme } from '../data/media';

import { asset } from '../data/asset';

// Hiển thị ảnh thật (WebP 2 cỡ) hoặc ảnh minh hoạ vẽ bằng màu thương hiệu.
// Ảnh minh hoạ luôn có nhãn "Ảnh minh hoạ" để khách không nhầm là ảnh thật.

interface Props {
  k: MediaKey;
  className?: string; // kích thước khung (vd. "h-48 w-full")
  sizes?: string;
  priority?: boolean; // ảnh đầu trang: tải ngay
  position?: string; // object-position
  showCaption?: boolean;
}

export function Media({ k, className = '', sizes = '(max-width: 768px) 100vw, 50vw', priority, position, showCaption }: Props) {
  const m = MEDIA[k];
  if (m.kind === 'illus') {
    return (
      <div className={`relative overflow-hidden ${className}`} role="img" aria-label={m.alt}>
        <Illustration theme={m.theme} />
        <span className="absolute right-2 bottom-2 rounded bg-navy/85 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-cream">Ảnh minh hoạ</span>
      </div>
    );
  }
  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <img
        src={asset(`media/${m.file}.webp`)}
        srcSet={`${asset(`media/${m.file}-sm.webp`)} 800w, ${asset(`media/${m.file}.webp`)} 1600w`}
        sizes={sizes}
        alt={m.alt}
        width={m.w}
        height={m.h}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...(priority ? { fetchpriority: 'high' } : {})}
        className="h-full w-full object-cover"
        style={position ? { objectPosition: position } : undefined}
      />
      {showCaption && m.caption && (
        <figcaption className="absolute left-2 bottom-2 rounded bg-navy/80 px-2 py-0.5 text-xs text-cream">Ảnh thật · {m.caption}</figcaption>
      )}
    </figure>
  );
}

// Tranh vẽ đơn giản theo chủ đề, dùng đúng 5 màu thương hiệu
function Illustration({ theme }: { theme: IllusTheme }) {
  const sky = { graduation: '#54BCC0', river: '#FBEDBC', autumn: '#54BCC0', ocean: '#54BCC0', canyon: '#FBEDBC', geyser: '#54BCC0' }[theme];
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="260" fill={sky} />
      {theme === 'graduation' && (
        <>
          <circle cx="320" cy="60" r="26" fill="#FBEDBC" />
          <path d="M0 200 L60 150 L120 185 L200 130 L280 180 L340 150 L400 190 V260 H0Z" fill="#1A4760" />
          <rect x="140" y="150" width="120" height="70" fill="#FBEDBC" />
          <path d="M130 150 L200 115 L270 150Z" fill="#0F3446" />
          <rect x="190" y="180" width="20" height="40" fill="#0F3446" />
          <path d="M150 90 L200 70 L250 90 L200 110Z" fill="#0F3446" />
          <path d="M240 94 V118" stroke="#FBEDBC" strokeWidth="4" />
          <rect x="0" y="220" width="400" height="40" fill="#4E9D7E" />
        </>
      )}
      {theme === 'river' && (
        <>
          <circle cx="90" cy="70" r="30" fill="#54BCC0" opacity=".6" />
          <path d="M0 150 Q100 120 200 145 T400 140 V260 H0Z" fill="#4E9D7E" />
          <path d="M0 190 Q120 170 220 190 T400 185 V260 H0Z" fill="#1A4760" />
          <rect x="230" y="160" width="80" height="18" fill="#FBEDBC" />
          <rect x="245" y="145" width="50" height="15" fill="#FBEDBC" />
          <rect x="262" y="125" width="6" height="20" fill="#0F3446" />
          <rect x="276" y="125" width="6" height="20" fill="#0F3446" />
          <path d="M0 225 Q120 210 230 228 T400 222" stroke="#54BCC0" strokeWidth="3" fill="none" />
        </>
      )}
      {theme === 'autumn' && (
        <>
          <path d="M0 170 L80 110 L160 160 L240 100 L330 155 L400 120 V260 H0Z" fill="#1A4760" />
          {[40, 95, 150, 205, 260, 315, 365].map((x, n) => (
            <g key={x}>
              <rect x={x - 3} y="185" width="6" height="30" fill="#0F3446" />
              <circle cx={x} cy="175" r="22" fill={n % 2 ? '#FBEDBC' : '#4E9D7E'} />
            </g>
          ))}
          <rect x="0" y="215" width="400" height="45" fill="#0F3446" />
          <path d="M0 238 H400" stroke="#FBEDBC" strokeWidth="3" strokeDasharray="14 12" />
        </>
      )}
      {theme === 'ocean' && (
        <>
          <circle cx="300" cy="70" r="28" fill="#FBEDBC" />
          <path d="M0 120 L70 80 L150 130 L150 260 L0 260Z" fill="#4E9D7E" />
          <path d="M0 160 Q100 150 400 165 V260 H0Z" fill="#1A4760" />
          <path d="M150 190 Q220 180 290 192 T400 188" stroke="#54BCC0" strokeWidth="4" fill="none" />
          <path d="M120 225 Q210 212 300 226 T400 220" stroke="#FBEDBC" strokeWidth="3" fill="none" />
        </>
      )}
      {theme === 'canyon' && (
        <>
          <circle cx="320" cy="60" r="24" fill="#54BCC0" opacity=".7" />
          <path d="M0 110 H120 L135 150 H260 L275 110 H400 V260 H0Z" fill="#1A4760" />
          <path d="M0 160 H90 L110 200 H290 L310 160 H400 V260 H0Z" fill="#0F3446" />
          <path d="M150 260 L170 200 H230 L250 260Z" fill="#4E9D7E" />
        </>
      )}
      {theme === 'geyser' && (
        <>
          <path d="M0 170 L90 120 L180 160 L260 110 L400 150 V260 H0Z" fill="#1A4760" />
          <ellipse cx="200" cy="215" rx="150" ry="28" fill="#4E9D7E" />
          <ellipse cx="200" cy="215" rx="95" ry="16" fill="#54BCC0" />
          <ellipse cx="200" cy="215" rx="45" ry="8" fill="#FBEDBC" />
          <path d="M195 200 C185 160 215 130 200 80 C220 120 205 160 210 200Z" fill="#FBEDBC" opacity=".9" />
        </>
      )}
    </svg>
  );
}
