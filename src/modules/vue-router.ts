import NProgress from 'nprogress'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes as autoRoutes, handleHotUpdate } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes: setupLayouts(autoRoutes),
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach((to) => {
  const { setLocaleTitle } = useLocale()
  if (to.meta.locale)
    setLocaleTitle(to.meta.locale, true)
  else if (to.meta.title)
    setLocaleTitle(to.meta.title)
  else
    setLocaleTitle()

  NProgress.done()
})

export default router
