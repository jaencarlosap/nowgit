import React, { useEffect, useState } from 'react'
import {
	Icons,
	ItemRepositorie,
	SelectField
} from 'components'
import { InfoPrProps, MainPrProps } from 'interfaces/infoPr'

const Dashboard = () => {
	const [selectData, setSelectData] = useState<{ value: string; label: string; }[]>([])
	const [listRepos, setListRepos] = useState<InfoPrProps[]>([])
	const [selectedOption, setSelectedOption] = useState<unknown>(null)

	const handleSaveParams = async () => {
		if (!selectedOption) return null
		const repositorieValue = (selectedOption as { value: string; }).value.split('/')
		const dataToQuery = { ownerRepo: repositorieValue[0], nameRepo: repositorieValue[1] }
		const { repository } = await getDataToList(dataToQuery)
		const prevLocal = JSON.parse(localStorage.getItem('repositories') || '[]')
		localStorage.setItem('repositories', JSON.stringify([...prevLocal, dataToQuery]))
		setSelectedOption(null)
		setListRepos((beforeList) => ([
			...beforeList,
			{ ...dataToQuery, repository }
		]))
	}

	const getDataToList = async ({ ownerRepo, nameRepo }: MainPrProps) => {
		return await (await fetch('/api/github/getRepositorie?' + new URLSearchParams({
			owner: ownerRepo,
			name: nameRepo
		}))).json()
	}

	useEffect(() => {
		const handleGetData = async () => {
			const repositories = await (await fetch('/api/github/getRepositories')).json()
			const Data = repositories?.viewer?.repositories?.nodes?.map(({ nameWithOwner }: { nameWithOwner: string }) => {
				return { value: nameWithOwner, label: nameWithOwner }
			})
			let newList = []
			const repositoriesSaved = JSON.parse(localStorage.getItem('repositories') || '[]')
			for (const selectedOption of repositoriesSaved) {
				const { repository } = await getDataToList(selectedOption)
				newList.push({ ...selectedOption, repository })
			}
			setListRepos(newList)
			setSelectData(Data)
		}

		handleGetData()
	}, [])

	return (
		<div className="flex w-full flex-1 flex-col px-10">
			<div className="flex space-x-5 w-1/3 mb-4 items-end">
				<SelectField
					isSearchable
					placeholder="Select one repositorie"
					onChange={setSelectedOption}
					options={selectData}
				/>
				<button
					className="fill-white focus:outline-none rounded-full p-2 md:mr-0 bg-blue-600 hover:bg-blue-700"
					onClick={handleSaveParams}
				>
					<Icons name="Add" />
				</button>
			</div>
			<section className="flex flex-wrap justify-center">
				{listRepos.length === 0 && (
					<div className="flex-row w-full p-6 text-center">
						<p className="text-4xl font-bold text-blue-400 hover:text-blue-700">
							Select your favorite repositories
						</p>
						<p className="text-neutral-400 text-2lg ">
							Remember that your current selection will be saved locally, but this will be temporary 😉
						</p>
						<p className="text-4xl"> 🚀 🌝 </p>
					</div>
				)}
				{listRepos.map((repo, index) => {
					return <ItemRepositorie data={repo} key={index} />
				})}
			</section>
		</div >
	)
}

export default Dashboard