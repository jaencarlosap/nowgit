import { graphQLClient } from "../default"

export const getAccess = () => {
	return graphQLClient?.['options']?.['headers']?.['authorization'] || ''
}