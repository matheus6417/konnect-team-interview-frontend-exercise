import * as T from 'io-ts'

export const UserDecoder = T.type({
  id: T.string,
  name: T.string,
  email: T.string,
  avatar: T.string,
})

export type User = T.TypeOf<typeof UserDecoder>
