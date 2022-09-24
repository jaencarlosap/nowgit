import { getCsrfToken, getProviders } from 'next-auth/react'
import { useRouter } from 'next/router'
import { IncomingMessage } from 'http'
import { Icons } from 'components'

const Signin = ({ providersData, csrfTokenData }: any) => {
	const { query } = useRouter()

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="px-4 py-8 rounded-lg shadow-md bg-slate-50">
				<div className="text-center pb-12">
					<h3 className="text-4xl font-bold tracking-tight text-gray-900">Login</h3>
				</div>
				{Object.keys(providersData).map((providerKey, key) => (
					<div key={key} className="mt-4 p-2 w-50 max-w-md rounded-lg shadow-md bg-white hover:bg-gray-100">
						{
							providersData[providerKey].type !== 'credentials' && (
								<form action={providersData[providerKey].signinUrl} method="POST">
									<input type="hidden" name="csrfToken" value={csrfTokenData} />
									{providersData[providerKey].callbackUrl && (
										<input type="hidden" name="callbackUrl" value={query.callbackUrl} />
									)}

									<button type="submit" className="w-100 flex px-2">
										Sign in with {providersData[providerKey].name}
										<span className="ml-2">
											<Icons name={providersData[providerKey].name} />
										</span>
									</button>
								</form>
							)
						}
					</div>
				))}
			</div>
		</div>
	)
}

Signin.getInitialProps = async ({ req }: { req: IncomingMessage }) => {
	const providersData = await getProviders()
	const csrfTokenData = await getCsrfToken({ req })

	return {
		providersData,
		csrfTokenData
	}
}

export default Signin