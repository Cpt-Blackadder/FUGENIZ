import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      // Customize sitemap options
      filter: (page) => !page.includes('404'), // Exclude 404 page from sitemap
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(), // Use current date for lastmod
    })
  ],
  output: 'static',
  adapter: vercel(),
  site: 'https://fugeniz.com',
  base: '/',
  build: {
    assets: 'assets'
  }
}); 