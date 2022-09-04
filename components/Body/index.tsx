import {
	getAccess,
	getInfoPr,
	setAccess
} from "../../services"
import { TextField } from "../TextField"

export const Body = () => {
	const initData = async () => {
		const { repository } = await getInfoPr({
			owner: 'syseuintegradas',
			name: 'Nomina-Front'
		})
		console.log({ repository })
	}


	const handleApplyToken = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const target = event.target as HTMLFormElement
		setAccess(target.token.value)
	}

	const handleGetInfo = () => {
		const token = getAccess()
		if (token) initData()
	}

	return (
		<main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
			<h1 className="text-6xl font-bold">
				Welcome to Nowgit
			</h1>

			<p className="mt-3 text-2xl">
				To start displaying the status of your repositories, please paste your temporal key
			</p>
			<p className="mt-3 text-slate-400  hover:text-sky-400">
				Remember that this data is not saved on any server and run only in your local navigator
			</p>

			<div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
				<form className="flex space-x-5" onSubmit={handleApplyToken}>
					<TextField
						name="token"
						label="Github token"
						type="password"
					/>
					<button className="rounded-lg border-solid border-2 p-2">Apply</button>
				</form>
				<button className="rounded-lg border-solid border-2 p-2" onClick={handleGetInfo}>Get info</button>
			</div >
		</main >
	)
}
