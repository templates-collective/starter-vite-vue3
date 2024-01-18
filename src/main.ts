import '@/styles/main.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import { setupVueRouter } from '@/plugins/vue-router'
import { setupVueI18n } from '@/plugins/vue-i18n'
import { setupPinia } from '@/plugins/pinia'

import App from '@/app.vue'

const app = createApp(App)

async function bootstrap() {
  setupPinia(app)
  setupVueI18n(app)
  setupVueRouter(app)

  app.mount('#app')
}

bootstrap()
