import type { NextPage } from 'next'
import {
  Body,
  Header,
  Footer
} from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Home
