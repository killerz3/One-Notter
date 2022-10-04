import type { NextPage } from 'next'
import Link from 'next/link'



const Home: NextPage = () => {


  
  
  return (
    <div className='bg-neutral-100 dark:bg-stone-900 dark  h-screen flex'>
      <Link href={"/api/auth/login"}>Login</Link>
      <Link href={"/api/auth/logout"}>Logout</Link>
    </div> 
   
  )
}

export default Home
