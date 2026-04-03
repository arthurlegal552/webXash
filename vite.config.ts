import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',       // garante que funciona direto no root
  build: {
    outDir: 'dist'  // sempre gera o dist na raiz
  }
})