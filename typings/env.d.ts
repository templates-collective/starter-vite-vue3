/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

interface ImportMetaEnv {
  readonly VITE_ENV_MODE: string
  readonly VITE_BASE_URL: string
  readonly FETCH_URL: string
  readonly FETCH_URL_PREFIX: string
  readonly APP_CONSOLE_OUTPUT: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
