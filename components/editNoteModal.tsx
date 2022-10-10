import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef } from 'react'
import {useState} from 'react'
import Button from './button'

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import dynamic from 'next/dynamic';
import { EditorState , convertToRaw,convertFromRaw } from 'draft-js';


const Editor = dynamic(
    () => import("react-draft-wysiwyg").then((module) => module.Editor),
    {
        ssr:false
    }

)


export default function EditNoteModal(props:any) {
    const { data: session } = useSession();
    const [Title, setTitle] = useState("")
    const [editorState, setEditorState] = useState<any>(EditorState.createEmpty())
    const titleRef:any = useRef()
    
    useEffect(() => {
      
        titleRef.current.value = props.noteData.title

        setEditorState(EditorState.createWithContent(convertFromRaw(props.noteData.content)))
      
    }, [props.noteData.content, props.noteData.title, titleRef])
    



    const handleClose = (e:any) => {
        if (e.target.id=="container") props.onClose()
    }    

    const handleSubmit = () => {
        
        updateNote(props.noteData.id)
        props.onClose()
    }
    const handleDelete = () => {
        
        deleteNote(props.noteData.id)
        props.onClose()
    }

    const updateNote = async (id:any) => {
        
        const userId = session?.user?.id;
        const title = Title;
        const content = convertToRaw(editorState.getCurrentContent())
        
        
        await axios.post("/api/notes/updateNote", {

           id,userId,title,content
        })
        

    }
    const deleteNote = async (id:any) => {
        
        const userId = session?.user?.id;
        const title = Title;
        const content = convertToRaw(editorState.getCurrentContent())
        
        
        await axios.post("/api/notes/deleteNote", {

           id,userId,title,content
        })
        

    }

    console.log(props);
    

    return (
        <div id={'container'} onClick={handleClose} className='bg-gray-900 h-screen w-screen z-10 fixed bg-opacity-40 backdrop-blur-sm top-0 flex justify-center items-center'>

            <div className='bg-neutral-200 dark:bg-stone-800 text-stone-700 flex items-center justify-center dark:text-neutral-200 opacity-100 h-5/6 w-5/6 md:w-2/3 rounded-md p-2  '>
                
               

                <div className="flex flex-col p-2 md:p-5 h-full w-full overflow-auto  ">

                    <label className='text-xl mb-2'>
                        Edit Note 
                    </label>
                    <label className='text-lg mb-2'>
                         Edit Title
                    </label>



                    <div className="flex flex-col md:flex-row mb-5 ">
                        <input type="text" ref={titleRef} placeholder="Enter Title of new Note" onChange={(e)=>{setTitle(e.target.value)}}
                            className=' mr-5 rounded-md md:w-2/3 outline-none p-1 md:p-2 bg-stone-700 dark:bg-neutral-300 text-neutral-300 dark:text-stone-800' >
                        </input>
                        <div className="flex items-center">
                            <button onClick={handleSubmit} className='w-min py-1 px-3 bg-neutral-400 dark:bg-stone-700 rounded w-'>submit</button>
                            <button onClick={handleDelete} className='w-min py-1 px-3 ml-2 bg-red-400 dark:bg-red-500 rounded w-'>Delete</button>
                        </div>
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

