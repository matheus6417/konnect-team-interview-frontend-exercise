import type { Service } from '@/api/response'
import axios, { AxiosResponse } from 'axios'
import { useAxios, StrictUseAxiosReturn } from '@vueuse/integrations/useAxios'

type apiReturn<T> = StrictUseAxiosReturn<T, AxiosResponse<T>, unknown>

const instance = axios.create({
  baseURL: '/api',
})

const client = (endpoint: string) => {
  return useAxios(endpoint, instance, { immediate: false })
}

interface Api {
  services: {
    list: (query?: string) => apiReturn<Service[]>
    get: (id: string) => apiReturn<Service>
  }
}

export const useApi: Api = {
  services: {
    list: (query?: string) => client(`/services${query ? `?q=${query}` : ''}`),
    get: (id: string) => client(`/service/${id}`),
  },
}
