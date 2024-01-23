import { createFetch } from '@vueuse/core'

export const useAppFetch = createFetch({
  baseUrl: import.meta.env.VITE_FETCH_URL,
})
