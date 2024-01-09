import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

export async function setupVueI18n(app: App) {
  const i18n = createI18n({
    legacy: false,
    fallbackLocale: 'en',
    messages,
  })

  app.use(i18n)
}
