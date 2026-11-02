// Answers 410 Gone for old WordPress pages that had no content (test pages), so search engines drop them
// for good instead of following a redirect. Astro redirects cannot send 410, so after the build this adds
// one route per path to the top of the Vercel config, with or without the trailing slash, serving the
// 404 page body with a 410 status.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export default function gone(paths) {
  return {
    name: 'gone',
    hooks: {
      'astro:build:done': ({ logger }) => {
        const file = fileURLToPath(new URL('../.vercel/output/config.json', import.meta.url));
        if (!existsSync(file)) return;
        const config = JSON.parse(readFileSync(file, 'utf8'));
        const routes = paths.map((p) => ({ src: `^${escape(p.replace(/\/$/, ''))}/?$`, dest: '/404.html', status: 410 }));
        config.routes = [...routes, ...config.routes.filter((r) => !routes.some((n) => n.src === r.src))];
        writeFileSync(file, JSON.stringify(config, null, 2));
        logger.info(`${routes.length} path(s) answer 410 Gone`);
      },
    },
  };
}
