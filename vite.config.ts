import { URL, fileURLToPath } from 'node:url'
import { type ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default (options: ConfigEnv) => {
  const { mode } = options

  const envDir = 'env/'

  const env = loadEnv(mode, envDir, ['VITE_', 'APP_', 'AXIOS_'])

  return defineConfig({
    base: env.VITE_BASE_URL,
    envDir,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),

      // Vue Develop Tools.
      // FIXME: Wait for the latest release.
      // https://github.com/webfansplz/vite-plugin-vue-devtools
      VueDevTools(),

      // https://github.com/unplugin/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
        ],
        dts: 'types/auto-imports.d.ts',
        dirs: [
          'src/composables',
          'src/stores',
        ],
        vueTemplate: true,
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'types/components.d.ts',
      }),
    ],

    // Vitest Configuration.
    // https://github.com/vitest-dev/vitest
    test: {
      include: ['test/**/*.test.ts'],
      environment: 'jsdom',
    },
  })
}
