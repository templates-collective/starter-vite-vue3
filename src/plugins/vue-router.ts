import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'

export const routes = setupLayouts(generatedRoutes)

export function setupVueRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })
  app.use(router)
}

export default setupVueRouter
