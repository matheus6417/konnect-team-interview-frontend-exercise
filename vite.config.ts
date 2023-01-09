/// <reference types="vitest" />
import path from 'path'
import dns from 'dns'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'
// You can set dns.setDefaultResultOrder('verbatim') to disable the reordering behavior. Vite will then print the address as localhost
// https://vitejs.dev/config/server-options.html#server-host
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss(),

    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
          reactivityTransform: true,
        }),
      },
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      // include files from any folder under `src/components/`
      dirs: ['src/components', 'src/components/*'],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    port: 5001,
    proxy: {
      '/api': 'http://localhost:4001',
    },
  },
  test: {
    globals: true,
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
    environment: 'jsdom',
    include: ['./src/**/*.{test,spec}.{js,ts}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
