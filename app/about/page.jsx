import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='bg-pink-200 min-h-screen flex items-center justify-center gap-3'>
      <div className='text-3xl border-none px-4 py-5 border-gray-400 text-white bg-gradient-to-r from-pink-700 to-pink-200 rounded-lg'>
        More Uploadings in Progress........
      </div>  
      <Link href="/"><button className='border border-gray-700 bg-black text-pink-200 px-3 py-2.5 rounded-full cursor-pointer text-sm'>Go to Home</button></Link>  
    </div>
  )
}

export default page