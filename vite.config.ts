import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import vercel from 'solid-start-vercel';
import Unfonts from 'unplugin-fonts/vite';

export default defineConfig({
  plugins: [
    solid({
      ssr: true,
      adapter: vercel({ prerender: { expiration: 60 } }),
    }),
    // Unfonts(),
  ],
});
