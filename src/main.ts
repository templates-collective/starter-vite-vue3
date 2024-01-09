import './styles/main.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import { setupPinia } from './plugins/pinia'
import { setupVueRouter } from './plugins/vue-router'

import App from './app.vue'

const app = createApp(App)

setupVueRouter(app)
setupPinia(app)

app.mount('#app')
