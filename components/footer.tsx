import {RiCopyrightLine} from 'react-icons/ri'


export default function Footer() {
    

    return (
        <div className='flex items-baseline bg-neutral-100 dark:bg-stone-900
         text-black dark:text-neutral-100 justify-center'>
            
            <RiCopyrightLine className='w-5'/>  {new Date().getFullYear().toString()} <span> &nbsp; Created by Shubhveer Singh Chaudhary </span>
        </div>
        )

}