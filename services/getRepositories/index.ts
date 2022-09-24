import { graphQLClient } from "../default";
import { query } from "./query";

export const getRepositories = async (): Promise<unknown> => {
	try {
		return await graphQLClient.request(query);
	} catch (error) {
		return { error }
	}
}