import { graphQLClient } from '../default'

export const setAccess = (token: string) => {
	graphQLClient.setHeader('authorization', `token ${token}`)
}