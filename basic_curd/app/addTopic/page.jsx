'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function AddTopic() {
  const   router= useRouter()

  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')

  const  handleSubmit= async(e)=>{
    e.preventDefault()
  
if(!title || !description)
  {
    alert("Title and description are required")
  }   
  
  try{

    const res = await fetch("http://localhost:3000/api/topics",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({title,description}),
    })
    if(res.ok){
      router.push('/')
    }else{
      throw new Error("failed to create topic,try again")
    }
    
  }
  catch(error)
  {
    console.log("form have some eror",error)
  }
  
  }
  
  return (
   <form className='flex flex-col gap-3 mt-3 ' onSubmit={handleSubmit}>
    <input className='px-8 py-2 border border-slate-500' placeholder='Topics Title' value={title} onChange={(e)=>setTitle(e.target.value)} type='text'/>
    <input className='px-8 py-2 border border-slate-500' placeholder='Topics Description' value={description} onChange={(e)=>setDescription(e.target.value)} type='text'/>
    <button className='w-24 h-10 font-bold text-white bg-green-600'>Add Topics</button>
   </form>
  )
}

export default AddTopic
