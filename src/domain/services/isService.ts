import { Service, decoder } from '@/api/response/Service'

export const isService = (data: unknown): data is Service => {
  return decoder.is(data)
}
