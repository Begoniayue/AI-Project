import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/*ele*/
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
/*自定义主题*/
import path from 'path'
import autoCreateApi from 'auto-create-api/rollup'
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/css/element.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    autoCreateApi(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 自定义样式文件
      resolvers: [ElementPlusResolver({ importStyle: "sass"})],
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://ai.justeasy.cn',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // 代理 websockets 或 socket.io 写法：ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      // '/socket.io': {
      //   target: 'ws://localhost:5174',
      //   ws: true,
      // },
    },
  },
})
