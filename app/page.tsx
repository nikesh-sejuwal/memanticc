import React from "react";
import Home from "./homePage/page";
import { MdAdd } from "react-icons/md";
import Link from "next/link";

const page = () => {
   return (
      <>
         <Link href='/posts'>
            <div className='fixed bottom-10 right-5 bg-amber-400 p-2 rounded-xl shadow-xl shadow-slate-300 z-10'>
               <MdAdd className='text-4xl' />
            </div>
         </Link>
         <Home />
      </>
   );
};

export default page;
