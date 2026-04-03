import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'node:path';

export default defineConfig({
  base: './', // <<< aqui, usar './' ou remover a linha
  plugins: [vue()],
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
    },
  },
});