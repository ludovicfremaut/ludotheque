import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS()],
  server: {
    host: '0.0.0.0', // ← très important pour que le conteneur soit accessible
    port: 5173, // ← explicite même si optionnel
  },
})
