import {defineConfig} from 'astro/config';
import {fileURLToPath, URL} from 'node:url';
import tailwind from '@astrojs/tailwind';

/** @type {import('astro').AstroUserConfig} */
const config = defineConfig({
  vite: {
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          entryFileNames: 'bundle.[hash].js',
          assetFileNames: '[name].[hash][extname]',
        },
      },
    },
    resolve: {
      alias: {
        '@layouts': fileURLToPath(new URL('src/layouts', import.meta.url)),
        '@layouts/*': fileURLToPath(new URL('src/layouts/*', import.meta.url)),
        '@widgets': fileURLToPath(new URL('src/widgets', import.meta.url)),
        '@widgets/*': fileURLToPath(new URL('src/widgets/*', import.meta.url)),
        '@ui': fileURLToPath(new URL('src/shared/ui', import.meta.url)),
        '@ui/*': fileURLToPath(new URL('src/shared/ui/*', import.meta.url)),
        '@utils': fileURLToPath(new URL('src/shared/utilities', import.meta.url)),
        '@utils/*': fileURLToPath(new URL('src/shared/utilities/*', import.meta.url)),
        '@': fileURLToPath(new URL('src', import.meta.url)),
        '@/*': fileURLToPath(new URL('src/*', import.meta.url)),
      },
    },
  },
  integrations: [tailwind({applyBaseStyles: false})],
});

export default config;
