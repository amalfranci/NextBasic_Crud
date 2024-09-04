'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function EditTopicForm({id ,title,description}) {
  const router =useRouter()

  const [newTitle,setNewTitle]=useState(title)
  const [newDescription,setNEWdescription]=useState(description)

  const handleSubmit=async(e)=>{
    e.preventDefault()
     try {
      if(!newTitle || !newDescription)
        {
          throw new Error("must fill the data on form")
        }
        const res= await fetch(`http://localhost:3000/api/topics/${id}`,{
          method:"PUT",
          headers:{
            "Content-type":"application/jsopn",
            
          },
          body:JSON.stringify({newTitle,newDescription})
        })
        if(!res.ok)
        {
          throw new Error("have some error")
        }
        
        router.push("/")
      
     } catch (error) {
     console.log(error) 
     }
  }
  return (
    <form className='flex flex-col gap-3 mt-3 ' onSubmit={handleSubmit}>
    <input className='px-8 py-2 border border-slate-500' onChange={(e)=>setNewTitle(e.target.value)} value={newTitle} placeholder='Topics Title' type='text'/>
    <input className='px-8 py-2 border border-slate-500' placeholder='Topics Description'  onChange={(e)=>setNEWdescription(e.target.value)} value={newDescription} type='text'/>
    <button className='font-bold text-white bg-green-600 h-15 w-28'>Update Topics</button>
   </form>
  )
}

export default EditTopicForm
