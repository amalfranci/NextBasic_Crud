import Link from 'next/link'
import React from 'react'
import { MdDeleteForever } from "react-icons/md";

function Button() {
  return (
    <div className='text-red-600'> <Link href={"/editTopic/123"}>
    <MdDeleteForever size={24} className=''/>
</Link></div>
  )
}

export default Button