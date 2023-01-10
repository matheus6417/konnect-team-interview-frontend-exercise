import type { Service } from './response/Service'

const client = {
  get: async (endpoint: string) => {
    const res = await fetch(`${endpoint}`)
    return res.json()
  },
}

export interface IApi {
  services: {
    list: () => Promise<Service[]>
    get: (id: string) => Promise<Service>
  }
}

export const api: IApi = {
  services: {
    list: () => client.get('/api/services'),
    get: (id: string) => client.get(`/api/service/${id}`),
  },
}
