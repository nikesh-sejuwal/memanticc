import React from "react";
import Image from "next/image";
import Link from "next/link";
import login from "@/public/asserts/login.svg";

const Login = () => {
   return (
      <>
         <div className='flex h-screen justify-center gap-5 items-center'>
            <div className='lg:w-[500px]'>
               <div className=' relative flex flex-col p-4 rounded-md text-black bg-white  shadow-lg shadow-gray-500 md:h-[500px]'>
                  <div className='text-2xl font-bold mb-2 text-[#1e0e4b] text-center mt-10'>
                     Welcome back to <span className='text-amber-500'>App</span>
                  </div>
                  <div className='text-sm font-normal mb-4 text-center text-[#1e0e4b]'>
                     Log in to your account
                  </div>
                  <form className='flex flex-col gap-3'>
                     <div className='block relative'>
                        <label className='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'>
                           Email
                        </label>
                        <input
                           type='text'
                           id='email'
                           className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0'
                        />
                     </div>
                     <div className='block relative'>
                        <label className='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'>
                           Password
                        </label>
                        <input
                           type='text'
                           id='password'
                           className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0'
                        />
                     </div>
                     <div>
                        <a className='text-sm text-[#7747ff]' href='#'>
                           Forgot your password?
                        </a>
                     </div>
                     <button
                        type='submit'
                        className='bg-amber-500 hover:bg-amber-600 w-max m-auto px-6 py-2 rounded text-white text-sm font-normal'
                     >
                        Log In
                     </button>
                  </form>
                  <div className='text-sm text-center mt-[1.6rem]'>
                     Don’t have an account yet?{" "}
                     <Link className='text-sm text-[#7747ff]' href='/register'>
                        Sign up here
                     </Link>
                  </div>
               </div>
            </div>
            <div className='max-md:hidden'>
               <Image src={login} alt='No login img' width='320' />
            </div>
         </div>
      </>
   );
};

export default Login;
