import Link from 'next/link'
import { DropdownProfileNavbar } from 'components'

export const Navbar = () => {
	return (
		<nav className="flex h-12 w-full bg-white px-2 sm:px-4 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<Link href="/">
					<a className="flex items-center self-center text-xl font-semibold whitespace-nowrap">
						<img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Nowgit Logo" />
						Nowgit
					</a>
				</Link>
				<DropdownProfileNavbar />
			</div>
		</nav>
	)
}