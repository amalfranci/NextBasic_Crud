import React from 'react'
import Button from './Button'
import Link from 'next/link'
import {HiPencilAlt} from "react-icons/hi";

function TopicsList() {
    
  return (
    <div className='flex justify-between p-2 mt-3 border '>
        <div>
            <h2>Title</h2>
            <div>description</div>
        </div>
        <div className='flex gap-6 p-3'>
        <Button/>
        <Link href={"/editTopic/123"}>
            <HiPencilAlt size={24}/>
        </Link>
          
        </div>
    </div>
  )
}

export default TopicsList