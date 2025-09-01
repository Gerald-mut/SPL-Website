import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
      visualizer({
      filename: './dist/bundle-stats.html', 
      open: true,
      })
  ],
  optimizeDeps: {
    include: [
      'antd/es/button',
      'antd/es/form',
      'antd/es/input',
      'antd/es/modal'
    ]
  },
  css: {
    postcss: './postcss.config.js',  
  },
})





