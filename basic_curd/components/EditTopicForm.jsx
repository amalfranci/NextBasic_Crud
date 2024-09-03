import React from 'react'

function EditTopicForm() {
  return (
    <form className='flex flex-col gap-3 mt-3 '>
    <input className='px-8 py-2 border border-slate-500' placeholder='Topics Title' type='text'/>
    <input className='px-8 py-2 border border-slate-500' placeholder='Topics Description' type='text'/>
    <button className='font-bold text-white bg-green-600 h-15 w-28'>Update Topics</button>
   </form>
  )
}

export default EditTopicForm
