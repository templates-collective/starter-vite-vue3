import { resolve } from 'node:path'
import { cwd } from 'node:process'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'
import VueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts'

export default defineConfig(({ mode }) => {
  // Load env variables.
  const env = loadEnv(mode, cwd(), '')

  // Manual chunks.
  const chunks: string[] = ['axios', 'nprogress']

  return {
    base: env.VITE_APP_BASE_URL || '/',
    server: {
      host: true,
      port: 9865,
      // Proxy request and socket.
      // https://vitejs.dev/config/server-options.html#server-proxy
      proxy: {
        [env.VITE_PUBLIC_REQUEST_URL]: {
          target: env.VITE_PUBLIC_REQUEST_URL_PROXY,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(new RegExp(`^${env.VITE_PUBLIC_REQUEST_URL}`), ''),
        },
      },
    },
    preview: {
      host: true,
      port: 9865,
    },
    resolve: {
      alias: {
        // Alias for path.
        // https://vitejs.dev/config/shared-options.html#resolve-alias
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
          'pinia',
        ],
        dts: 'typings/auto-imports.d.ts',
        dirs: [
          'src/apis/**/*',
          'src/composables/**/*',
          'src/constants/**/*',
          'src/stores/**/*',
          'src/utils/**/*',
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
        include: [resolve(__dirname, 'src/locales/**')],
      }),

      // Vite compression plugin.
      // https://github.com/vbenjs/vite-plugin-compression
      viteCompression(),
    ],

    // Vitest config.
    // https://github.com/vitest-dev/vitest
    test: {
      include: ['tests/**/*'],
      environment: 'jsdom',
    },

    // Vite build config.
    // https://rollupjs.org/
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          // https://rollupjs.org/configuration-options/#output-manualchunks
          manualChunks: (id: string) => {
            return chunks.find(chunk => id.includes(chunk))
          },
        },
      },
    },
  }
})
