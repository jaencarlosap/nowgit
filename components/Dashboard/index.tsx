import React, { useEffect, useState } from 'react'
import {
	Icons,
	ItemRepositorie,
	SelectField,
	SelectRepositorie
} from 'components'
import { InfoPrProps, MainPrProps } from 'interfaces/infoPr'

export const Dashboard = () => {
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
		setListRepos((prevList) => [
			...prevList,
			{ ...dataToQuery, repository }
		])
	}

	const getDataToList = async ({ ownerRepo, nameRepo }: MainPrProps) => {
		const params = new URLSearchParams({ owner: ownerRepo, name: nameRepo })
		const query = await fetch(`/api/github/getRepositorie?${params}`)
		return await query.json()
	}

	const handleDeleteRepoList = (name: string) => {
		const repositoriesSaved = JSON.parse(localStorage.getItem('repositories') || '[]')
		const newRepositorieList = repositoriesSaved.filter(({ nameRepo = '' }) => nameRepo !== name)
		localStorage.setItem('repositories', JSON.stringify(newRepositorieList))
		setListRepos(newRepositorieList)
	}

	useEffect(() => {
		const handleGetEeachRepositorie = async () => {
			let newList = []
			const repositoriesSaved = JSON.parse(localStorage.getItem('repositories') || '[]')
			for (const selectedOption of repositoriesSaved) {
				const { repository } = await getDataToList(selectedOption)
				newList.push({ ...selectedOption, repository })
			}
			setListRepos(newList)
		}

		const handleGetData = async () => {
			const query = await fetch('/api/github/getRepositories')
			const repositories = await query.json()
			const Data = repositories?.viewer?.repositories?.nodes?.map(({ nameWithOwner }: { nameWithOwner: string }) => {
				return { value: nameWithOwner, label: nameWithOwner }
			})
			setSelectData(Data)
		}

		handleGetEeachRepositorie()
		handleGetData()
	}, [])

	return (
		<div className="flex w-full flex-1 flex-col px-10">
			<div className="flex space-x-5 mb-4 items-end">
				<SelectField
					isSearchable
					options={selectData}
					placeholder="Select one repositorie"
					value={selectedOption}
					onChange={setSelectedOption}
				/>
				<button
					className="fill-white focus:outline-none rounded-full p-2 md:mr-0 bg-blue-600 hover:bg-blue-700"
					onClick={handleSaveParams}
				>
					<Icons name="Add" />
				</button>
			</div>
			<section className="flex flex-wrap">
				{listRepos.length === 0 && <SelectRepositorie />}
				{listRepos.map((repo, index) => {
					return (
						<ItemRepositorie
							key={index}
							data={repo}
							handleDelete={() => handleDeleteRepoList(repo.nameRepo)}
						/>
					)
				})}
			</section>
		</div >
	)
}