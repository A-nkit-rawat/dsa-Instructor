import { useState } from "react";

export default function Header({appName}){
    const [flag,setFlag]=useState(false);
    return(
        <>
            <div className="flex flex-col md:flex-row justify-items-start md:justify-center  dark:bg-gray-900 bg-gray-100 mt-4 ">
                <div className="md:text-5xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900">{appName}</div>
                <div className="md:ml-100  bg-gray-100 dark:bg-gray-900">
                    <button className=' dark:bg-gray-100 bg-gray-900 text-gray-100 dark:text-gray-900 rounded-2xl border-amber-900 border-2 p-2 cursor-pointer hover:'
                        onClick={() =>{ document.documentElement.classList.toggle('dark')
                            setFlag(!flag);}
                        }>
                        {flag?"Light Mode":"Dark Mode"}
                    </button>
                </div>
            </div>
        </>
    )
}