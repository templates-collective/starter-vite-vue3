export function useLanguage() {
  const { locale, messages } = useI18n()

  function toggleLocale(_locale?: string) {
    if (!_locale) {
      const locales = Object.keys(messages.value)
      _locale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
    }

    locale.value = _locale
  }

  return {
    toggleLocale,
  }
}
