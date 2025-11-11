// astro.config.ts
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');

export default defineConfig({
  build: {
    // assets はデフォルトのまま（_astro）。ここを変えない！
    assetsPrefix: env.CDN_URL || process.env.CDN_URL || '',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          // 画像だけ images/ へ、その他は _astro/ へ
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name ?? '';
            if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(name)) {
              return 'images/[name]-[hash][extname]';
            }
            // CSS などは従来どおり _astro/
            return '_astro/[name]-[hash][extname]';
          },
          // JS は _astro/
          chunkFileNames: '_astro/[name]-[hash].js',
          entryFileNames: '_astro/[name]-[hash].js',
        },
      },
    },
  },
});
