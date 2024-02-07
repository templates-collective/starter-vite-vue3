import '@unocss/reset/tailwind.css'
import '@/styles/main.css'
import 'virtual:uno.css'

import { type Plugin, createApp } from 'vue'

import App from '@/app.vue'

const app = createApp(App)

for (const [, module] of Object.entries<{ default: Plugin }>(import.meta.glob('./modules/*.ts', { eager: true })))
  app.use(module.default)

app.mount('#app')
