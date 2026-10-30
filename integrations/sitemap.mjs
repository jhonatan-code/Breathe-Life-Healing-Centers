// Writes /sitemap.xml (every built page, trailing-slash URLs on the `site`
// domain) into the Vercel static output after the build. Redirects are not
// pages, so they never appear in it.
import { writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export default function sitemap() {
  let site = '';
  return {
    name: 'sitemap',
    hooks: {
      'astro:config:done': ({ config }) => { site = String(config.site).replace(/\/$/, ''); },
      'astro:build:done': ({ pages, logger }) => {
        const dir = fileURLToPath(new URL('../.vercel/output/static/', import.meta.url));
        if (!existsSync(dir)) return;
        const urls = pages
          .map((p) => p.pathname)
          .filter((p) => !/^404\/?$/.test(p))
          .map((p) => `${site}/${p}`.replace(/\/?$/, '/'))
          .sort();
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`;
        writeFileSync(dir + 'sitemap.xml', xml);
        logger.info(`${urls.length} URL(s) written to sitemap.xml`);
      },
    },
  };
}
