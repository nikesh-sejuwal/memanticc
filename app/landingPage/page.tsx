import React from "react";
import Image from "next/image";
import svgimg from "@/public/asserts/wave.svg";
import Link from "next/link";

const LandingPage = () => {
   return (
      <>
         <div className='flex justify-center items-center flex-col relative'>
            <Image src={svgimg} alt='no1 img' className='w-full' />
            <div className='flex flex-col items-center justify-center'>
               <h1 className='text-[8vw] text-amber-600 rounded-3xl font-bold uppercase'>
                  memantic
               </h1>
            </div>
            <div className='flex justify-between w-full max-w-md mt-10'>
               <div className='flex flex-col justify-center items-end'>
                  <h1 className='text-xl font-semibold italic mb-9'>
                     New Here?
                  </h1>
                  <Link href='/register'>
                     <button className='smky-btn3 relative hover:text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#d97706] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-black font-semibold text-[18px]'>
                        Register
                     </button>
                  </Link>
               </div>
               <div className='flex flex-col items-center'>
                  <h1 className='text-xl font-semibold italic'>Already have</h1>

                  <h1 className='text-xl font-semibold italic mb-3'>
                     an account?
                  </h1>

                  <Link href='/login'>
                     <button className='smky-btn3 relative hover:text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#d97706] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-black font-semibold text-[18px]'>
                        Login
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default LandingPage;
