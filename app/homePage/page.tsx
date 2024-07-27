import React from "react";
import Post from "../components/post";
import Profile from "../profile/page";
import { MdAdd } from "react-icons/md";
import Link from "next/link";

const Home = () => {
   return (
      <>
         <Link href='/posts'>
            <div className='fixed bottom-10 right-5 bg-amber-400 p-2 rounded-xl shadow-xl shadow-slate-300 z-10'>
               <MdAdd className='text-4xl' />
            </div>
         </Link>
         <div className='relative'>
            <div className='flex justify-between p-2 items-center bg-amber-500 sticky top-0'>
               <div className='flex gap-3 mt-1 items-center'>
                  <div>
                     <h1 className='h-1 w-8 bg-black my-'></h1>
                     <h1 className='my-1 h-1 w-8 bg-black'></h1>
                     <h1 className='h-1 w-8 bg-black'></h1>
                  </div>
                  <div className='ml-4 text-3xl font-bold'>Memantic</div>
               </div>
               <Link href='../profile'>
                  <div className='mr-3'>
                     <img
                        src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt='no profile image'
                        className='h-[50px] w-[55px] rounded-full'
                     />
                  </div>
               </Link>
            </div>

            <div>
               <Post />
            </div>
         </div>
      </>
   );
};

export default Home;
