import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Inspect(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/ // .md
      ],
      imports: ['react', 'react-router'],
      eslintrc: {
        enabled: true, // 若没此json文件，先开启，生成后在关闭
        filepath: './.eslintrc-auto-import.json', // 默认
        globalsPropValue: true
      },
      dirs: ['src/hooks'],
      vueTemplate: true
    })
  ]
})
