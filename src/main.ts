import '@unocss/reset/normalize.css'
import '@/styles/main.css'
import 'virtual:uno.css'

import { createApp } from 'vue'

import { setupVueRouter } from '@/modules/vue-router'
import { setupVueI18n } from '@/modules/vue-i18n'
import { setupPinia } from '@/modules/pinia'

import App from '@/app.vue'

const app = createApp(App)

async function bootstrap() {
  setupPinia(app)
  setupVueI18n(app)
  setupVueRouter(app)

  app.mount('#app')
}

bootstrap()
