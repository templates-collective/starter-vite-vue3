import App from '@/App.vue'
import '@unocss/reset/tailwind.css'
import '@/styles/main.css'

import 'virtual:uno.css'

const app = createApp(App)

installModules(app).mount('#app')
