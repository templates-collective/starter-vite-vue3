import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { assign } from 'lodash-es'

/**
 * Request hook for axios.
 *
 * @see https://axios-http.com/docs/req_config
 * @param config
 * @param interceptors
 */
export function useRequest(config?: AxiosRequestConfig, interceptors?: {
  request?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  response?: (config: AxiosResponse) => AxiosResponse
}) {
  const request = axios.create(assign({
    baseURL: import.meta.env.VITE_APP_REQUEST_URL,
    timeout: 1000 * 10,
    headers: {
      'Content-Type': ContentTypeEnum.JSON,
    },
  }, config))

  const interceptorsRequest = (config: InternalAxiosRequestConfig) => {
    const timestamp = new Date().getTime()
    config.headers['X-Timestamp'] = timestamp
    config.params = assign({}, config.params, { _t: timestamp })

    return config
  }

  const interceptorsResponse = (response: AxiosResponse) => {
    if (response.status === 200) {
      return response
    }
    return Promise.reject(response)
  }

  request.interceptors.request.use(interceptors?.request || interceptorsRequest)

  request.interceptors.response.use(interceptors?.response || interceptorsResponse)

  return {
    request,
    interceptorsRequest,
    interceptorsResponse,
  }
}
