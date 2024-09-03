import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
   <nav className='flex items-center justify-between px-8 py-3 bg-gray-600 '>
    <Link className='text-white' href={"/"}>ADMIN Home</Link>
    <Link className='p-2 bg-white' href={"/addTopic"}>Add Topic</Link>
   </nav>
  )
}

export default Navbar
