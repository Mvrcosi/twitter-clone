import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-screen overflow-hidden ">
      <Head>
        <title>Twitter v2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='grid grid-cols-9'>
        {/* SIDE BAR */}
        <Sidebar />

        {/* FEED */}

        <Feed />


        {/* WIDGETS */}

        <Widgets />


      </main>

    </div>
  )
}

export default Home
