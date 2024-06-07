import { computed } from 'vue'
import { defineStore } from 'pinia'
import { assign } from 'lodash-es'

/**
 * Setting state
 */
export interface SettingState {
  /**
   * Control whether to show the logo.
   */
  logo: boolean
}

/**
 * Setting store.
 */
export const useSettingStore = defineStore('setting', () => {
  const setting = useStorage(`${APP_STORAGE_KEY}setting`, {
    logo: true,
  })

  const showLogo = computed(() => setting.value.logo)

  function updateSetting(_setting: SettingState) {
    setting.value = assign(setting.value, _setting)
  }

  return { setting, showLogo, updateSetting }
})
