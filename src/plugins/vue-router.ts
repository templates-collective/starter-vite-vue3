import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import { routes } from '../routes'

export function setupVueRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })
  app.use(router)
}
