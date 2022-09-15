import Link from "next/link"

export const Navbar = () => {
	return (
		<nav className="bg-white px-2 sm:px-4 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				{/* logo */}
				<Link href="/">
					<span className="self-center text-xl font-semibold whitespace-nowrap">
						Nowgit
					</span>
				</Link>
				<div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
					<ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
						<li>
							<Link href="/">
								<a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
									Home
								</a>
							</Link>
						</li>
						<li>
							<Link href="/list-repositories">
								<a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
									Repositories
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}