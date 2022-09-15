import { Navbar } from 'components/Navbar'
import Head from 'next/head'

export const Header = () => {
	return (
		<>
			<Head>
				<title>Nowgit</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
		</>
	)
}