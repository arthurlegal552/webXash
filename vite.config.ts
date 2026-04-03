export default defineConfig({
  base: './', // ou remova a linha base
  plugins: [vue()],
  build: {
    outDir: 'dist' // garante que o dist vai para a raiz
  }
})