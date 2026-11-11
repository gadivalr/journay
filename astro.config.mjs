import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://localhost:4321',
  // Permite acceder al servidor de desarrollo/preview desde túneles
  // (Cloudflare, ngrok, etc.) sin el bloqueo por Host de Vite.
  server: {
    allowedHosts: true,
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
