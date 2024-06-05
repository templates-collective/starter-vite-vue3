import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { assign } from 'lodash-es'

/**
 * Request hook for axios.
 *
 * @see https://axios-http.com/docs/req_config
 * @param config
 */
export function useRequest(config?: AxiosRequestConfig) {
  const request = axios.create(assign({
    baseURL: import.meta.env.VITE_APP_REQUEST_URL,
    timeout: 1000 * 10,
    headers: {
      'Content-Type': ContentTypeEnum.JSON,
    },
  }, config))

  request.interceptors.request.use((config) => {
    return config
  })

  return {
    request,
  }
}
