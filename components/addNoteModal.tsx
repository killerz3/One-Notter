import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useRef } from 'react'
import {useState} from 'react'
import Button from './button'

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import dynamic from 'next/dynamic';
import { EditorState , convertToRaw } from 'draft-js';

const Editor = dynamic(
    () => import("react-draft-wysiwyg").then((module) => module.Editor),
    {
        ssr:false
    }

)


export default function AddNoteModal({onClose}:any) {
    const { data: session } = useSession();
    const [Title, setTitle] = useState("")
    const [editorState, setEditorState] = useState<any>(EditorState.createEmpty())
    const FormRef:any = useRef()

    const handleClose = (e:any) => {
        if (e.target.id=="container") onClose()
    }    

    const handleSubmit = () => {
        console.log(convertToRaw(editorState.getCurrentContent()));
        newNote()
        onClose()
    }

    const newNote = async() => {
        const userId = session?.user?.id;
        const title = Title;
        const content = convertToRaw(editorState.getCurrentContent())
        const createdAt = Date.now().toString();
        
        await axios.post("/api/notes/addNote", {
            userId,title,content,createdAt
        })
        

    }

    return (
        <div id={'container'} onClick={handleClose} className='bg-gray-900 h-screen w-screen z-10 fixed bg-opacity-40 backdrop-blur-sm top-0 flex justify-center items-center'>

            <div className='bg-neutral-200 dark:bg-stone-800 text-stone-700 flex items-center justify-center dark:text-neutral-200 opacity-100 h-5/6 w-5/6 md:w-2/3 rounded-md p-2  '>
                
                <div ref={FormRef} className="flex flex-col p-2 md:p-5 h-full w-full overflow-auto  ">

                    <label className='text-lg mb-2'>
                        Title
                    </label>



                    <div >
                        <input type="text" placeholder="Enter Title of new Note" onChange={(e)=>{setTitle(e.target.value)}}
                            className='mb-5 mr-5 rounded-md md:w-2/3 outline-none p-1 md:p-2 bg-stone-700 dark:bg-neutral-300 text-neutral-300 dark:text-stone-800' >
                        </input>
                        <button onClick={handleSubmit} className='w-min py-2 px-3  mb-3 bg-neutral-400 dark:bg-stone-700 rounded w-'>submit</button>
                    </div>
                    
                    
                    
                    
                    <Editor
                            editorState={editorState}
                        onEditorStateChange={(editorState) => { setEditorState(editorState);
                        }}
                            toolbar={{
                            options: ['inline', 'list', 'textAlign'],
                            inline: {
                                    options: ['bold', 'italic', 'underline', 'strikethrough']
                            },
                            textAlign: {
                                options: ['left', 'center', 'right'
                            ]
                            }
                        }} 
                        wrapperClassName='h-full overflow-hidden '
                        toolbarClassName='!bg-stone-700 dark:!bg-neutral-100 sticky'
                        editorClassName='m-2 bg-neutral-100 dark:bg-stone-700 shadow rounded px-2 '
                        
                    />
                    
                            
                </div>

            </div>

        </div>
    )
}
