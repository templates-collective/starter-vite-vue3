import { i18n } from '@/modules/vue-i18n'

export function useI18nTitle() {
  const title = useTitle()

  const setTitle = (locale: string, isKey: boolean = true) => {
    const t = isKey ? i18n.global.t(locale) : locale

    title.value = t === i18n.global.t('app.title') ? t : `${t} | ${i18n.global.t('app.title')}`
  }

  return { title, setTitle }
}
