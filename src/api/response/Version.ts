import * as T from 'io-ts'

const DeveloperDecoder = T.type({
  id: T.string,
  name: T.string,
  email: T.string,
  avatar: T.string,
})

export const VersionDecoder = T.intersection([
  T.type({
    id: T.string,
    name: T.string,
    description: T.string,
    updated_at: T.string,
  }),
  T.partial({
    developer: DeveloperDecoder,
  }),
])

export type Version = T.TypeOf<typeof VersionDecoder>
