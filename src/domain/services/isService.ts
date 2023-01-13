import { Service, decoder } from '@/api/response'

/**
 * It takes a value and returns true if the value is a Service, and false otherwise
 * @param {unknown} data - unknown - the data to be decoded
 * @returns Boolean, True if the data is a Service, false otherwise
 */

export const isService = (data: unknown): data is Service => {
  return decoder.is(data)
}
