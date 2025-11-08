import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// 環境変数を読み込む（.env.production または .env.development）
const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');

export default defineConfig({
  build: {
    assets: 'images',
    assetsPrefix: env.CDN_URL || process.env.CDN_URL || '',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
