import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://shopease-1-2pxd.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
