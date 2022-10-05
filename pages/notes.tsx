import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react'


export default function Notes() {

    const { data: session } = useSession()
    const router = useRouter()
    


  return (
    <div className='text-black'>Notes</div>
  )
}

export const getServerSideProps = async (context:any) => {
    const session = await getSession(context) 

    if (!session?.user) {
        console.log("thsi");
        
        return {
            redirect: {
                destination: '/',
                permanent:false
                
            }
        }
    }
    return {
        props:{}
    }
}