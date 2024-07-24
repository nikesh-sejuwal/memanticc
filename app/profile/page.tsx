import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import UserProfile from "../components/userProfile";
import Link from "next/link";

const Profile = () => {
   return (
      <>
         <div className='flex justify-between p-2 items-center bg-amber-500 sticky top-0'>
            <div className='flex gap-3 mt-1 items-center'>
               <Link href='/'>
                  <FaArrowLeft className='text-2xl' />
               </Link>
               <div className='ml-4 text-[25px] font-semibold'>Profile</div>
            </div>

            <div className='mr-3 bg-black p-2 rounded-full'>
               <IoIosLogOut className='text-3xl text-white' />
            </div>
         </div>
         <div>
            <UserProfile />
         </div>
      </>
   );
};

export default Profile;
