/**
 * Dark mode composable
 *
 * @see https://vueuse.org/core/useDark/
 */
export const isDark = useDark()

/**
 * Toggle dark mode
 *
 * @see https://vueuse.org/shared/useToggle/
 */
export const toggleDark = useToggle(isDark)

/**
 * Preferred dark mode
 *
 * @see https://vueuse.org/core/usePreferredDark/
 */
export const preferredDark = usePreferredDark()
