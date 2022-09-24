import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { Icons } from 'components'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { status } = useSession()
  const router = useRouter()
  const isLogin = status === 'authenticated'
  const textDescription = isLogin ? 'go to dashboard' : 'Sign in'

  const handleRedirect = () => {
    const linkToRedirect = isLogin ? '/dashboard' : '/auth/signin'
    router.push(linkToRedirect)
  }

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
          <button
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:outline-none hover:bg-slate-800"
            onClick={handleRedirect}
          >
            Ready to start
            <Icons name="ArrowRight" />
          </button>
        </p>
      </div>
    </div >
  )
}

export default Home
