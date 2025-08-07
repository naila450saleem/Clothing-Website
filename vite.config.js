import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Clothing-Website/', // 👈 Add this line to fix blank page on GitHub Pages
})
