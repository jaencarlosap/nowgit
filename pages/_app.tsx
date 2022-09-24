import type { AppProps } from 'next/app'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import {
  Footer,
  Header,
  Navbar
} from 'components'
import '../styles/globals.css'

export interface CustomAppProps extends AppProps {
  pageProps: {
    session: Session
  }
}

function MyApp({
  Component,
  pageProps: {
    session,
    ...pageProps
  }
}: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <main className='flex flex-col'>
        <Navbar />
        <div className='py-16'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </SessionProvider>
  )
}

export default MyApp
