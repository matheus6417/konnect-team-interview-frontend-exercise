import { isService } from '../isService'

const service1 = {
  id: 'a1842357-75fb-4cf7-8af1-06c9c6469e14',
  name: 'Oriental Cotton Cheese',
  description: 'Reactive non-volatile intranet',
  type: 'REST',
  published: false,
  configured: true,
  versions: [
    {
      id: '56644ce1-eb34-45da-bffd-42ca3ba9d9ca',
      name: '4.4.9',
      description: 'Networked global neural-net',
      updated_at: '2022-07-11T20:43:12.548Z',
    },
    {
      id: '24c945d3-e9e9-4e81-b9c3-b4bea32f3067',
      name: '5.8.7',
      description:
        'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      updated_at: '2022-08-22T12:12:19.598Z',
    },
  ],
  metrics: {
    latency: 0.59,
    uptime: 0.8992,
    requests: 175825,
    errors: 0.0053,
  },
}

const randomObject = {
  id: 'a1842357-75fb-4cf7-8af1-06c9c6469e14',
  desc: 'Oriental Cotton Cheese',
  type: 'CHILL',
}

describe('isService', () => {
  it.each<[unknown, boolean]>([
    [{}, false],
    [null, false],
    [undefined, false],
    [service1, true],
    [randomObject, false],
  ])('%s should return %s', (value, expected) => {
    expect(isService(value)).toBe(expected)
  })
})
