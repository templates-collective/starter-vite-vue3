import '@unocss/reset/tailwind.css'
import '@/styles/main.css'
import 'virtual:uno.css'

import App from '@/App.vue'

const app = createApp(App)

installModules(app).mount('#app')
