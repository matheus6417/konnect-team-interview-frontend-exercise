import * as T from 'io-ts'
import { UserDecoder } from './User'

export const VersionDecoder = T.intersection([
  T.type({
    id: T.string,
    name: T.string,
    description: T.string,
    updated_at: T.string,
  }),
  T.partial({
    developer: UserDecoder,
  }),
])

export type Version = T.TypeOf<typeof VersionDecoder>
