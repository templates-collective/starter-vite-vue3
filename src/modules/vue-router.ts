import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes as autoRoutes } from 'vue-router/auto/routes'
import NProgress from 'nprogress'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: () => {
    return setupLayouts(autoRoutes)
  },
})

router.beforeEach((to, from) => {
  if (to.path !== from.path)
    NProgress.start()
})

router.afterEach((to) => {
  const { setTitle } = useI18nTitle()
  if (to.meta.locale)
    setTitle(to.meta.locale)
  else if (to.meta.title)
    setTitle(to.meta.title, false)

  NProgress.done()
})

export default router
