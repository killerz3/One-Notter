import type { NextPage } from 'next'
import { getSession, signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Button from '../components/button'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


const Home: NextPage = () => {

  const {data:session}=useSession()
  const router=useRouter()
  // if(session) router.push("notes")
 return (
    <div className='bg-neutral-100 dark:bg-stone-900 dark  h-screen flex items-center justify-center transition ease-in duration-500'>
      <div className='bg-stone-700'></div>
    </div> 
   
  )
}

export default Home

export const getServerSideProps = async (context:any) => {
  const session = await getSession(context) 

  if (session?.user) {
      
      
      return {
          redirect: {
              destination: '/notes',
              permanent:false
              
          }
      }
  }
  return {
      props:{}
  }
}