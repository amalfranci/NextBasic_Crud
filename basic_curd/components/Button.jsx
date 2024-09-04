'use client'
import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { useRouter } from 'next/navigation';

function Button({id}) {
  const router=useRouter()

  
 const removeTopic= async()=>{
  const confirmed= confirm('are you sure');

  if(confirmed){

   const res= await fetch(`http://localhost:3000/api/topics?id=${id}`,{
      method:"DELETE",
    });
    if(res.ok)
      {
        router.refresh()
      }
  }
 
 }
  return (
    <button onClick={removeTopic} className='text-red-600'>
    <MdDeleteForever size={24} className=''/>
</button>
  )
}

export default Button