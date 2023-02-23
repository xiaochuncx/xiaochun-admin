import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';
import ViteRestart from 'vite-plugin-restart' // 通过监听vite.config.js 和 .env.development 文件修改，自动重启 vite 服务。
import path from 'path';

import Components from 'unplugin-vue-components/vite' // 组件自动按需导入。
// ui库解析器，也可以自定义，需要安装相关UI库，unplugin-vue-components/resolvers
// 提供了以下集中解析器，使用的时候，需要安装对应的UI库，这里以TDesign示例
// 注释的是包含的其他一些常用组件库，供参考
import {
  // ElementPlusResolver,
  // AntDesignVueResolver,
  // VantResolver,
  // HeadlessUiResolver,
  // ElementUiResolver
  TDesignResolver,
} from 'unplugin-vue-components/resolvers'

export default defineConfig(({command, mode, ssrBuild}) => {
  return {
    base:'./',
    resolve:{
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@assets":path.resolve(__dirname, "./assets"),
      },
    },
    plugins:[
      vue(),
      svgLoader(),
      ViteRestart({
        restart: [
          'my.config.[jt]s', 
        ]
      }),
      Components({
        dirs: ['src/components'], // 目标文件夹
        extensions: ['vue','jsx'], // 文件类型
        dts: 'src/components.d.ts', // 输出文件，里面都是一些import的组件键值对
        // ui库解析器，也可以自定义，需要安装相关UI库
        resolvers: [
          TDesignResolver({library:'vue-next'}),
          // VantResolver(),
          // ElementPlusResolver(),
          // AntDesignVueResolver(),
          // HeadlessUiResolver(),
          // ElementUiResolver()
        ],
      }),
    ],
    server: {
      port: 0003,
      host: "0.0.0.0",
      proxy: {
        "/api": "http://127.0.0.1:3000/",
      },
    },
  }
})
