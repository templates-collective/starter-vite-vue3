import { version } from '../../package.json'

/**
 * The key of the application.
 */
export const APP_KEY = 'opuntia'

/**
 * The version of the application.
 */
export const APP_VERSION = version

/**
 * The storage key of the application.
 */
export const APP_STORAGE_KEY = `${APP_KEY}-v${APP_VERSION}-`
