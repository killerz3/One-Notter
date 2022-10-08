import React from 'react'

export default function NoteListItem(props: any) {
  
  return (
    <div className="bg-neutral-300 dark:bg-stone-800 p-4 mt-4 rounded-md  shadow-xl text-neutral-800 dark:text-neutral-300 theme-transission overflow-hidden">
      
      <div className='mb-1 font-semibold underline underline-offset-4'>{props.title}</div>
      <div className='ml-2 line-clamp-2 font-extralight'>
        {props.contentText}
      </div>
    </div>
  )
}
