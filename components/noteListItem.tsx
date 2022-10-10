import { Note } from '@prisma/client'
import React from 'react'

export default function NoteListItem(props: any) {
  
  const note: Note = props.note;
  
  const textCombine = (note: any) => {
        
    let finalText=""
    
    note.content.blocks.map((block:any) => {
    finalText+=block.text
    })
    return finalText
  }
  

  return (
    <div onClick={props.onClick} className="bg-neutral-300 dark:bg-stone-800 p-4 mt-4 rounded-md  shadow-xl text-neutral-800 dark:text-neutral-300 theme-transission overflow-hidden">
      
      <div className='mb-1 font-semibold underline underline-offset-4'>{note.title}</div>
      <div className='ml-2 line-clamp-2 font-extralight'>
        {textCombine(note)}
      </div>
    </div>
  )
}
