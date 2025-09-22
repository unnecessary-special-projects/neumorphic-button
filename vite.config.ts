import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/", // TODO 
      name: "Neumorphic Button",
      fileName: (format) => `neurmoprhic-button.${ format }.js` 
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom"
      ]
    }
  }
})
