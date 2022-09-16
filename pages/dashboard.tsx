import React, { useState } from "react"
import Router from 'next/router'
import { IncomingMessage } from "http"
import { getSession } from "next-auth/react"
import { ItemRepositorie, TextField } from "components"
import { getInfoPr, getAccess } from "services"
import { InfoPrProps, MainPrProps } from "interfaces/infoPr"

const Dashboard = () => {
	const test = [
		{
			"ownerRepo": "smu-chile",
			"nameRepo": "fe-browse-unimarc",
			"repository": {
				"url": "https://github.com/smu-chile/fe-browse-unimarc",
				"name": "fe-browse-unimarc",
				"pullRequests": {
					"nodes": [
						{
							"author": {
								"login": "Alain00"
							},
							"title": "feat: adding promotional modal to home",
							"isDraft": false,
							"mergeable": "MERGEABLE",
							"reviewThreads": {
								"nodes": [
									{
										"isResolved": true,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "jesuspoleosmu"
													},
													"bodyText": "@Alain00 leave all this\n\nOver useEffect, this kind of hooks always must go near the return of the component pls"
												}
											],
											"totalCount": 1
										}
									},
									{
										"isResolved": true,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "jesuspoleosmu"
													},
													"bodyText": "@Alain00 if file exists but doesn't have url the app will crash?"
												},
												{
													"author": {
														"login": "Alain00"
													},
													"bodyText": "@jesuspoleosmu file prop for an asset is required, and a file always have an url. https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/assets/assets-collection"
												}
											],
											"totalCount": 2
										}
									},
									{
										"isResolved": false,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "jesuspoleosmu"
													},
													"bodyText": "@Alain00 why this modal is married with the FE? the MODAL's PKGC doesnt fit to your needs? remember that in the future this kind of modals would be used on any page or FE"
												},
												{
													"author": {
														"login": "Alain00"
													},
													"bodyText": "Done, here is the PR for the PKGC smu-chile/pkg-unimarc-components#557"
												}
											],
											"totalCount": 2
										}
									}
								]
							}
						},
						{
							"author": {
								"login": "oloramaker"
							},
							"title": "feat: add minicart to browse",
							"isDraft": false,
							"mergeable": "CONFLICTING",
							"reviewThreads": {
								"nodes": [
									{
										"isResolved": false,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "github-code-scanning"
													},
													"bodyText": "Unused variable, import, function or class\nUnused import Column.\nShow more details"
												}
											],
											"totalCount": 1
										}
									},
									{
										"isResolved": false,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "github-code-scanning"
													},
													"bodyText": "Unused variable, import, function or class\nUnused import SmallScreen.\nShow more details"
												}
											],
											"totalCount": 1
										}
									},
									{
										"isResolved": false,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "github-code-scanning"
													},
													"bodyText": "Unused variable, import, function or class\nUnused import Spacer.\nShow more details"
												}
											],
											"totalCount": 1
										}
									},
									{
										"isResolved": true,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "avalencia10"
													},
													"bodyText": "@oloramaker pls try order those props"
												}
											],
											"totalCount": 1
										}
									},
									{
										"isResolved": true,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "avalencia10"
													},
													"bodyText": "@oloramaker Why was the price initialized to ''?"
												}
											],
											"totalCount": 1
										}
									},
									{
										"isResolved": true,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "avalencia10"
													},
													"bodyText": "@oloramaker pls validate if data is undefined or empty"
												}
											],
											"totalCount": 1
										}
									},
									{
										"isResolved": true,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "avalencia10"
													},
													"bodyText": "@oloramaker I thinks what the spaces it's not necessary"
												}
											],
											"totalCount": 1
										}
									},
									{
										"isResolved": true,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "avalencia10"
													},
													"bodyText": "@oloramaker maybe you can try indentation that line."
												}
											],
											"totalCount": 1
										}
									},
									{
										"isResolved": true,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "avalencia10"
													},
													"bodyText": "@oloramaker what return that function? maybe you can try add type of return with an Interface."
												}
											],
											"totalCount": 1
										}
									},
									{
										"isResolved": true,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "avalencia10"
													},
													"bodyText": "@oloramaker what return that function? maybe you can try add type of return with an Interface."
												}
											],
											"totalCount": 1
										}
									},
									{
										"isResolved": true,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "avalencia10"
													},
													"bodyText": "what return that function? maybe you can try add type of return with an Interface."
												}
											],
											"totalCount": 1
										}
									},
									{
										"isResolved": true,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "avalencia10"
													},
													"bodyText": "what return that function? maybe you can try add type of return with an Interface."
												}
											],
											"totalCount": 1
										}
									}
								]
							}
						},
						{
							"author": {
								"login": "Alain00"
							},
							"title": "feat: FID-1301 tag coupons",
							"isDraft": false,
							"mergeable": "MERGEABLE",
							"reviewThreads": {
								"nodes": []
							}
						},
						{
							"author": {
								"login": "Alain00"
							},
							"title": "feat(header): adding coupon icon tooltip and text",
							"isDraft": false,
							"mergeable": "MERGEABLE",
							"reviewThreads": {
								"nodes": [
									{
										"isResolved": false,
										"comments": {
											"nodes": [
												{
													"author": {
														"login": "avalencia10"
													},
													"bodyText": "@Alain00 That const it's string or boolean ? or both?"
												},
												{
													"author": {
														"login": "Alain00"
													},
													"bodyText": "@avalencia10 the const is a boolean, but the env var can't be a boolean, the env var is always a string, so that's why I use the condition\nprocess.env.NEXT_PUBLIC_SHOW_COUPON_TOOLTIP === 'true'"
												}
											],
											"totalCount": 2
										}
									}
								]
							}
						},
						{
							"author": {
								"login": "dicalj"
							},
							"title": "feat: coupons backbone",
							"isDraft": false,
							"mergeable": "MERGEABLE",
							"reviewThreads": {
								"nodes": []
							}
						},
						{
							"author": {
								"login": "Alain00"
							},
							"title": "chore(coupon): remove unnecsary product map",
							"isDraft": true,
							"mergeable": "MERGEABLE",
							"reviewThreads": {
								"nodes": []
							}
						},
						{
							"author": {
								"login": "SvillarroelG"
							},
							"title": "feat: [NTT-143] SelectOrderBy & filters",
							"isDraft": true,
							"mergeable": "MERGEABLE",
							"reviewThreads": {
								"nodes": []
							}
						}
					]
				}
			}
		}
	]//delete
	const [listRepos, setListRepos] = useState<InfoPrProps[]>(test)
	const hasToken = getAccess()

	const handleSaveParams = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (!hasToken) {
			Router.push('/')
			return
		}
		const target = event.target as HTMLFormElement
		const ownerRepo = target.ownerRepo.value
		const nameRepo = target.nameRepo.value
		const { repository } = await getDataToList({ ownerRepo, nameRepo })
		target.ownerRepo.value = ''
		target.nameRepo.value = ''
		setListRepos((beforeList) => ([
			...beforeList,
			{
				ownerRepo,
				nameRepo,
				repository
			}
		]))
	}

	const getDataToList = async ({ ownerRepo, nameRepo }: MainPrProps) => {
		return await getInfoPr({
			owner: ownerRepo,
			name: nameRepo
		})
	}

	console.log({ listRepos })

	return (
		<div className="flex w-full flex-1 flex-col px-10">
			<form className="flex space-x-5" onSubmit={handleSaveParams}>
				<TextField name="ownerRepo" label="Owner repo" />
				<TextField name="nameRepo" label="Name repo" />
				<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
					Add
				</button>
			</form>
			<section className="flex flex-wrap">
				{listRepos.map((repo, index) => {
					return <ItemRepositorie data={repo} key={index} />
				})}
			</section>
		</div >
	)
}

export async function getServerSideProps({ req }: any) {
	const user2 = await getSession({ req })
	console.log({ user2 })
	return {
		props: {}, // will be passed to the page component as props
	}
}


export default Dashboard