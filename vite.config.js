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
})
