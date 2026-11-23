// Các trang nội dung: điểm đến, blog, góc chia sẻ.
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import { Seo, breadcrumbLd, imageUrl } from '../components/Seo';
import { Media } from '../components/Media';
import { PageHero, Section, DestCard, PostCard, TourGrid, Chips, VideoEmbed, CtaBand, Breadcrumbs } from '../components/ui';
import { DESTINATIONS, destinationBySlug } from '../data/destinations';
import { POSTS, POST_CATEGORIES, postBySlug, sortedPosts, type Block, type PostCategory } from '../data/posts';
import { TOURS, tourBySlug, type Tour } from '../data/tours';
import { ALBUMS, DRIVE_VIDEOS, YOUTUBE_UPLOADS_PLAYLIST } from '../data/media';
import { LEGACY_PROOF, SITE, SOCIAL } from '../data/site';
import { GROUPS } from '../data/taxonomy';

/* ===== Điểm đến ===== */
export function Destinations() {
  return (
    <>
      <Seo title="Điểm đến" description="Điểm đến ở Mỹ và Canada: nên đi mùa nào, ở bao lâu, xem gì." />
      <PageHero title="Điểm đến" intro="Nên đi mùa nào, ở bao lâu, có gì đáng xem — và tour nào đi qua." crumbs={[{ name: 'Trang chủ', to: '/' }, { name: 'Điểm đến' }]}>
        <Chips items={GROUPS['quoc-gia'].terms.map((t) => ({ label: t.name, to: `/quoc-gia/${t.slug}` }))} />
      </PageHero>
      <Section className="!pt-6">
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">{DESTINATIONS.map((d) => <DestCard key={d.slug} d={d} />)}</div>
      </Section>
      <CtaBand />
      <div className="h-10" />
    </>
  );
}

