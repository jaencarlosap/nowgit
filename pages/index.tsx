import type { NextPage } from 'next'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { Icons } from 'components'

const Home: NextPage = () => {
  const { status } = useSession()
  const isLogin = status === "authenticated"
  const linkToRedirect = isLogin ? '/dashboard' : '/login'
  const textDescription = isLogin ? 'go to dashboard' : 'Sign in'

  return (
    <div className="flex min-h-screen w-full flex-1 flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">
        Welcome to Nowgit
      </h1>

      <p className="mt-3 text-2xl">
        To start displaying the status of your repositories {textDescription}
      </p>
      <div className="mt-3 justify-center">
        <p className="flex space-x-4 justify-between">
          <Link href={linkToRedirect}>
            <a
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:outline-none hover:bg-slate-800"
            >
              Ready to start
              <Icons name="ArrowRight" />
            </a>
          </Link>
        </p>
      </div>
    </div >
  )
}

export default Home
