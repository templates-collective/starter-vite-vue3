/**
 * Dark mode composable
 */
export const isDark = useDark()

/**
 * Toggle dark mode
 */
export const toggleDark = useToggle(isDark)

/**
 * Preferred dark mode
 */
export const preferredDark = usePreferredDark()
