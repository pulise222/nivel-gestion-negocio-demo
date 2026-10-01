import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Demo: no hay servidor. Con «base: './'» los archivos se piden con rutas relativas,
// así funciona igual en https://usuario.github.io/nivel-demo/ que en cualquier otra carpeta.
// (El archivo .env fija VITE_MODO=demo: datos de ejemplo en memoria.)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
