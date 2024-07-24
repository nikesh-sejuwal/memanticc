import React from "react";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdPostAdd } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import Post from "./post";

const UserProfile = () => {
   return (
      <>
         <div className='max-w-[400px] m-auto'>
            <div className='mt-5 h-[200px] bg-amber-200 flex gap-10 justify-center items-center rounded-xl shadow-lg shadow-gray-400'>
               <div>
                  <img
                     src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                     alt='no profile pic'
                     className='h-[120px] w-[120px] rounded-full border-2 border-red-500'
                  />
               </div>
               <div>
                  <h1 className='my-2 text-2xl font-semibold'>Bikal Demo</h1>
                  <div className='flex gap-1 items-center my-1'>
                     <span className='text-2xl'>
                        <MdEmail />
                     </span>
                     bikal@gmail.com
                  </div>
                  <div className='flex gap-1 items-center mt-2'>
                     <span className='text-2xl'>
                        <IoMdPhonePortrait />
                     </span>
                     9898989898
                  </div>
               </div>
            </div>
         </div>
         <div className='border-2 border-amber-500 m-5 py-2'>
            <div className='flex justify-around'>
               <div className='font-bold text-red-500'>
                  <MdPostAdd className='text-3xl text-red-500' />
                  Posts
               </div>
               <div className='font-bold'>
                  <AiFillLike className='text-3xl' />
                  Likes
               </div>
            </div>
            <div className='h-[500px] overflow-scroll'>
               <Post />
            </div>
         </div>
      </>
   );
};

export default UserProfile;
