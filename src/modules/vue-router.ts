import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes as autoRoutes } from 'vue-router/auto/routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: () => {
    return setupLayouts(autoRoutes)
  },
})

export default router
