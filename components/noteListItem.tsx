import React from 'react'

export default function NoteListItem(props:any,{classes}:any) {
  return (
    <div className="bg-neutral-300 dark:bg-stone-800 p-4 mt-4 rounded-md  shadow-xl text-neutral-800 dark:text-neutral-300 theme-transission overflow-hidden">
      
      <div className='mb-1 font-semibold underline underline-offset-4'>Title Of The Note</div>
      <div className='ml-2 line-clamp-2 font-extralight'>
        this is the body of the note and this maybe long
        this is the body of the note and this maybe long
        this is the body of the note and this maybe long
      
      </div>
    </div>
  )
}
