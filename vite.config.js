import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 
  build: {
    rollupOptions: {
    
      external: ["react-dom", "react-router-dom"],
      output: {
        
        globals: {
          
          "react-dom": "react-dom",
          "react-router-dom": "react-router-dom"
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  // build: {
  //   rollupOptions: {
  //     external: ['react-router-dom']
  //   }
  // }
})



