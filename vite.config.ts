import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Layouts from 'vite-plugin-vue-layouts'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// Vite config.
// https://vitejs.dev
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, cwd(), '')

  return {
    base: env.VITE_BASE_URL,
    server: {
      host: true,
      port: 1977,
      proxy: command === 'serve' && (env.VITE_APP_REQUEST_PROXY_URL || env.VITE_APP_SOCKET_PROXY_URL)
        ? {
            [env.VITE_APP_REQUEST_URL]: {
              target: env.VITE_APP_REQUEST_PROXY_URL,
              changeOrigin: true,
              rewrite: (path: string) => path.replace(new RegExp(`^${env.VITE_APP_REQUEST_PROXY_URL}`), ''),
            },
            [env.VITE_APP_SOCKET_URL]: {
              target: env.VITE_APP_SOCKET_PROXY_URL,
              ws: true,
              rewrite: (path: string) => path.replace(new RegExp(`^${env.VITE_APP_SOCKET_PROXY_URL}`), ''),
            },
          }
        : {},
    },
    preview: {
      host: true,
      port: 1977,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    plugins: [
      // Vue & Jsx plugin.
      // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue
      // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx
      vue(),
      vueJsx(),

      // Vue layouts & pages plugin.
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      // https://github.com/posva/unplugin-vue-router
      Layouts(),
      VueRouter({
        dts: 'typings/vue-router.d.ts',
      }),

      // UnoCSS plugin, you can see uno.config.ts.
      UnoCSS(),

      // Vue dev tools.
      // https://github.com/webfansplz/vite-plugin-vue-devtools
      VueDevTools(),

      // Auto import api.
      // https://github.com/unplugin/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          VueRouterAutoImports,
          {
            // add any other imports you were relying on
            'vue-router/auto': ['useLink'],
          },
          'vue-i18n',
          '@vueuse/core',
        ],
        dts: 'typings/auto-imports.d.ts',
        dirs: [
          'src/composables',
          'src/stores',
          'src/utils',
        ],
        vueTemplate: true,
      }),

      // Auto registry components.
      // https://github.com/antfu/unplugin-vue-components
      Components({
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'typings/components.d.ts',
      }),

      // Auto import i18n locales.
      // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
        include: [resolve(__dirname, 'locales/**')],
      }),
    ],

    // Vitest config.
    // https://github.com/vitest-dev/vitest
    test: {
      include: ['tests/**/*'],
      environment: 'jsdom',
    },
  }
})
