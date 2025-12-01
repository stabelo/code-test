import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: resolve(dirname(fileURLToPath(import.meta.url)), 'target'),
  },
  envDir: 'config',
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
});
