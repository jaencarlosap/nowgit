import {
	Card,
	ItemPullRequest,
	Icons
} from 'components'
import { InfoPrProps } from 'interfaces/infoPr'

export interface ItemRepositorieProps {
	data: InfoPrProps;
	handleDelete: () => void;
}

export const ItemRepositorie = ({ data, handleDelete }: ItemRepositorieProps) => {
	const repository = data.repository
	const urlRepo = repository?.url || ''
	const pullRequests = repository?.pullRequests?.nodes?.sort((a, b) => {
		return a.getTime() - b.getTime()
	})

	return (
		<div className="min-w-lg w-full">
			<div className="m-2 p-3 ">
				<a
					href={urlRepo}
					target="_blank"
					rel="noreferrer"
					className="inline-flex rounded-lg hover:bg-slate-200 p-2"
				>
					<h5 className="text-3xl font-bold tracking-tight text-gray-900">
						<span className="block text-blue-600 xl:inline">{data.ownerRepo} / </span>
						<span className="block xl:inline">{data.nameRepo}</span>
					</h5>
				</a>
				<div className="p-4 mb-3">
					{(!repository || pullRequests?.length == 0) && (
						<p className='text-2xl font-bold text-gray-300 hover:text-gray-400'>
							Currently, this repository dont have pull request with pending status 🥹 🎉
						</p>
					)}
					{pullRequests?.map((pullRequest, indexPr) => {
						return (
							<ItemPullRequest
								key={indexPr}
								title={pullRequest.title}
								author={pullRequest.author.login}
								reviewThreads={pullRequest.reviewThreads.nodes}
								mergeStatus={pullRequest.mergeable}
								isDraft={pullRequest.isDraft}
							/>
						)
					})}
				</div>
				{/* options */}
				<div>
					<div className='w-max rounded-full	hover:bg-red-200 p-2' onClick={handleDelete} >
						<Icons name='Delete' />
					</div>
				</div>
			</div>
			<hr />
		</div>
	)
}
