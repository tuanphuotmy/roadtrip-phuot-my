import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { SITE } from './src/data/site';
import { TOURS } from './src/data/tours';
import { DESTINATIONS } from './src/data/destinations';
import { POSTS } from './src/data/posts';
import { GROUPS } from './src/data/taxonomy';

// Sinh sitemap.xml + robots.txt từ dữ liệu: thêm tour/bài mới là sitemap tự cập nhật.
function sitemap(): Plugin {
  return {
    name: 'phuotmy-sitemap',
    apply: 'build',
    generateBundle() {
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
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: xml });
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n` });
    },
  };
}

export default defineConfig({
  plugins: [react(), sitemap()],
});
