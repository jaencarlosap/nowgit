export interface InfoPrProps {
	repository: Repository;
}

export interface Repository {
	pullRequest: PullRequest;
}

export interface PullRequest {
	commits: Comments;
	comments: Comments;
	reviews: Comments;
}

export interface Comments {
	edges: Edge[];
}

export interface Edge {
	node: Node;
}

export interface Node {
	commit: Commit;
}

export interface Commit {
	oid: string;
	message: string;
}
