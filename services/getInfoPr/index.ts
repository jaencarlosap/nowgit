import { InfoPrProps } from "../../interfaces/infoPr";
import { graphQLClient } from "../default";
import { query } from "./query";

export interface getInfoPrProps {
	owner: string;
	name: string;
}

export const getInfoPr = async (props: getInfoPrProps): Promise<InfoPrProps> => {
	return await graphQLClient.request(query, props);
}