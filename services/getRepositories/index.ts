import { graphQLClient } from "../default";
import { query } from "./query";

export const getRepositories = async (): Promise<unknown> => {
	return await graphQLClient.request(query);
}