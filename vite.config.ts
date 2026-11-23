import { writeFileSync } from 'node:fs';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { SITE } from './src/data/site';
import { TOURS } from './src/data/tours';
import { DESTINATIONS } from './src/data/destinations';
import { POSTS } from './src/data/posts';
import { GROUPS } from './src/data/taxonomy';

// Sinh sitemap.xml + robots.txt từ dữ liệu vào public/ mỗi lần dựng (Readdy chỉ phục vụ file có sẵn trong public/).
function sitemap(): Plugin {
  return {
    name: 'phuotmy-sitemap',
    apply: 'build',
    buildStart() {
      const paths = [
        '/', '/tour', '/diem-den', '/blog', '/goc-chia-se', '/ve-phuot-my', '/dai-ly', '/lien-he',
        ...Object.entries(GROUPS).flatMap(([g, v]) => v.terms.map((t) => `/${g}/${t.slug}`)),
        ...TOURS.map((t) => `/tour/${t.slug}`),
        ...DESTINATIONS.map((d) => `/diem-den/${d.slug}`),
        ...POSTS.map((p) => `/blog/${p.slug}`),
      ];
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
        .map((p) => `  <url><loc>${SITE.url}${p}</loc></url>`)
        .join('\n')}\n</urlset>\n`;
      writeFileSync('public/sitemap.xml', xml);
      writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
    },
  };
}

// Theo quy ước của Readdy: BASE_PATH cho bản xem trước, xuất ra thư mục out/
const base = process.env.BASE_PATH || '/';
const isPreview = process.env.IS_PREVIEW ? true : false;

export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview),
    __READDY_PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID || ''),
    __READDY_VERSION_ID__: JSON.stringify(process.env.VERSION_ID || ''),
  },
  base,
  plugins: [react(), sitemap()],
  build: { outDir: 'out' },
});
