import { VersionDecoder } from './Version'
import * as T from 'io-ts'

export const decoder = T.type({
  id: T.string,
  name: T.string,
  description: T.string,
  type: T.union([T.literal('REST'), T.literal('HTTP')]),
  published: T.boolean,
  configured: T.boolean,
  versions: T.array(VersionDecoder),
  metrics: T.type({
    latency: T.number,
    uptime: T.number,
    requests: T.number,
    errors: T.number,
  }),
})

export type Service = T.TypeOf<typeof decoder>
