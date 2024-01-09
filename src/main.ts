import './styles/main.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import { setupPinia } from './plugins/pinia'
import { setupVueRouter } from './plugins/vue-router'

import App from './app.vue'
import { setupVueI18n } from './plugins/vue-i18n'

const app = createApp(App)

async function bootstrap() {
  setupPinia(app)
  setupVueI18n(app)
  setupVueRouter(app)

  app.mount('#app')
}

bootstrap()
