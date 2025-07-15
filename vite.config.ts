import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    host: true,
    port: 8080, // or remove this line if using dynamic $PORT
    allowedHosts: ['getitmachined-lp-dev.up.railway.app'],
  },
});
