import Link from "next/link"
import { useState } from "react"
import {
	useSession,
	signIn,
	signOut
} from "next-auth/react"
import { Icons } from "components"


export const DropdownProfileNavbar = () => {
	const { status, data } = useSession()
	const [isOpen, setIsOpen] = useState(false)
	const hasSession = status === "authenticated"

	const handleOpen = async () => {
		if (hasSession) setIsOpen(!isOpen)
		if (!hasSession) await signIn(undefined, { callbackUrl: '/dashboard' })
	}

	const handleLogout = async () => await signOut({ callbackUrl: '/' })

	return (
		<div className="flex flex-col items-center justify-center md:order-2">
			<button
				className="flex text-white mr-3 text-sm bg-zinc-800 rounded-full md:mr-0 items-center"
				onClick={handleOpen}
			>
				<span className="mx-2">
					{hasSession
						? data?.user?.name
						: 'Sign in'
					}
				</span>
				{hasSession
					? <img className="w-8 h-8 m-1 rounded-full" src={data?.user?.image || ''} alt={data?.user?.name || ''} />
					: <Icons name="AccountCircle" />
				}
			</button>
			{isOpen && data?.user?.name && (
				<div className="absolute top-14 right-4 sm:right-auto sm:top-10 z-50 sm:my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow">
					<div className="py-3 px-4">
						<span className="block text-sm text-gray-900">{data?.user?.name || ''}</span>
						<span className="block text-sm font-medium text-gray-500 truncate">{data?.user?.email || ''}</span>
					</div>
					<ul className="py-1" aria-labelledby="user-menu-button">
						<li onClick={handleOpen}>
							<Link href='/dashboard'>
								<a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
							</Link>
						</li>
						<li onClick={handleLogout}>
							<Link href='/'>
								<a className="block py-2 px-4 text-sm text-red-400 hover:bg-gray-100">Sign out</a>
							</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}