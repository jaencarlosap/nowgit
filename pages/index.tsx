import type { NextPage } from 'next'
import Router from 'next/router'
import { TextField } from 'components'
import { getAccess, setAccess } from "services"

const Home: NextPage = () => {
  const defaultAccess = getAccess()
  const handleApplyToken = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as HTMLFormElement
    const valueToken = target.token.value
    if (valueToken) {
      setAccess(valueToken)
      Router.push('/list-repositories')
    }
  }

  return (
    <main className="flex min-h-screen w-full flex-1 flex-col items-center justify-center px-20 py-2 text-center">
      <h1 className="text-6xl font-bold">
        Welcome to Nowgit
      </h1>

      <p className="mt-3 text-2xl">
        To start displaying the status of your repositories, please paste your temporal key
      </p>
      <p className="mt-3 text-slate-400  hover:text-sky-400">
        Remember that this data is not saved on any server and run only in your local navigator
      </p>

      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        <form className="flex space-x-5" onSubmit={handleApplyToken}>
          <TextField
            defaultValue={defaultAccess}
            name="token"
            label="Github token"
            type="password"
          />
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
        </form>
      </div >
    </main >
  )
}

export default Home
