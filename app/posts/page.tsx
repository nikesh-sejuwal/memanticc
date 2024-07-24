"use client";
import { useEdgeStore } from "@/lib/edgestore";
import Link from "next/link";
import { format } from "path";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { number } from "zod";
// import { map } from "zod";

interface memeData {
   caption: string;
   memeUrl: string;
   userId: string;
   _id: string;
}

const page = () => {
   // const initialResult = { caption: "", memeUrl: "", userId: "", _id: "" };
   const [results, setresults] = useState<memeData[]>([]);
   const [formData, setFormData] = useState({
      userId: "123",
      caption: "",
   });
   const [imageUrl, setImageUrl] = useState("");
   const [file, setFile] = React.useState<File>();
   const { edgestore } = useEdgeStore();

   const handleInput = (e: any) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
   };

   const handleSubmit = async (e: any) => {
      e.preventDefault();
      try {
         const response = await fetch("/api/memeData", {
            method: "POST",
            body: JSON.stringify({
               userId: formData.userId,
               caption: formData.caption,
               memeUrl: imageUrl,
            }),
            headers: {
               "Content-Type": "application/json",
            },
         });

         if (response.ok) {
            console.log("Data added successfully");
            alert("Form data submitted!");
            setFormData({
               userId: "123",
               caption: "",
            });
         } else {
            console.log("Failed to add data: ");
         }
      } catch (error: any) {
         console.log("Failed to send data to the database: ", error);
      }
   };
  

   return (
      <>
         <div className='flex justify-between p-2 items-center bg-amber-500 sticky top-0'>
            <div className='flex gap-3 mt-1 items-center'>
               <Link href='/'>
                  <FaArrowLeft className='text-2xl' />
               </Link>
               <div className='ml-4 text-3xl font-bold'>Posts</div>
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
         <div className='w-[500px] m-auto'>
            <div className='mx-3 my-3'>
               <h1 className='text-xl font-bold'>Post this meme</h1>
               <div className='flex flex-col gap-3'>
                  <label
                     htmlFor='caption'
                     className='mt-4 font-semibold text-muted-foreground'
                  >
                     Caption
                  </label>
                  <input
                     type='text'
                     id='caption'
                     placeholder='Enter caption..'
                     className='border-2 p-5 placeholder:p-1 rounded-lg placeholder:text-sm'
                     onChange={handleInput}
                  />
               </div>
               <div className='mt-5 flex flex-col gap-2 border-2 border-dashed max-h-[340px] h-[300px] rounded-lg p-2 justify-center items-center'>
                  <FaSave className='text-6xl absolute' />
                  <div className='flex  flex-col items-center justify-center'>
                     <input
                        type='file'
                        onChange={(e) => {
                           setFile(e.target.files?.[0]);
                           alert("file selected! Proceed to upload image");
                        }}
                        className=' h-[220px] opacity-0 w-full cursor-pointer'
                     />
                  </div>
                  <button
                     onClick={async () => {
                        if (file) {
                           const res = await edgestore.publicFiles.upload({
                              file,
                              onProgressChange: (progress) => {
                                 // you can use this to show a progress bar
                                 console.log(progress);
                              },
                           });
                           if (res && res.url) {
                              setImageUrl(res.url);
                              console.log("Image URL:", res.url);
                           }
                        }
                     }}
                     className='cursor-pointer mt-5 text-center rounded-lg bg-slate-400 w-[100%] px-2 py-3'
                  >
                     Upload
                  </button>
                  <button onClick={handleSubmit}>submit</button>
               </div>
            </div>
         </div>
         <div>
            {results.map((e) => {
               return (
                  <>
                     <div
                        key={e._id}
                        className='border-black border-2 m-10 w-fit'
                     >
                        <h1>{e.caption}</h1>
                        <img
                           src={e.memeUrl}
                           alt='no img to show'
                           className='h-[300px] w-fit'
                        />
                     </div>
                  </>
               );
            })}
         </div>
      </>
   );
};

export default page;
