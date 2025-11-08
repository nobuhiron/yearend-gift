import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    assets: 'images',
    assetsPrefix: process.env.CDN_URL || '',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
