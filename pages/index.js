import Head from 'next/head'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Feed from '../components/feed'
import Widget from '../components/widget'

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      
      <Header />

      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widget />
      </main>
     </div>
  )
}
