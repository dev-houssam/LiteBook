
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: "src/ui",
  build: {
    outDir: "../../dist"
  },
  server: {
    port: 9955
  }
})
