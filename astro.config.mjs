import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  adapter: vercel(),
  site: 'https://petrol-nexus.vercel.app'
});
