/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

interface ImportMetaEnv {
  readonly VITE_BASE: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_REQUEST_URL: string
  readonly VITE_APP_REQUEST_URL_PROXY: string
  readonly VITE_APP_SOCKET_URL: string
  readonly VITE_APP_SOCKET_URL_PROXY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
