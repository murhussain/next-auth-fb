import Head from 'next/head'
import Header from '../components/header'
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      
      <Header />

      <main>
        {/* Sidebar */}
        <Sidebar />
        
        {/* Feed */}
        {/* Widgets */}
      </main>
     </div>
  )
}
