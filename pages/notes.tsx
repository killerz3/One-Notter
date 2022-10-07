import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import NoteListItem from "../components/noteListItem";
import Image from "next/image";
import axios from "axios"

import {BsPen} from "react-icons/bs"


export default function Notes() {
    const { data: session } = useSession();
    const router = useRouter();

    const newNote = async() => {
        const userId = session?.user?.id;
        const title = "title";
        const content = "this is the content of a note"
        const createdAt = Date.now().toString();
        
        await axios.post("/api/notes/addNote", {
            userId,title,content,createdAt
        })
        

    }

    return (
        <div className=" h-screen bg-neutral-300 dark:bg-stone-900 theme-transission flex flex-col justify-center items-center text-neutral-700 dark:text-neutral-300 ">

            <div className="div-themed m-5 md:w-5/6 p-2 md:p-4 h-3/4 felx flex-col justify-center overflow-scroll">
                <div className="flex justify-between">
                    <span className="text-xl md:text-3xl">Welcome {session?.user?.name} </span>
                    <div className="h-10 w-10 rounded-full overflow-hidden outline outline-1  ">
                            {
                                <Image
                                    src={session?.user?.image!}
                                    alt="Picture of the author"
                                    height={200}
                                width={200}
                                
                                   
                                />
                            }
                        </div>
                </div>

                <div className="mt-5 flex items-center justify-between">Here are your notes:
                    <button className="h-8  md:h-10 flex items-center justify-between p-2 rounded-xl dark:bg-neutral-300 bg-stone-900  text-neutral-300 dark:text-stone-900 text-sm md:text-lg">
                        <BsPen className='mr-2' /> New note
                    </button>
                </div>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2  gap-4">
                <NoteListItem/>
                <NoteListItem/>
     
             
                </div>
                <button onClick={()=>{newNote()}}>this </button>
            </div>
        </div>
    );
}

export const getServerSideProps = async (context: any) => {
    const session = await getSession(context);

    if (!session?.user) {
        console.log(session?.user?.id);
        
        

        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    return {
        props: {},
    };
};
