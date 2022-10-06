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
   <div className='bg-neutral-100 dark:bg-stone-900 theme-transission h-screen flex flex-col justify-center items-center'>
     <div className='div-themed m-5'>

       <span className="text-xl font-semibold block">Welcome to One-notter</span>
       <div className='mt-3'>
         Simple & minimalistic note taking app
         created with:
         <ul className='list-disc ml-5'>
          <li>NextJS</li>
          <li>TailwindCSS</li>
          <li>Prisma ORM on a Postgres DB</li>
          <li>Auth using Next-Auth</li>
          <li>Powered by TypeScript</li>
         </ul>
       </div>

       
     
     </div>
     <button onClick={()=>signIn()} className="text-neutral-800 dark:text-neutral-300 mt-10">Sign In to experience</button>
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