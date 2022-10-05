import { signIn, signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import Button from "./button"


export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const {data:session}=useSession()

    return (
        <div className='bg-neutral-100 dark:bg-stone-900 text-3xl dark:text-neutral-100 text-stone-900  px-5 p-3 flex justify-between items-center'>
            <Link href={'/'}>One Note</Link>



            <div className="flex items-center">
                {session?.user && (
                    
                        <button className='text-sm mx-4' onClick={()=>signOut()}>Logout</button>
                )}

                {!session?.user && (
                    <button className="text-sm mr-4" onClick={()=>signIn()}>
                        Sign In
                    </button>)}

                <button
                        className=" p-2 bg-neutral-100 dark:bg-stone-700 rounded-md outline outline-2 outline-stone-500 dark:outline-neutral-100"
                        onClick={() => {
                            setTheme(theme === "dark" ? "light" : "dark");
                        }}
                    >
                        {theme === "dark" ?<BsFillSunFill/>: <BsFillMoonFill/> }
                    </button>
            </div>
      </div>
    );
}
