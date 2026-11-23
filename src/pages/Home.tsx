import { Link, useNavigate } from 'react-router-dom';
import { useState, type FormEvent } from 'react';
import { Seo } from '../components/Seo';
import { Media } from '../components/Media';
import { Icon } from '../components/Icon';
import { Section, SectionHead, TourRail, PostCard, DestCard, VideoEmbed, CtaBand } from '../components/ui';
import { GROUPS } from '../data/taxonomy';
import { TOURS, sortTours, isBookable } from '../data/tours';
import { DESTINATIONS } from '../data/destinations';
import { sortedPosts } from '../data/posts';
import { ALBUMS, YOUTUBE_UPLOADS_PLAYLIST } from '../data/media';
import { CONTACT, LEGACY_PROOF, SITE, SOCIAL } from '../data/site';

const TYPE_ICON: Record<string, string> = {
  'ghep-doan-tu-viet-nam': 'plane',
  'ghep-doan-tai-my': 'car',
  'thiet-ke-rieng': 'heart',
  'su-kien-dac-biet': 'star',
  'theo-mua': 'leaf',
};

export default function Home() {
  const onSale = sortTours(TOURS.filter(isBookable));
  return (
    <>
      <Seo title={SITE.name} description={SITE.description} image="caravanTuyet" />

      {/* Đầu trang: ảnh thật + thông điệp */}
      <section className="lg:relative">
        <Media k="caravanTuyet" priority className="h-[300px] w-full sm:h-[420px] lg:h-[620px]" sizes="100vw" />
        <div className="bg-navy px-4 pb-7 pt-6 text-cream lg:absolute lg:bottom-10 lg:left-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))] lg:max-w-xl lg:rounded-2xl lg:p-8">
          <p className="text-[13px] font-bold uppercase tracking-wider text-sky">Road trip · Tour ghép · Tour riêng</p>
          <h1 className="mt-3 font-display text-[38px] font-extrabold leading-[44px] lg:text-[52px] lg:leading-[58px]">Đi để sống, không để xem</h1>
          <p className="mt-3 text-[17px] leading-[27px]">Hành trình Mỹ, Canada và liên tuyến cho khách Việt. Đội ngũ người Việt tại California đi cùng anh chị từ lúc lên kế hoạch đến ngày về.</p>
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <Link to="/tour" className="flex h-[52px] items-center justify-center rounded-lg bg-cream px-6 font-bold text-navy">Xem tour đang mở bán</Link>
            <a href={CONTACT.zalo.href} className="flex h-[52px] items-center justify-center rounded-lg border-2 border-cream px-6 font-bold">Tư vấn Zalo {CONTACT.zalo.label}</a>
          </div>
          <p className="mt-3 text-xs opacity-85">Ảnh thật từ đoàn caravan Phượt Mỹ</p>
        </div>
      </section>

      <SearchBox />

      {/* Loại hình */}
      <Section>
        <SectionHead title="Anh chị muốn đi kiểu nào?" />
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-5">
          {GROUPS['loai-hinh'].terms.map((t, i) => (
            <Link key={t.slug} to={`/loai-hinh/${t.slug}`}
              className={`flex min-h-[112px] flex-col gap-1.5 rounded-lg border-[1.5px] border-line bg-white p-3.5 hover:border-navy ${i === 4 ? 'col-span-2 lg:col-span-1' : ''}`}>
              <Icon name={TYPE_ICON[t.slug]} size={28} className="text-mountain" />
              <span className="font-bold leading-[21px]">{t.name}</span>
              <span className="text-[13px] leading-[18px] text-mountain">{t.short}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Đang mở bán */}
      <Section>
        <SectionHead title="Đang mở đăng ký" more={{ to: '/tour', label: 'Xem tất cả' }} />
        <TourRail tours={onSale.slice(0, 6)} />
      </Section>

      {/* Nhu cầu */}
      <Section>
        <SectionHead title="Anh chị đi cùng ai?" />
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-3">
          {GROUPS['nhu-cau'].terms.map((t) => (
            <Link key={t.slug} to={`/nhu-cau/${t.slug}`} className="flex min-h-[56px] flex-col justify-center rounded-lg bg-cream px-3.5 py-2.5 hover:bg-line">
              <span className="font-bold leading-5">{t.name}</span>
              <span className="hidden text-sm text-mountain lg:block">{t.short}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Quốc gia + điểm đến */}
      <Section>
        <SectionHead title="Điểm đến" more={{ to: '/diem-den', label: 'Tất cả điểm đến' }} />
        <div className="grid gap-2.5 lg:grid-cols-3">
          {GROUPS['quoc-gia'].terms.map((t, i) => (
            <Link key={t.slug} to={`/quoc-gia/${t.slug}`} className={`group overflow-hidden rounded-lg bg-navy text-cream ${i === 0 ? '' : ''}`}>
              <Media k={t.image} className="h-44 w-full" sizes="(max-width: 1024px) 100vw, 400px" position="50% 40%" />
              <div className="flex items-center justify-between gap-2 px-3.5 py-3">
                <span className="font-display text-[22px] font-bold group-hover:underline">{t.name}</span>
                <span className="text-right text-[13px]">{t.short}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {DESTINATIONS.slice(0, 4).map((d) => <DestCard key={d.slug} d={d} />)}
        </div>
      </Section>

      {/* Ảnh thật */}
      <Section>
        <SectionHead title="Ảnh thật từ các đoàn" more={{ to: '/goc-chia-se#album', label: 'Album' }} />
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {ALBUMS.slice(0, 4).map((a, i) => (
            <Link key={a.title} to="/goc-chia-se#album" className={`group relative overflow-hidden rounded-lg ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <Media k={a.cover} className={i === 0 ? 'h-56 w-full lg:h-full' : 'h-36 w-full lg:h-44'} sizes="(max-width: 1024px) 50vw, 300px" />
              <span className="absolute inset-x-0 bottom-0 bg-navy/85 px-3 py-1.5 text-sm font-bold text-cream">{a.title}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Video */}
      <Section>
        <SectionHead title="Góc chia sẻ" sub="Video mới nhất trên kênh YouTube PHƯỢT MỸ TV" more={{ to: '/goc-chia-se', label: 'Xem thêm' }} />
        <div className="max-w-3xl">
          <VideoEmbed
            title="Video mới nhất kênh PHƯỢT MỸ TV"
            src={`https://www.youtube-nocookie.com/embed/videoseries?list=${YOUTUBE_UPLOADS_PLAYLIST}&autoplay=1`}
            poster={<Media k="doanYosemite" className="h-full w-full" sizes="(max-width: 768px) 100vw, 768px" />}
          />
        </div>
      </Section>

      {/* Blog */}
      <Section>
        <SectionHead title="Blog & cẩm nang" more={{ to: '/blog', label: 'Tất cả bài' }} />
        <div className="grid gap-4 lg:grid-cols-3">
          {sortedPosts().slice(0, 3).map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </Section>

      {/* Số liệu & cảm nhận (giữ tạm từ site cũ) */}
      {LEGACY_PROOF.show && (
        <Section>
          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-cream p-5 lg:grid-cols-4">
            {LEGACY_PROOF.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-extrabold">{s.value}</div>
                <div className="text-sm text-mountain">{s.label}</div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Cộng đồng */}
      <Section>
        <SectionHead title="Đi cùng cộng đồng" />
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-5">
          {SOCIAL.map((s) => (
            <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer"
              className="flex min-h-[52px] items-center justify-center rounded-lg border-[1.5px] border-navy px-2 text-center text-sm font-bold hover:bg-navy hover:text-cream">
              {s.label}
            </a>
          ))}
        </div>
      </Section>

      <CtaBand />
      <div className="h-10 lg:h-16" />
    </>
  );
}

function SearchBox() {
  const [q, setQ] = useState('');
  const nav = useNavigate();
  function go(e: FormEvent) {
    e.preventDefault();
    nav(`/tour${q.trim() ? `?q=${encodeURIComponent(q.trim())}` : ''}`);
  }
  return (
    <form onSubmit={go} role="search" className="mx-auto max-w-page px-4 pt-5 lg:px-6 lg:pt-8">
      <label htmlFor="tim-tour" className="mb-2 block text-[13px] font-bold uppercase tracking-wider">Tìm tour</label>
      <div className="flex max-w-2xl gap-2">
        <input id="tim-tour" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Điểm đến, tháng, số ngày…"
          className="h-12 min-w-0 flex-1 rounded-lg border-[1.5px] border-line bg-white px-3.5 text-base focus:border-navy focus:outline-none" />
        <button aria-label="Tìm" className="flex h-12 w-[52px] items-center justify-center rounded-lg bg-navy text-cream"><Icon name="search" /></button>
      </div>
    </form>
  );
}