export function DestinationDetail() {
  const { slug = '' } = useParams();
  const d = destinationBySlug(slug);
  if (!d) return <Navigate to="/diem-den" replace />;
  const tours = TOURS.filter((t) => t.destinations?.includes(d.slug));
  const posts = POSTS.filter((p) => p.body.some((b) => b.t !== 'sources' && 'text' in b && b.text.includes(d.name))).slice(0, 3);
  return (
    <>
      <Seo title={`${d.name} – ${d.region}`} description={d.summary} image={d.image}
        jsonLd={[{ '@context': 'https://schema.org', '@type': 'TouristDestination', name: d.name, description: d.summary, image: imageUrl(d.image) }, breadcrumbLd([{ name: 'Trang chủ', path: '/' }, { name: 'Điểm đến', path: '/diem-den' }, { name: d.name, path: `/diem-den/${d.slug}` }])]} />
      <PageHero title={d.name} intro={d.summary} crumbs={[{ name: 'Trang chủ', to: '/' }, { name: 'Điểm đến', to: '/diem-den' }, { name: d.name }]} />
      <Section className="!pt-6">
        <Media k={d.image} priority className="h-56 w-full rounded-lg lg:h-96" sizes="(max-width: 1200px) 100vw, 1200px" showCaption />
        <dl className="mt-4 grid grid-cols-3 gap-2.5 text-sm">
          <div className="rounded-lg bg-white p-3"><dt className="text-mountain">Vùng</dt><dd className="font-bold">{d.region}</dd></div>
          <div className="rounded-lg bg-white p-3"><dt className="text-mountain">Nên ở</dt><dd className="font-bold">{d.stay}</dd></div>
          <div className="rounded-lg bg-white p-3"><dt className="text-mountain">Mùa đẹp</dt><dd className="font-bold">{d.season}</dd></div>
        </dl>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="leading-[26px]">{d.overview}</p>
            <h2 className="mb-2 mt-6 font-display text-2xl font-bold">Không nên bỏ lỡ</h2>
            <ul className="list-disc space-y-1.5 pl-5">{d.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          </div>
          <div className="rounded-lg bg-cream p-5">
            <h2 className="mb-2 font-display text-xl font-bold">Kinh nghiệm</h2>
            <ul className="space-y-2 text-[15px] leading-[23px]">{d.tips.map((t) => <li key={t}>• {t}</li>)}</ul>
          </div>
        </div>
      </Section>
      {tours.length > 0 && <Section><h2 className="mb-4 font-display text-2xl font-bold">Tour đi qua {d.name}</h2><TourGrid tours={tours} /></Section>}
      {posts.length > 0 && <Section><h2 className="mb-4 font-display text-2xl font-bold">Bài viết liên quan</h2><div className="grid gap-4 lg:grid-cols-3">{posts.map((p) => <PostCard key={p.slug} post={p} />)}</div></Section>}
      <CtaBand />
      <div className="h-10" />
    </>
  );
}

/* ===== Blog ===== */
export function Blog() {
  const [params] = useSearchParams();
  const muc = params.get('muc') as PostCategory | null;
  const cat = muc && POST_CATEGORIES[muc] ? muc : null;
  const list = sortedPosts().filter((p) => !cat || p.category === cat);
  const cats = Object.keys(POST_CATEGORIES) as PostCategory[];
  return (
    <>
      <Seo title={cat ? POST_CATEGORIES[cat].name : 'Blog & cẩm nang'} description="Blog điểm đến, nhật ký ảnh từng đoàn và cẩm nang đi Mỹ cho người Việt." />
      <PageHero title={cat ? POST_CATEGORIES[cat].name : 'Blog & cẩm nang'} intro={cat ? POST_CATEGORIES[cat].short : 'Điểm đến, nhật ký ảnh từng đoàn và kinh nghiệm thực tế.'} crumbs={[{ name: 'Trang chủ', to: '/' }, { name: 'Blog' }]}>
        <Chips active={cat ? `/blog?muc=${cat}` : '/blog'} items={[{ label: 'Tất cả', to: '/blog' }, ...cats.map((c) => ({ label: POST_CATEGORIES[c].name, to: `/blog?muc=${c}` }))]} />
      </PageHero>
      <Section className="!pt-6">
        <div className="grid gap-5 lg:grid-cols-3">{list.map((p) => <PostCard key={p.slug} post={p} />)}</div>
        {!list.length && <p>Chuyên mục đang cập nhật bài.</p>}
      </Section>
      <div className="h-16" />
    </>
  );
}

export function PostPage() {
  const { slug = '' } = useParams();
  const post = postBySlug(slug);
  if (!post) return <Navigate to="/blog" replace />;
  const tours = (post.relatedTours ?? []).map(tourBySlug).filter((t): t is Tour => !!t);
  return (
    <>
      <Seo title={post.title} description={post.excerpt} image={post.cover}
        jsonLd={[{ '@context': 'https://schema.org', '@type': 'Article', headline: post.title, datePublished: post.date, inLanguage: 'vi', image: imageUrl(post.cover), author: { '@type': 'Organization', name: SITE.name }, publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/logo-512.png` } } },
          breadcrumbLd([{ name: 'Trang chủ', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }])]} />
      <article className="mx-auto max-w-3xl px-4 pt-12 lg:pt-16">
        <Breadcrumbs items={[{ name: 'Trang chủ', to: '/' }, { name: 'Blog', to: '/blog' }, { name: POST_CATEGORIES[post.category].name, to: `/blog?muc=${post.category}` }]} />
        <h1 className="mt-2 font-display text-[30px] font-extrabold leading-9 lg:text-[40px] lg:leading-[46px]">{post.title}</h1>
        <p className="mt-2 text-sm text-mountain">{new Date(post.date).toLocaleDateString('vi-VN')} · {post.readMin} phút đọc</p>
        <Media k={post.cover} priority className="mt-5 h-56 w-full rounded-lg lg:h-80" sizes="(max-width: 768px) 100vw, 768px" />
        <div className="mt-6 space-y-4 text-[17px] leading-[28px]">{post.body.map((b, i) => <PostBlock key={i} b={b} />)}</div>
      </article>
      {tours.length > 0 && <Section><h2 className="mb-4 font-display text-2xl font-bold">Tour liên quan</h2><TourGrid tours={tours} /></Section>}
      <CtaBand />
      <div className="h-10" />
    </>
  );
}

function PostBlock({ b }: { b: Block }) {
  switch (b.t) {
    case 'p': return <p>{b.text}</p>;
    case 'h2': return <h2 className="pt-3 font-display text-2xl font-bold leading-8">{b.text}</h2>;
    case 'list': return <ul className="list-disc space-y-1.5 pl-5">{b.items.map((i) => <li key={i}>{i}</li>)}</ul>;
    case 'img': return <figure><Media k={b.media} className="h-60 w-full rounded-lg lg:h-96" sizes="(max-width: 768px) 100vw, 768px" />{b.caption && <figcaption className="mt-1.5 text-sm text-mountain">{b.caption}</figcaption>}</figure>;
    case 'note': return <p className="rounded-lg bg-cream p-4 text-[15px] leading-[23px]">{b.text}</p>;
    case 'sources': return <div className="text-[15px]"><strong>Nguồn</strong><ul className="mt-1 space-y-1">{b.items.map((s) => <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="underline">{s.label}</a></li>)}</ul></div>;
  }
}

/* ===== Góc chia sẻ ===== */
export function Share() {
  return (
    <>
      <Seo title="Góc chia sẻ" description="Video, album ảnh thật và cảm nhận từ các đoàn của Phượt Mỹ." image="doanAlberta" />
      <PageHero title="Góc chia sẻ" intro="Video, ảnh và lời kể thật từ những đoàn đã đi cùng Phượt Mỹ." crumbs={[{ name: 'Trang chủ', to: '/' }, { name: 'Góc chia sẻ' }]}>
        <Chips items={[{ label: 'Video', to: '/goc-chia-se#video' }, { label: 'Album ảnh', to: '/goc-chia-se#album' }, { label: 'Cảm nhận khách', to: '/goc-chia-se#cam-nhan' }]} />
      </PageHero>

      <Section id="video" className="scroll-mt-20">
        <h2 className="mb-1 font-display text-2xl font-bold">Video</h2>
        <p className="mb-4 text-mountain">Danh sách phát tự cập nhật theo kênh YouTube PHƯỢT MỸ TV.</p>
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <VideoEmbed title="Kênh YouTube PHƯỢT MỸ TV" src={`https://www.youtube-nocookie.com/embed/videoseries?list=${YOUTUBE_UPLOADS_PLAYLIST}&autoplay=1`} poster={<Media k="doanYosemite" className="h-full w-full" sizes="(max-width: 1024px) 100vw, 600px" />} />
            <a href={SOCIAL.find((s) => s.key === 'youtube')!.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-[44px] items-center font-bold underline">Mở kênh YouTube PHƯỢT MỸ TV</a>
          </div>
          {DRIVE_VIDEOS.map((v, i) => (
            <div key={v.id}>
              <VideoEmbed title={v.title} src={`https://drive.google.com/file/d/${v.id}/preview`} poster={<Media k={(['caravanTuyet', 'doanArizona', 'buaToiDoan'] as const)[i % 3]} className="h-full w-full" sizes="(max-width: 1024px) 100vw, 600px" />} />
              <p className="mt-2 font-bold">{v.title}</p>
              <p className="text-sm text-mountain">{v.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="album" className="scroll-mt-20">
        <h2 className="mb-4 font-display text-2xl font-bold">Album ảnh theo chuyến</h2>
        <div className="space-y-8">
          {ALBUMS.map((a) => (
            <div key={a.title}>
              <h3 className="font-display text-xl font-bold">{a.title}</h3>
              <p className="mb-2 text-sm text-mountain">{a.note}</p>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                {a.photos.map((ph, i) => <Media key={ph} k={ph} className={`${i === 0 ? 'col-span-2 h-56 lg:col-span-1' : 'h-40'} w-full rounded-lg lg:h-60`} sizes="(max-width: 1024px) 50vw, 400px" />)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="cam-nhan" className="scroll-mt-20">
        <h2 className="mb-4 font-display text-2xl font-bold">Cảm nhận khách</h2>
        {LEGACY_PROOF.show && (
          <div className="grid gap-3 lg:grid-cols-3">
            {LEGACY_PROOF.testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-lg border-[1.5px] border-line bg-white p-5">
                <p className="leading-[25px]">“{t.text}”</p>
                <footer className="mt-3 text-sm"><strong>{t.name}</strong> · {t.from}<br /><span className="text-mountain">{t.trip}</span></footer>
              </blockquote>
            ))}
          </div>
        )}
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <a href={SOCIAL.find((s) => s.key === 'group')!.href} target="_blank" rel="noopener noreferrer" className="flex min-h-[48px] items-center justify-center text-center py-2 rounded-lg border-[1.5px] border-navy px-5 font-bold">Bài viết của khách trong Nhóm Cộng đồng</a>
          <a href={SOCIAL.find((s) => s.key === 'facebook')!.href} target="_blank" rel="noopener noreferrer" className="flex min-h-[48px] items-center justify-center text-center py-2 rounded-lg border-[1.5px] border-navy px-5 font-bold">Đánh giá trên Facebook</a>
        </div>
      </Section>
      <CtaBand title="Theo dõi hành trình mới" text="Đăng ký nhận lịch khởi hành và ưu đãi đặt sớm qua Zalo." />
      <div className="h-10" />
    </>
  );
}

