import { getProviders, signIn } from 'next-auth/react'
import { IncomingMessage } from 'http'
import { Icons } from 'components'

const Signin = ({ providersData }: any) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="px-4 py-8 rounded-lg shadow-md bg-slate-50">
				<div className="text-center pb-12">
					<h3 className="text-4xl font-bold tracking-tight text-gray-900">Login</h3>
				</div>
				{Object.keys(providersData).map((providerKey, key) => (
					<div key={key} className="mt-4 p-2 w-50 max-w-md rounded-lg shadow-md bg-white hover:bg-gray-100">
						{providersData[providerKey].type !== 'credentials' && (

							<button onClick={() => signIn(providersData[providerKey].id)} className="w-100 flex px-2">
								Sign in with {providersData[providerKey].name}
								<span className="ml-2">
									<Icons name={providersData[providerKey].name} />
								</span>
							</button>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	const providersData = await getProviders()

	return {
		props: { providersData }
	}
}

export default Signin