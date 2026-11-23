import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import { Seo, breadcrumbLd } from '../components/Seo';
import { Media } from '../components/Media';
import { PageHero, Section, TourGrid, Chips, CtaBand } from '../components/ui';
import { GROUPS, findTerm, type Group } from '../data/taxonomy';
import { TOURS, sortTours, toursIn, isBookable } from '../data/tours';

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').toLowerCase();

/** /tour — tất cả tour, có ô tìm và lọc nhanh theo loại hình */
export function TourList() {
  const [params] = useSearchParams();
  const legacyId = params.get('id');
  if (legacyId) return <Navigate to={`/tour/${legacyId}`} replace />; // đường dẫn cũ /tour?id=...
  const q = params.get('q') ?? '';
  let list = sortTours(TOURS);
  if (q) {
    const words = norm(q).split(/\s+/);
    list = list.filter((t) => {
      const hay = norm([t.name, t.short, t.duration, ...t.route, t.style ?? ''].join(' '));
      return words.every((w) => hay.includes(w));
    });
  }
  const bookable = list.filter(isBookable);
  const samples = list.filter((t) => !isBookable(t));
  return (
    <>
      <Seo title="Tour đang mở bán" description="Tour Mỹ, Canada và liên tuyến đang nhận khách, mở đăng ký sớm 2027 và lịch trình mẫu thiết kế riêng." jsonLd={breadcrumbLd([{ name: 'Trang chủ', path: '/' }, { name: 'Tour', path: '/tour' }])} />
      <PageHero title={q ? `Kết quả cho “${q}”` : 'Tour đang mở bán'} intro="Mỗi tour ghi rõ trạng thái, thời gian và giá. Chưa thấy lịch hợp? Phượt Mỹ thiết kế riêng cho nhóm anh chị." crumbs={[{ name: 'Trang chủ', to: '/' }, { name: 'Tour' }]}>
        <GroupChips group="loai-hinh" />
      </PageHero>
      <Section className="!pt-6">
        <p className="mb-3 text-sm text-mountain">{bookable.length} tour đang bán</p>
        <TourGrid tours={bookable} />
      </Section>
      {samples.length > 0 && (
        <Section>
          <h2 className="font-display text-2xl font-bold">Lịch trình mẫu – thiết kế riêng theo nhóm</h2>
          <p className="mb-4 mt-1 text-mountain">Tham khảo để hình dung, Phượt Mỹ điều chỉnh theo ngày đi và số người.</p>
          <TourGrid tours={samples} />
        </Section>
      )}
      <CtaBand />
      <div className="h-10" />
    </>
  );
}

/** /loai-hinh/:slug, /nhu-cau/:slug, /quoc-gia/:slug, /theo-mua/:slug — cùng một mẫu trang */
export function CategoryPage({ group }: { group: Group }) {
  const { slug = '' } = useParams();
  const term = findTerm(group, slug);
  if (!term) return <Navigate to="/tour" replace />;
  const list = sortTours(toursIn(group, slug));
  const path = `/${group}/${slug}`;
  return (
    <>
      <Seo title={term.name} description={term.intro} image={term.image}
        jsonLd={breadcrumbLd([{ name: 'Trang chủ', path: '/' }, { name: GROUPS[group].title, path: '/tour' }, { name: term.name, path }])} />
      <PageHero title={term.name} intro={term.intro} crumbs={[{ name: 'Trang chủ', to: '/' }, { name: GROUPS[group].title, to: '/tour' }, { name: term.name }]}>
        <GroupChips group={group} active={path} />
      </PageHero>
      <Section className="!pt-4">
        <Media k={term.image} className="mb-6 h-48 w-full rounded-lg lg:h-72" sizes="(max-width: 1200px) 100vw, 1200px" showCaption position="50% 40%" />
        <TourGrid tours={list} />
      </Section>
      {group === 'loai-hinh' && slug === 'theo-mua' && (
        <Section>
          <h2 className="mb-2 font-display text-2xl font-bold">Chọn theo mùa</h2>
          <GroupChips group="theo-mua" />
        </Section>
      )}
      <CtaBand />
      <div className="h-10" />
    </>
  );
}

function GroupChips({ group, active }: { group: Group; active?: string }) {
  return <Chips active={active} items={GROUPS[group].terms.map((t) => ({ label: t.name, to: `/${group}/${t.slug}` }))} />;
}
