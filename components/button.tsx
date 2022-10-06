import React from 'react'

function Button(props:any) {
  return (
      <button onClick={props.onClick} className={" p-2 bg-neutral-100 h-min dark:bg-stone-700 rounded-md outline outline-2 outline-stone-500 dark:outline-neutral-100 theme-transission" + props.className}>{props.title}</button>
  )
}

export default Button