import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sufi-front/',
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        start_url: '/',
        display: 'standalone',
      }
    })
],
build: {
  outDir: 'dist',
},
})
