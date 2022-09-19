import React, { useEffect, useState } from "react"
import Router from 'next/router'
import {
	ItemRepositorie,
	SelectField,
	SelectFieldProps
} from "components"
import { InfoPrProps, MainPrProps } from "interfaces/infoPr"
import { getInfoPr } from "services"

const Dashboard = () => {
	const [selectData, setSelectData] = useState<SelectFieldProps['options']>([])
	const [listRepos, setListRepos] = useState<InfoPrProps[]>([])

	const handleSaveParams = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const target = event.target as HTMLFormElement
		const repositorieValue = target.repositorie.value.split('/')
		const dataToQuery = { ownerRepo: repositorieValue[0], nameRepo: repositorieValue[1] }
		const { repository } = await getDataToList(dataToQuery)
		target.repositorie.value = ''
		const prevLocal = JSON.parse(localStorage.getItem('repositories') || '[]')
		localStorage.setItem('repositories', JSON.stringify([...prevLocal, dataToQuery]))
		setListRepos((beforeList) => ([
			...beforeList,
			{
				...dataToQuery,
				repository
			}
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
			const selectData = repositories?.viewer?.repositories?.nodes?.map(({ nameWithOwner }: { nameWithOwner: string }) => {
				return { value: nameWithOwner, label: nameWithOwner }
			})
			setSelectData(selectData)
		}

		handleGetData()
	}, [])

	return (
		<div className="flex w-full flex-1 flex-col px-10">
			<form className="flex space-x-5" onSubmit={handleSaveParams}>
				<SelectField label="Select one repositorie" name="repositorie" options={selectData} />
				<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
					Add
				</button>
			</form>
			<section className="flex flex-wrap">
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