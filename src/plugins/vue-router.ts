import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes as autoRoutes } from 'vue-router/auto/routes'
import type { App } from 'vue'

export function setupVueRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    extendRoutes: () => {
      return setupLayouts(autoRoutes)
    },
  })
  app.use(router)
}

export default setupVueRouter
