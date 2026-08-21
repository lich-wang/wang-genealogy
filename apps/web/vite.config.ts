import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// The API base URL is read from VITE_API_BASE (default local Worker on 8787).
// In dev we proxy /api to it so the browser talks to a same-origin path and we
// avoid CORS; in production the client falls back to relative /api/v1 unless
// VITE_API_BASE is baked in at build time.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiBase = env.VITE_API_BASE || 'http://localhost:8787';

  return {
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: apiBase,
          changeOrigin: true,
        },
      },
    },
  };
});
