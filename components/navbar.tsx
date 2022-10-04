import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import { useUser } from '@auth0/nextjs-auth0';

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const { user, error, isLoading } = useUser();

    return (
        <div className='bg-neutral-100 dark:bg-stone-900 text-3xl dark:text-neutral-100 text-stone-900  px-5 p-3 flex justify-between'>
            <Link href={'/'}>Noted</Link>

            {user && (<div>{user.name}</div>) }
            
            <button
                    className=" p-2 bg-neutral-100 dark:bg-stone-700 rounded-md outline outline-2 outline-stone-500 dark:outline-neutral-100"
                    onClick={() => {
                        setTheme(theme === "dark" ? "light" : "dark");
                    }}
                >
                    {theme === "dark" ?<BsFillSunFill/>: <BsFillMoonFill/> }
                </button>
      </div>
    );
}
