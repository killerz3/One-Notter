import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";

export default function Notes() {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <div className=" h-screen bg-neutral-100 dark:bg-stone-900 theme-transission flex flex-col justify-center items-center text-neutral-700 dark:text-neutral-300 ">

            <div className="div-themed w-1/3 md:w-1/2 p-4 h-3/4 felx flex-col justify-center ">
                <span className="text-3xl block">Welcome {session?.user?.name} </span>
                <div className="mt-5">Here are your notes:</div>
            </div>

        </div>
    );
}

export const getServerSideProps = async (context: any) => {
    const session = await getSession(context);

    if (!session?.user) {
        console.log("thsi");

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
