import { defineStore } from 'pinia'

/**
 * Layout store.
 */
export const useLayoutStore = defineStore('layout', () => {
  const headerLogo = useStorage(`${APP_STORAGE_KEY}-layout`, true)

  function toggleLogo() {
    headerLogo.value = !headerLogo.value
  }

  return { headerLogo, toggleLogo }
})
