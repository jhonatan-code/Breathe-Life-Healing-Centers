// The Vercel adapter writes each redirect as an exact `^/path$` route, so the
// WordPress-style URL with a trailing slash (/old-page/) never matched and
// returned 404. After the build, this lets every redirect route match the path
// with or without the trailing slash.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export default function redirectsTrailingSlash() {
  return {
    name: 'redirects-trailing-slash',
    hooks: {
      'astro:build:done': ({ logger }) => {
        const file = fileURLToPath(new URL('../.vercel/output/config.json', import.meta.url));
        if (!existsSync(file)) return;
        const config = JSON.parse(readFileSync(file, 'utf8'));
        let count = 0;
        for (const route of config.routes) {
          if (route.status === 301 && route.headers?.Location && /\$$/.test(route.src) && !/\/\?\$$/.test(route.src)) {
            route.src = route.src.replace(/\/?\$$/, '/?$');
            count++;
          }
        }
        writeFileSync(file, JSON.stringify(config, null, 2));
        logger.info(`${count} redirect(s) now match with or without a trailing slash`);
      },
    },
  };
}
