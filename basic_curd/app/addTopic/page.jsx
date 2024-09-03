import React from 'react'

function AddTopic() {
  return (
   <form className='flex flex-col gap-3 mt-3 '>
    <input className='px-8 py-2 border border-slate-500' placeholder='Topics Title' type='text'/>
    <input className='px-8 py-2 border border-slate-500' placeholder='Topics Description' type='text'/>
    <button className='w-24 h-10 font-bold text-white bg-green-600'>Add Topics</button>
   </form>
  )
}

export default AddTopic
