import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'node:path';

export default defineConfig({
  base: './', // ou remova esta linha
  plugins: [vue()],
  build: {
    outDir: 'dist', // garante que o dist vai para a raiz
  },
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
    },
  },
});