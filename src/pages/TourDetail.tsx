import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Seo, breadcrumbLd, imageUrl } from '../components/Seo';
import { Media } from '../components/Media';
import { Icon } from '../components/Icon';
import { Breadcrumbs, StatusBadge, Section, LeadForm, TourRail, DestCard } from '../components/ui';
import { TOURS, tourBySlug, isBookable, type Tour } from '../data/tours';
import { destinationBySlug } from '../data/destinations';
import { CONTACT, SITE } from '../data/site';

export default function TourDetail() {
  const { slug = '' } = useParams();
  const tour = tourBySlug(slug);
  if (!tour) return <Navigate to="/tour" replace />;
  const related = TOURS.filter((t) => t.slug !== tour.slug && isBookable(t) && t.countries.some((c) => tour.countries.includes(c))).slice(0, 3);
  const dests = (tour.destinations ?? []).map(destinationBySlug).filter(Boolean);

  return (
    <>
      <Seo title={tour.name} description={tour.short} image={tour.image} jsonLd={[tripLd(tour), breadcrumbLd([{ name: 'Trang chủ', path: '/' }, { name: 'Tour', path: '/tour' }, { name: tour.name, path: `/tour/${tour.slug}` }])]} />

      {/* Ảnh */}
      <div className="lg:mx-auto lg:max-w-page lg:px-6 lg:pt-14">
        <Media k={tour.image} priority className="h-[260px] w-full sm:h-[380px] lg:h-[460px] lg:rounded-2xl" sizes="(max-width: 1200px) 100vw, 1200px" showCaption />
        {tour.gallery && tour.gallery.length > 1 && (
          <div className="grid grid-cols-4 gap-1 p-1 lg:gap-2 lg:px-0">
            {tour.gallery.slice(1, 5).map((g) => <Media key={g} k={g} className="h-16 w-full lg:h-28 lg:rounded-lg" sizes="25vw" />)}
          </div>
        )}
      </div>

      <div className="mx-auto max-w-page px-4 lg:grid lg:grid-cols-[1fr_380px] lg:gap-10 lg:px-6">
        <div>
          <div className="pt-5">
            <Breadcrumbs items={[{ name: 'Trang chủ', to: '/' }, { name: 'Tour', to: '/tour' }, { name: tour.name }]} />
            <StatusBadge tour={tour} className="mt-3" />
            <h1 className="mt-2 font-display text-[30px] font-extrabold leading-9 lg:text-[40px] lg:leading-[46px]">{tour.name}</h1>
            <p className="mt-2 leading-[25px] text-mountain">{tour.route.join(' · ')}</p>
          </div>

          <dl className="mt-4 grid grid-cols-2 gap-2.5">
            <Fact label="Thời gian" value={tour.duration} />
            <Fact label="Kiểu đi" value={tour.style ?? '—'} />
            <Fact label="Giá" value={tour.price.text} />
            <Fact label="Khởi hành" value={tour.departures?.[0]?.date ?? 'Theo lịch nhóm'} />
          </dl>

          <p className="mt-6 text-[16px] leading-[26px]">{tour.overview}</p>

          {/* Lịch khởi hành & giá */}
          {(tour.price.tiers || tour.departures || tour.price.note) && (
            <Block title="Lịch khởi hành & giá">
              <div className="overflow-hidden rounded-lg border-[1.5px] border-line bg-white">
                {tour.price.tiers?.map((t) => (
                  <div key={t.label} className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 last:border-0">
                    <span className="flex items-center gap-2">{t.label}{t.badge && <span className="rounded bg-sky px-1.5 text-[11px] font-bold uppercase">{t.badge}</span>}</span>
                    <strong>{t.amount}</strong>
                  </div>
                ))}
                {tour.departures?.map((d) => (
                  <div key={d.date} className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 last:border-0">
                    <span className="flex flex-col"><strong>{d.date}</strong><span className="text-sm text-mountain">{d.note}</span></span>
                    <Icon name="calendar" className="text-mountain" />
                  </div>
                ))}
              </div>
              {tour.price.note && <p className="mt-2 text-sm leading-[21px] text-mountain">{tour.price.note}</p>}
            </Block>
          )}

          <Block title="Điểm nhấn">
            <ul className="grid gap-3 sm:grid-cols-2">
              {tour.highlights.map((h) => (
                <li key={h.title} className="flex gap-2.5">
                  <Icon name="star" size={20} fill className="mt-0.5 shrink-0 text-mountain" />
                  <span><strong>{h.title}</strong><br /><span className="text-[15px] text-mountain">{h.text}</span></span>
                </li>
              ))}
            </ul>
          </Block>

          {tour.itinerary && (
            <Block title="Lịch trình">
              {tour.itineraryNote && <p className="mb-2 text-sm text-mountain">{tour.itineraryNote}</p>}
              <Itinerary days={tour.itinerary} />
            </Block>
          )}

          {(tour.included || tour.excluded) && (
            <Block title="Giá bao gồm / chưa bao gồm">
              <div className="grid gap-3 sm:grid-cols-2">
                {tour.included && <IncList title="Đã bao gồm" items={tour.included} icon="check" />}
                {tour.excluded && <IncList title="Chưa bao gồm" items={tour.excluded} icon="x" />}
              </div>
            </Block>
          )}

          {tour.tips && (
            <Block title="Lưu ý trước khi đi">
              <div className="grid gap-3 sm:grid-cols-2">
                {tour.tips.map((t) => (
                  <div key={t.title} className="rounded-lg bg-cream p-4"><strong>{t.title}</strong><p className="mt-1 text-[15px] leading-[23px]">{t.text}</p></div>
                ))}
              </div>
            </Block>
          )}

          {dests.length > 0 && (
            <Block title="Điểm đến trên hành trình">
              <div className="grid grid-cols-2 gap-2.5">{dests.map((d) => d && <DestCard key={d.slug} d={d} />)}</div>
            </Block>
          )}
        </div>

        {/* Cột phải (máy tính) / cuối trang (điện thoại) */}
        <aside className="pt-8 lg:pt-5">
          <div className="lg:sticky lg:top-24">
            <LeadForm tourName={tour.name} title={tour.status === 'soon' ? 'Nhận lịch trình đầu tiên' : isBookable(tour) ? 'Giữ chỗ / nhận báo giá' : 'Nhận lịch trình chi tiết'} />
            <p className="mt-3 text-center text-sm">Hoặc gọi <a href={CONTACT.hotlineVN.href} className="font-bold underline">{CONTACT.hotlineVN.label}</a> · Zalo <a href={CONTACT.zalo.href} className="font-bold underline">{CONTACT.zalo.label}</a></p>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <Section>
          <h2 className="mb-4 font-display text-2xl font-bold">Tour cùng điểm đến</h2>
          <TourRail tours={related} />
        </Section>
      )}

      {/* Thanh giá dính đáy (điện thoại) – nằm trên thanh thao tác */}
      <div className="fixed inset-x-0 bottom-[68px] z-20 flex items-center gap-3 border-t border-line bg-cream-soft px-4 py-2.5 lg:hidden">
        <span className="flex flex-1 flex-col leading-tight"><span className="text-xs text-mountain">{tour.duration}</span><strong>{tour.price.text}</strong></span>
        <a href="#dang-ky" className="flex h-11 items-center rounded-lg bg-sky px-5 font-bold text-navy">{isBookable(tour) ? 'Giữ chỗ' : 'Nhận lịch trình'}</a>
      </div>
      <div className="h-24 lg:h-16" />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border-[1.5px] border-line bg-white p-3">
      <dt className="text-xs text-mountain">{label}</dt>
      <dd className="font-bold leading-snug">{value}</dd>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-9">
      <h2 className="mb-3 font-display text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

