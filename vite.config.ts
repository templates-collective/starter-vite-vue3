import { URL, fileURLToPath } from 'node:url'
import { type ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

export default (options: ConfigEnv) => {
  const { mode } = options

  const envDir = 'env/'

  const env = loadEnv(mode, envDir, ['VITE_', 'APP_', 'AXIOS_'])

  return defineConfig({
    base: env.VITE_BASE_URL,
    envDir,
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  })
}
