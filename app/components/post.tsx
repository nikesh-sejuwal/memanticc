"use client";
import React, { useEffect, useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

interface memeData {
   caption: string;
   memeUrl: string;
   userId: string;
   _id: string;
}
const Post = () => {
   const [results, setresults] = useState<memeData[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   async function getData() {
      try {
         const response = await fetch("/api/memeData");
         if (response.ok) {
            const result = await response.json();
            setresults(result);

            console.log("data fetched successfully");
         } else {
            console.log("failed to fetch the data");
         }
      } catch (error: any) {
         console.log("ERROR OCCURS: ", error);
      } finally {
         setLoading(false);
      }
   }
   console.log(results);
   useEffect(() => {
      getData();
   }, []);

   if(loading) {
      return (
      <div className="flex h-screen justify-center items-center">
         <h3>LOADING..</h3>
      </div>
      )
   }
   return (
      <>
         <div className='max-w-[400px] m-auto mt-5 border-b-2 border-black'>
            {results.map((e: memeData) => {
               return (
                  <>
                     <div key={e._id}>
                        <div className='max-w-[400px] m-auto mt-5 border-b-2 border-black'>
                           <div className='flex justify-between'>
                              <div className='flex gap-3'>
                                 <div>
                                    <img
                                       src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                       alt='no img'
                                       className='h-[60px] w-[65px] rounded-full'
                                    />
                                 </div>
                                 <div>
                                    <div>
                                       <h1 className='font-semibold text-xl'>
                                          Bikal Demo
                                       </h1>
                                       <h1 className='text-sm'>
                                          Monday, June 3 2024
                                       </h1>
                                    </div>
                                 </div>
                              </div>

                              <div>
                                 <TbDotsVertical className='text-2xl cursor-pointer' />
                              </div>
                           </div>
                           <div className='ml-2 mt-3'>{e.caption}</div>
                           <div>
                              <img src={e.memeUrl} className='w-[400px]' />
                           </div>
                           <div className='mt-3 flex items-center gap-2 mb-5'>
                              <FaRegHeart className='text-3xl' />
                              <h1 className='text-xl'>3 Likes</h1>
                           </div>
                        </div>
                     </div>
                  </>
               );
            })}
         </div>
      </>
   );
};

export default Post;
