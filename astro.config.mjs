import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  site: 'https://fugeniz.com',
  build: {
    inlineStylesheets: 'auto'
  }
}); 