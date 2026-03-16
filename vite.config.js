import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- Добавили импорт

export default defineConfig({
  plugins: [
    tailwindcss(), // <--- Добавили плагин
    react(),
  ],
})