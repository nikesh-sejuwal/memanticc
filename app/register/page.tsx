import React from "react";
import Link from "next/link";
import Image from "next/image";
import signin from "@/public/asserts/Signin.svg";

const Register = () => {
   return (
      <>
         <div className='flex justify-center items-center '>
            <div className='mt-10 lg:w-[500px] max-sm:flex-col'>
               <form>
                  <div className='flex flex-col items-center justify-center px-1 py-8 mx-auto lg:py-0'>
                     <div className='w-full bg-white rounded-lg shadow-lg shadow-gray-500 border md:mt-0 sm:max-w-md xl:p-0'>
                        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                           <p className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                              Create an account
                           </p>
                           <div>
                              <label className='block mb-2 text-sm font-medium text-gray-900'>
                                 Full Name
                              </label>
                              <input
                                 placeholder='Ram Karki'
                                 className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                                 id='name'
                                 type='text'
                              />
                           </div>
                           <div>
                              <label className='block mb-2 text-sm font-medium text-gray-900'>
                                 Email
                              </label>
                              <input
                                 placeholder='ramkarki@ai'
                                 className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                                 id='email'
                                 type='email'
                              />
                           </div>
                           <div>
                              <label className='block mb-2 text-sm font-medium text-gray-900'>
                                 Phone no
                              </label>
                              <input
                                 placeholder='9800000000'
                                 className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                                 id='phone'
                                 type='number'
                              />
                           </div>
                           <div>
                              <label className='block mb-2 text-sm font-medium text-gray-900'>
                                 Password
                              </label>
                              <input
                                 className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                                 placeholder='••••••••'
                                 id='password'
                                 type='password'
                              />
                           </div>
                           <div>
                              <label className='block mb-2 text-sm font-medium text-gray-900'>
                                 Confirm password
                              </label>
                              <input
                                 className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                                 placeholder='••••••••'
                                 id='confirmPassword'
                                 type='password'
                              />
                           </div>

                           <button
                              className='w-full bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white'
                              type='submit'
                           >
                              Sign Up
                           </button>
                           <h1 className='text-center'>
                              Already have an account?{" "}
                              <span>
                                 <Link href='/login' className='text-blue-500'>
                                    Sign in
                                 </Link>
                              </span>
                           </h1>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
            <div className='max-w-[500px] max-md:hidden'>
               <Image src={signin} alt='SignIn page' />
            </div>
         </div>
      </>
   );
};

export default Register;
