import { useState, type ReactNode, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { STATUS_LABEL, type Tour } from '../data/tours';
import { POST_CATEGORIES, type Post } from '../data/posts';
import type { Destination } from '../data/destinations';
import { CONTACT, SITE } from '../data/site';
import { Media } from './Media';
import { Icon } from './Icon';

/* ---------- Bố cục ---------- */
export function Section({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-page px-4 pt-10 lg:px-6 lg:pt-16 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHead({ title, more, sub }: { title: string; more?: { to: string; label: string }; sub?: string }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h2 className="font-display text-[26px] font-bold leading-8 lg:text-[32px] lg:leading-[38px]">{title}</h2>
        {sub && <p className="mt-1 text-[15px] text-mountain">{sub}</p>}
      </div>
      {more && (
        <Link to={more.to} className="flex min-h-[44px] shrink-0 items-center gap-1 text-sm font-bold underline-offset-4 hover:underline">
          {more.label}<Icon name="chevronRight" size={18} />
        </Link>
      )}
    </div>
  );
}

export function PageHero({ title, intro, crumbs, children }: { title: string; intro?: string; crumbs: { name: string; to?: string }[]; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-page px-4 pt-12 lg:px-6 lg:pt-16">
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-2 font-display text-[32px] font-extrabold leading-[38px] lg:text-[44px] lg:leading-[50px]">{title}</h1>
      {intro && <p className="mt-3 max-w-3xl text-[16px] leading-[26px] text-mountain lg:text-lg">{intro}</p>}
      {children}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; to?: string }[] }) {
  return (
    <nav aria-label="Đường dẫn" className="text-[13px] text-mountain">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true">/</span>}
            {it.to ? <Link to={it.to} className="underline-offset-2 hover:underline">{it.name}</Link> : <span aria-current="page">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------- Thẻ ---------- */
export function StatusBadge({ tour, className = '' }: { tour: Tour; className?: string }) {
  const hot = tour.status === 'early' || tour.status === 'open';
  return (
    <span className={`inline-block rounded px-2 py-1 text-[12px] font-bold uppercase leading-4 tracking-wider text-navy ${hot ? 'bg-sky' : 'bg-cream'} ${className}`}>
      {tour.statusNote && tour.status !== 'sample' ? `${STATUS_LABEL[tour.status]} · ${tour.statusNote}` : STATUS_LABEL[tour.status]}
    </span>
  );
}

export function TourCard({ tour, compact }: { tour: Tour; compact?: boolean }) {
  return (
    <Link to={`/tour/${tour.slug}`} className="group flex h-full flex-col overflow-hidden rounded-lg border-[1.5px] border-line bg-white transition hover:shadow-lg">
      <div className="relative">
        <Media k={tour.image} className={compact ? 'h-44 w-full' : 'h-48 w-full lg:h-52'} sizes="(max-width: 768px) 80vw, 400px" />
        <StatusBadge tour={tour} className="absolute left-2.5 top-2.5" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-[13px] text-mountain">{tour.duration}{tour.style ? ` · ${tour.style}` : ''}</span>
        <h3 className="font-display text-xl font-bold leading-[26px] group-hover:underline">{tour.name}</h3>
        <p className="text-sm leading-5 text-mountain">{tour.route.join(' · ')}</p>
        <div className="mt-auto flex items-center justify-between border-t border-line pt-3">
          <span className="text-[17px] font-bold">{tour.price.text}</span>
          <span className="flex items-center text-sm font-bold">Xem<Icon name="chevronRight" size={18} /></span>
        </div>
      </div>
    </Link>
  );
}

export function TourGrid({ tours }: { tours: Tour[] }) {
  if (!tours.length) return <p className="rounded-lg bg-cream p-4">Chưa có tour trong mục này. <Link to="/lien-he" className="font-bold underline">Gửi yêu cầu thiết kế riêng</Link>.</p>;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tours.map((t) => <TourCard key={t.slug} tour={t} />)}
    </div>
  );
}

/** Dải thẻ cuộn ngang trên điện thoại, lưới trên máy tính */
export function TourRail({ tours }: { tours: Tour[] }) {
  return (
    <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
      {tours.map((t) => (
        <div key={t.slug} className="w-[290px] shrink-0 snap-start lg:w-auto"><TourCard tour={t} compact /></div>
      ))}
    </div>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group flex items-center gap-3 lg:flex-col lg:items-stretch">
      <Media k={post.cover} className="h-[72px] w-24 shrink-0 rounded-lg lg:h-48 lg:w-full" sizes="(max-width: 1024px) 96px, 400px" />
      <span className="flex flex-col gap-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-mountain">{POST_CATEGORIES[post.category].name}</span>
        <span className="font-bold leading-[21px] group-hover:underline lg:font-display lg:text-lg">{post.title}</span>
      </span>
    </Link>
  );
}

export function DestCard({ d }: { d: Destination }) {
  return (
    <Link to={`/diem-den/${d.slug}`} className="group flex flex-col overflow-hidden rounded-lg bg-navy text-cream">
      <Media k={d.image} className="h-36 w-full lg:h-44" sizes="(max-width: 768px) 50vw, 300px" />
      <div className="flex flex-col gap-0.5 p-3">
        <span className="font-display text-lg font-bold group-hover:underline">{d.name}</span>
        <span className="text-xs">{d.region} · {d.season}</span>
      </div>
    </Link>
  );
}

export function Chips({ items, active }: { items: { label: string; to: string }[]; active?: string }) {
  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 py-2 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:px-0">
      {items.map((c) => {
        const on = c.to === active;
        return (
          <Link key={c.to} to={c.to} aria-current={on ? 'page' : undefined}
            className={`flex h-11 shrink-0 items-center whitespace-nowrap rounded-full border-[1.5px] px-4 text-sm font-bold ${on ? 'border-navy bg-navy text-cream' : 'border-line bg-white'}`}>
            {c.label}
          </Link>
        );
      })}
    </div>
  );
}

/* ---------- Video: chỉ tải khung phát khi bấm ---------- */
export function VideoEmbed({ src, title, poster }: { src: string; title: string; poster: ReactNode }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg bg-navy">
      {play ? (
        <iframe src={src} title={title} className="h-full w-full" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen loading="lazy" />
      ) : (
        <button onClick={() => setPlay(true)} className="group absolute inset-0 h-full w-full" aria-label={`Phát video: ${title}`}>
          {poster}
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-navy shadow-lg transition group-hover:scale-110">
            <Icon name="play" fill size={22} />
          </span>
        </button>
      )}
    </div>
  );
}

