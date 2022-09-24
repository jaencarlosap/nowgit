import {
	Card,
	ItemPullRequest,
	Icons
} from "components"
import { InfoPrProps } from "interfaces/infoPr"

export const ItemRepositorie = ({ data }: { data: InfoPrProps }) => {
	const repository = data.repository
	const urlRepo = repository.url
	const pullRequests = repository.pullRequests.nodes.sort((a, b) => {
		return a.getTime() - b.getTime()
	})

	return (
		<div className="min-w-lg max-w-lg w-full">
			<Card className="m-2 p-3 ">
				<h5 className="text-3xl font-bold tracking-tight text-gray-900">
					<span className="block text-blue-600 xl:inline">{data.ownerRepo} / </span>
					<span className="block xl:inline">{data.nameRepo}</span>
				</h5>
				<div className="p-4 mb-3">
					{pullRequests.map((pullRequest, indexPr) => {
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
				<div className="flex space-x-4 justify-between">
					<a
						href={urlRepo}
						target="_blank"
						className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:outline-none hover:bg-slate-800"
					>
						Go to repositorie
						<Icons name="ArrowRight" />
					</a>
				</div>
			</Card>
		</div>
	)
}
