import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV } from '../data/nav';
import { CONTACT, SITE, SOCIAL } from '../data/site';
import { Icon } from './Icon';

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  // đổi trang: đóng menu, cuộn lên đầu (hoặc tới #mục)
  useEffect(() => {
    setOpen(false);
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <div className="min-h-screen bg-cream-soft font-sans text-navy">
      <a href="#noi-dung" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:bg-cream focus:p-2">Bỏ qua menu</a>
      <Header onMenu={() => setOpen(true)} />
      {open && <MobileMenu onClose={() => setOpen(false)} />}
      <main id="noi-dung" className="pb-20 lg:pb-0">{children}</main>
      <Footer />
      <ActionBar />
    </div>
  );
}

function Header({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-30 bg-navy text-cream shadow">
      <div className="mx-auto flex h-16 max-w-page items-center gap-2 px-3 lg:h-[72px] lg:px-6">
        <Link to="/" aria-label="Phượt Mỹ – trang chủ" className="relative z-10 -mb-8 shrink-0 self-start pt-1 lg:-mb-10">
          <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="Logo Phượt Mỹ – Vui khỏi nghĩ" width={96} height={91} className="h-auto w-[96px] drop-shadow lg:w-[104px]" />
        </Link>
        <nav aria-label="Menu chính" className="ml-6 hidden flex-1 items-center gap-1 lg:flex">
          {NAV.map((g) => (
            <div key={g.label} className="group relative">
              <NavLink to={g.to} className="flex h-11 items-center gap-1 rounded px-3 text-[15px] font-medium hover:bg-mountain">
                {g.label}
                <Icon name="chevronDown" size={16} />
              </NavLink>
              <div className="invisible absolute left-0 top-full w-72 rounded-lg bg-white p-2 text-navy opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {g.items.map((it) => (
                  <Link key={it.to} to={it.to} className="block rounded px-3 py-2 hover:bg-cream-soft">
                    <span className="block font-bold">{it.label}</span>
                    {it.note && <span className="block text-sm text-mountain">{it.note}</span>}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <Link to="/tour" className="flex h-11 items-center rounded-lg bg-sky px-3 text-[13px] font-bold uppercase tracking-wider text-navy">Mở bán</Link>
          <Link to="/tour" aria-label="Tìm tour" className="flex h-11 w-11 items-center justify-center rounded hover:bg-mountain"><Icon name="search" /></Link>
          <button onClick={onMenu} aria-label="Mở menu" className="flex h-11 w-11 items-center justify-center rounded hover:bg-mountain lg:hidden"><Icon name="menu" size={26} /></button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openGroup, setOpenGroup] = useState<string | null>(NAV[0].label);
  return (
    <div className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-cream-soft lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="flex h-16 shrink-0 items-center justify-between bg-navy px-4 text-cream">
        <span className="text-[13px] font-bold uppercase tracking-wider">Menu</span>
        <button onClick={onClose} aria-label="Đóng menu" className="flex h-11 w-11 items-center justify-center"><Icon name="close" size={26} /></button>
      </div>
      <Link to="/tour" className="mx-4 mt-4 flex items-center justify-between rounded-lg bg-sky px-4 py-3 text-navy">
        <span>
          <span className="block text-[13px] font-bold uppercase tracking-wider">Tour đang mở bán</span>
          <span className="text-sm">Mở đăng ký sớm · Sắp ra mắt</span>
        </span>
        <Icon name="chevronRight" />
      </Link>
      <nav aria-label="Menu chính" className="py-2">
        {NAV.map((g) => {
          const isOpen = openGroup === g.label;
          return (
            <div key={g.label} className="border-b border-line">
              <button onClick={() => setOpenGroup(isOpen ? null : g.label)} aria-expanded={isOpen}
                className="flex min-h-[56px] w-full items-center justify-between px-4 text-left font-display text-xl font-bold">
                {g.label}
                <span aria-hidden="true" className="w-6 text-center text-2xl font-normal">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="flex flex-col px-4 pb-3">
                  {g.items.map((it) => (
                    <Link key={it.to} to={it.to} className="flex min-h-[44px] flex-col justify-center border-l-[3px] border-sky py-1.5 pl-3">
                      <span className="font-bold">{it.label}</span>
                      {it.note && <span className="text-sm text-mountain">{it.note}</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      <div className="flex flex-col gap-3 p-4">
        <Link to="/lien-he" className="flex h-[52px] items-center justify-center rounded-lg bg-navy font-bold text-cream">Nhận tư vấn miễn phí</Link>
        <a href={CONTACT.zalo.href} className="flex min-h-[48px] items-center justify-center text-center py-2 rounded-lg border-[1.5px] border-navy font-bold">Zalo {CONTACT.zalo.label}</a>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2 text-sm">
          {SOCIAL.filter((s) => s.key !== 'zalo').map((s) => (
            <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer" className="underline">{s.short}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto grid max-w-page gap-8 px-4 py-10 md:grid-cols-4 lg:px-6">
        <div className="md:col-span-2">
          <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="Logo Phượt Mỹ" width={110} height={104} loading="lazy" className="h-auto w-[110px]" />
          <p className="mt-3 max-w-md text-sm leading-6">{SITE.motto}. {SITE.tagline}.</p>
          <address className="mt-4 text-sm not-italic leading-7">
            <strong>{SITE.legalName}</strong><br />
            {CONTACT.address}<br />
            Hotline VN: <a href={CONTACT.hotlineVN.href} className="text-cream">{CONTACT.hotlineVN.label}</a><br />
            Office: <a href={CONTACT.office.href} className="text-cream">{CONTACT.office.label}</a><br />
            Emergency: <a href={CONTACT.emergency.href} className="text-cream">{CONTACT.emergency.label}</a> · Zalo VN: <a href={CONTACT.zalo.href} className="text-cream">{CONTACT.zalo.label}</a><br />
            <a href={CONTACT.email.href} className="text-cream">{CONTACT.email.label}</a> · www.phuotmy.com
          </address>
        </div>
        <div>
          <h2 className="text-[13px] font-bold uppercase tracking-wider text-sky">Khám phá</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/tour" className="text-cream">Tour đang mở bán</Link></li>
            <li><Link to="/diem-den" className="text-cream">Điểm đến</Link></li>
            <li><Link to="/blog" className="text-cream">Blog & cẩm nang</Link></li>
            <li><Link to="/goc-chia-se" className="text-cream">Góc chia sẻ</Link></li>
            <li><Link to="/dai-ly" className="text-cream">Dành cho đại lý</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-[13px] font-bold uppercase tracking-wider text-sky">Kết nối</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {SOCIAL.map((s) => (
              <li key={s.key}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-cream">{s.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-mountain">
        <div className="mx-auto flex max-w-page flex-wrap gap-x-4 gap-y-1 px-4 py-4 text-xs lg:px-6">
          <span>© {new Date().getFullYear()} {SITE.legalName}</span>
          <Link to="/dieu-khoan-dich-vu" className="text-cream">Điều khoản dịch vụ</Link>
          <Link to="/chinh-sach-bao-mat" className="text-cream">Chính sách bảo mật</Link>
        </div>
      </div>
    </footer>
  );
}

// Thanh thao tác luôn hiện ở đáy màn hình điện thoại
function ActionBar() {
  const item = 'flex flex-col items-center justify-center gap-0.5 text-xs font-bold text-navy';
  return (
    <nav aria-label="Thao tác nhanh" className="fixed inset-x-0 bottom-0 z-30 grid h-[68px] grid-cols-[1fr_1fr_1fr_1.6fr] gap-1.5 border-t border-line bg-white p-2 lg:hidden">
      <Link to="/tour" className={item}><Icon name="list" />Tour</Link>
      <a href={CONTACT.hotlineVN.href} className={item}><Icon name="phone" />Gọi</a>
      <a href={CONTACT.zalo.href} className={item}><Icon name="chat" />Zalo</a>
      <Link to="/lien-he" className="flex items-center justify-center rounded-lg bg-navy text-sm font-bold text-cream">Nhận tư vấn</Link>
    </nav>
  );
}
