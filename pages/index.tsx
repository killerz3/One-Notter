import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'



const Home: NextPage = () => {

  const {data:session}=useSession()
  
  
  return (
    <div className='bg-neutral-100 dark:bg-stone-900 dark  h-screen flex'>
      {session?.user?.name}
      <button onClick={()=>signIn()}>Login</button>
      <button onClick={()=>signOut()}>Logout</button>
    </div> 
   
  )
}

export default Home
