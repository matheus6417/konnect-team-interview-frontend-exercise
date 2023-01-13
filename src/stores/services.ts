import { Service } from '@/api/response/'
import { defineStore } from 'pinia'

export interface State {
  services: Service[]
  searchTerm: string
  currentPageNumber: number
  currentPageItems: Service[]
}
export const useServicesStore = defineStore({
  id: 'servicesStore',
  state: (): State => ({
    services: [],
    searchTerm: '',
    currentPageNumber: 1,
    currentPageItems: [],
  }),
  getters: {
    getServices: (state: State): Service[] => state.services,
    getServiceById: (state: State) => (id: string): Service | undefined => state.services.find((service) => service.id === id),
  },
  actions: {
    setServices(services: Service[]) {
      this.services = services
    },
    setSearchTerm(searchTerm: string) {
      this.searchTerm = searchTerm
    },
    setCurrentPageItems(currentPageItems: Service[]) {
      this.currentPageItems = currentPageItems
    },
    setCurrentPageNumber(currentPageNumber: number) {
      this.currentPageNumber = currentPageNumber
    },
  },
})
