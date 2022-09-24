export interface ItemPullRequestProps {
	title: string;
	author: string;
	mergeStatus: string;
	reviewThreads: unknown[];
	isDraft: Boolean;
}

export const ItemPullRequest = ({
	title,
	author,
	reviewThreads,
	mergeStatus,
	isDraft
}: ItemPullRequestProps) => {
	const isReadyToMerge = mergeStatus === 'MERGEABLE'
	const colorToStatusMerge = isReadyToMerge ? 'text-green-400' : 'text-red-400'
	const hasCommentsUnResolve = (reviewThreads as { isResolved: Boolean }[]).filter(review => !review.isResolved).length
	const colorToStatusComments = hasCommentsUnResolve === 0 ? 'text-green-400' : 'text-orange-400'

	return (
		<div className="pb-2 divide-y divide-y-reverse divide-slate-400 w-auto">
			<h5 className="text-1xl font-bold tracking-tight text-gray-900">
				{isDraft &&
					<span className="block text-zinc-400 xl:inline">Draft - </span>
				}
				<span className="block text-blue-500 xl:inline">{author} / </span>
				<span className="block xl:inline">{title}</span>
			</h5>
			<div className="px-4 pb-2 flex justify-around">
				<span>Reviews: {reviewThreads?.length || 0}</span>
				<span>Comments: <span className={`font-bold ${colorToStatusComments}`}>{hasCommentsUnResolve || 0}</span></span>
				<span>Status: <span className={`font-bold ${colorToStatusMerge}`}>{mergeStatus}</span></span>
			</div>
		</div>
	)
}