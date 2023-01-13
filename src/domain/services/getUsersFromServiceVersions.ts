import { Service, User } from '@/api/response'
import { filter, get, map, negate, isUndefined } from 'lodash/fp'

/**
 * Get the users from the service versions, sorted by the most recently updated version.
 * @param versions - Service['versions']
 * @returns An array of users
 */

export const getUsersFromServiceVersions = (versions: Service['versions']): User[] => {
  const sortedVersions = versions.sort((a, b) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  })
  return filter(negate(isUndefined))(map(get('developer'), sortedVersions))
}
