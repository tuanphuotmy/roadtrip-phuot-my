import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE, CONTACT, SOCIAL } from '../data/site';
import { MEDIA, type MediaKey } from '../data/media';

// Đặt tiêu đề, mô tả, canonical, Open Graph và JSON-LD cho từng trang.
interface SeoProps {
  title: string;
  description?: string;
  image?: MediaKey;
  jsonLd?: object | object[];
  noindex?: boolean;
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}

export function imageUrl(k?: MediaKey) {
  const m = k ? MEDIA[k] : undefined;
  return m && m.kind === 'photo' ? `${SITE.url}/media/${m.file}.webp` : `${SITE.url}/media/caravan-tuyet.webp`;
}

export function Seo({ title, description = SITE.description, image, jsonLd, noindex }: SeoProps) {
  const { pathname } = useLocation();
  useEffect(() => {
    const full = title === SITE.name ? `${SITE.name} – ${SITE.motto}` : `${title} | ${SITE.name}`;
    const url = SITE.url + (pathname === '/' ? '/' : pathname.replace(/\/$/, ''));
    document.title = full;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex' : 'index,follow');
    setMeta('property', 'og:title', full);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', imageUrl(image));
    setMeta('property', 'og:type', 'website');
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
    document.head.querySelectorAll('script[data-seo]').forEach((s) => s.remove());
    const blocks = [orgSchema(), ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [])];
    for (const b of blocks) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.dataset.seo = '1';
      s.text = JSON.stringify(b);
      document.head.appendChild(s);
    }
  }, [title, description, image, jsonLd, noindex, pathname]);
  return null;
}

function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/logo-512.png`,
    image: `${SITE.url}/media/caravan-tuyet.webp`,
    telephone: CONTACT.office.label,
    email: CONTACT.email.label,
    address: { '@type': 'PostalAddress', streetAddress: '721 S Susan St', addressLocality: 'Santa Ana', addressRegion: 'CA', postalCode: '92704', addressCountry: 'US' },
    sameAs: SOCIAL.filter((s) => s.key !== 'zalo').map((s) => s.href),
    knowsLanguage: ['vi', 'en'],
  };
}

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: SITE.url + it.path })),
});