function Itinerary({ days }: { days: NonNullable<Tour['itinerary']> }) {
  const [open, setOpen] = useState<number | null>(1);
  return (
    <div className="border-t border-line">
      {days.map((d) => {
        const on = open === d.day;
        return (
          <div key={d.day} className="border-b border-line">
            <button onClick={() => setOpen(on ? null : d.day)} aria-expanded={on} className="flex min-h-[56px] w-full items-center gap-3 py-2 text-left">
              <span className="w-16 shrink-0 text-[13px] font-bold uppercase tracking-wider text-mountain">Ngày {d.day}</span>
              <span className="flex-1 font-bold leading-[22px]">{d.title}</span>
              <span aria-hidden="true" className="w-5 text-xl">{on ? '−' : '+'}</span>
            </button>
            {on && (
              <div className="pb-4 pl-[76px] text-[15px] leading-[23px] text-mountain">
                {d.text && <p>{d.text}</p>}
                {d.items && <ul className="list-disc space-y-1 pl-4">{d.items.map((i) => <li key={i}>{i}</li>)}</ul>}
                {d.stay && <p className="mt-2 flex items-center gap-1.5 text-navy"><Icon name="pin" size={16} />{d.stay}</p>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function IncList({ title, items, icon }: { title: string; items: string[]; icon: 'check' | 'x' }) {
  return (
    <div className="rounded-lg border-[1.5px] border-line bg-white p-4">
      <strong>{title}</strong>
      <ul className="mt-2 space-y-1.5 text-[15px] leading-[22px]">
        {items.map((i) => <li key={i} className="flex gap-2"><Icon name={icon} size={18} className="mt-0.5 shrink-0 text-mountain" />{i}</li>)}
      </ul>
    </div>
  );
}

function tripLd(t: Tour) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: t.name,
    description: t.short,
    image: imageUrl(t.image),
    url: `${SITE.url}/tour/${t.slug}`,
    provider: { '@type': 'TravelAgency', name: SITE.name, url: SITE.url },
    itinerary: t.itinerary ? { '@type': 'ItemList', itemListElement: t.itinerary.map((d) => ({ '@type': 'ListItem', position: d.day, name: d.title })) } : undefined,
  };
}

