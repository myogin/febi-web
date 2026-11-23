// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Ganti ke domain custom nanti (mis. https://febimaharani.com) — cukup di sini.
const SITE = 'https://febi-web.pages.dev';

export default defineConfig({
  site: SITE,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', id: 'id' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
