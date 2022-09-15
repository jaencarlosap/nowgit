export interface MainPrProps {
	ownerRepo: string;
	nameRepo: string;
}
export interface InfoPrProps extends MainPrProps {
	repository: Repository;
}

export interface Repository {
	url: string;
	name: string;
	pullRequests: PullRequests;
}

export interface PullRequests {
	nodes: any[];
}
