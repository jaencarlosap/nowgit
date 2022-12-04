import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { Welcome, Dashboard } from 'components'

const Home: NextPage = () => {
  const { status } = useSession()
  const isLogin = status === 'authenticated'

  if (!isLogin) {
    return <Welcome />
  }

  return (
    <Dashboard />
  )
}

export default Home
