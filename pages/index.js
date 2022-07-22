import Head from 'next/head'
import Login from '../components/Login'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { currentUser } = useAuth()
  
  return (
    <>
      <Head>
        <title>Todo Next.js + Firebase</title>
        <meta name="description" content="CRUD App with Next.js and Firebase (Auth and Firestore)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  )
}
