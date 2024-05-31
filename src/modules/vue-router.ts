import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes as autoRoutes } from 'vue-router/auto/routes'
import NProgress from 'nprogress'

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  extendRoutes: () => {
    return setupLayouts(autoRoutes)
  },
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach((to) => {
  const { setLocaleTitle } = useLocale()
  if (to.meta.locale)
    setLocaleTitle(to.meta.locale)
  else if (to.meta.title)
    setLocaleTitle(to.meta.title, false)
  else
    setLocaleTitle()

  NProgress.done()
})

export default router
