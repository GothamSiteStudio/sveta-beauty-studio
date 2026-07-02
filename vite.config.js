import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from GitHub Pages at https://<user>.github.io/sveta-beauty-studio/
// so every asset must be resolved under that sub-path (base).
// https://vitejs.dev/config/
export default defineConfig({
  base: '/sveta-beauty-studio/',
  plugins: [react()],
})
