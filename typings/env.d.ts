/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string
  readonly VITE_APP_REQUEST_URL: string
  readonly VITE_APP_REQUEST_URL_PROXY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
