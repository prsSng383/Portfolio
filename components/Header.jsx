import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
            Hi! I'm Paras Singh<Image src={assets.hand_icon} alt='' className='w-6' />
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>
            Full Stack Web Developer based in India.
        </h1>
        <p className='max-w-2xl mx-auto'>
             I specialize in building responsive, scalable, and user-friendly web applications using popular tech stacks including HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and more. 
             I enjoy working across both frontend and backend, and I'm always eager to learn, experiment, and grow with every new challenge.
        </p>
        
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 '>contact me  <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
            <a href="/Paras Singh_CV.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.download_icon} alt='' className='w-4' /></a>
        </div>

    </div>
  )
}

export default Header