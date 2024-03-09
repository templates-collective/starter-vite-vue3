import 'vue-router'

declare module 'vue-router'{
  import type { RouteRecordRaw } from 'vue-router'

  interface RouteMeta {
    title?: string
    locale?: string
  }
}
