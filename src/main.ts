import '@unocss/reset/tailwind.css'
import '@/styles/main.css'
import 'virtual:uno.css'

import { createApp } from 'vue'

import App from '@/app.vue'

const app = createApp(App)

async function bootstrap() {
  for (const [, fn] of Object.entries(import.meta.glob('./modules/*.ts'))) {
    const module = (await fn() as any).default
    app.use(module)
  }
  app.mount('#app')
}

bootstrap()