/* ---------- Dải kêu gọi ---------- */
export function CtaBand({ title = 'Chưa thấy tour hợp lịch?', text = 'Gửi ngày đi, số người và điểm muốn đến. Phượt Mỹ thiết kế riêng cho gia đình anh chị.' }: { title?: string; text?: string }) {
  return (
    <Section>
      <div className="flex flex-col gap-3 rounded-2xl bg-navy p-6 text-cream lg:flex-row lg:items-center lg:justify-between lg:p-10">
        <div>
          <h2 className="font-display text-2xl font-bold">{title}</h2>
          <p className="mt-1 max-w-xl leading-6">{text}</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link to="/lien-he" className="flex h-[52px] items-center justify-center rounded-lg bg-cream px-6 font-bold text-navy">Gửi yêu cầu</Link>
          <a href={CONTACT.zalo.href} className="flex h-[52px] items-center justify-center rounded-lg border-2 border-cream px-6 font-bold text-cream">Zalo {CONTACT.zalo.label}</a>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Form đăng ký (gửi về form Readdy như site cũ) ---------- */
export function LeadForm({ tourName, title = 'Nhận tư vấn & báo giá' }: { tourName?: string; title?: string }) {
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    for (const k of ['fullName', 'email', 'phone', 'participants', 'departureDate', 'message']) body.append(k, String(f.get(k) ?? ''));
    if (tourName) body.set('message', `[Tour: ${tourName}] ${body.get('message')}`);
    setState('sending');
    try {
      const r = await fetch(SITE.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
      if (!r.ok) throw new Error();
      setState('ok');
      window.gtag?.('event', 'generate_lead', { tour: tourName ?? 'chung' });
      setTimeout(() => (window.location.href = SITE.thankYouUrl), 1000);
    } catch {
      setState('error');
    }
  }
  const field = 'h-12 w-full rounded-lg border-[1.5px] border-line bg-white px-3 text-base text-navy focus:border-navy focus:outline-none';
  return (
    <form id="dang-ky" onSubmit={submit} className="scroll-mt-24 rounded-2xl border-[1.5px] border-line bg-white p-5 lg:p-8">
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      {tourName && <p className="mt-1 text-sm text-mountain">Tour: <strong>{tourName}</strong></p>}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold">Họ và tên *<input name="fullName" required autoComplete="name" className={`${field} mt-1 font-normal`} /></label>
        <label className="text-sm font-bold">Số điện thoại / Zalo *<input name="phone" required type="tel" autoComplete="tel" className={`${field} mt-1 font-normal`} /></label>
        <label className="text-sm font-bold">Email *<input name="email" required type="email" autoComplete="email" className={`${field} mt-1 font-normal`} /></label>
        <label className="text-sm font-bold">Số người
          <select name="participants" className={`${field} mt-1 font-normal`} defaultValue="2 người">
            {['1 người', '2 người', '3 người', '4 người', '5 người', '6+ người'].map((o) => <option key={o}>{o}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold sm:col-span-2">Thời gian dự kiến<input name="departureDate" type="month" className={`${field} mt-1 font-normal`} /></label>
        <label className="text-sm font-bold sm:col-span-2">Mong muốn của anh chị
          <textarea name="message" maxLength={500} rows={3} className="mt-1 w-full rounded-lg border-[1.5px] border-line bg-white p-3 text-base font-normal focus:border-navy focus:outline-none" placeholder="Đi cùng ai, muốn đến đâu, ngân sách dự kiến…" />
        </label>
      </div>
      <button disabled={state === 'sending'} className="mt-5 h-[52px] w-full rounded-lg bg-navy font-bold text-cream disabled:opacity-60">
        {state === 'sending' ? 'Đang gửi…' : 'Gửi đăng ký'}
      </button>
      <p role="status" className="mt-2 text-sm">
        {state === 'ok' && 'Đã nhận thông tin, Phượt Mỹ sẽ liên hệ trong 24 giờ.'}
        {state === 'error' && <>Chưa gửi được. Anh chị nhắn Zalo <a href={CONTACT.zalo.href} className="font-bold underline">{CONTACT.zalo.label}</a> giúp Phượt Mỹ nhé.</>}
      </p>
    </form>
  );
}

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}
