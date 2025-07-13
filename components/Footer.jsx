import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.my_logo} alt='logo' className='w-60 mx-auto mb-2' />

            <div className='w-max flex items-center gap-2 mx-auto'>
              <Image src={assets.mail_icon} alt='mail icon' className='w-6' />
              paras250701@gmail.com
            </div>
        </div>
      
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
          <p>© 2025 Paras Singh. All rights reserved.</p>
          <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li> <a target='_blank' href="https://github.com/prsSng383" className='text-blue-500 hover:underline'>Github</a></li>
            <li> <a target='_blank' href="https://www.linkedin.com/in/paras-singh-683778218/" className='text-blue-500 hover:underline'>Linkedin</a></li>
            <li> <a target='_blank' href="https://x.com/paras250701" className='text-blue-500 hover:underline'>Twitter / X</a></li>
          </ul>
        </div>

    </div>
  )
}

export default Footer