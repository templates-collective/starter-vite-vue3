import { createPinia } from 'pinia'
import type { App } from 'vue'

export function setupPinia(app: App) {
  const pinia = createPinia()
  app.use(pinia)
}

export default setupPinia
