import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center text-lg mb-2'>Introduction</h4>
        <h1 className='text-center text-5xl '>About Me</h1>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            {/* Left */}
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src='/Portfolio_pic.png' width={900} height={900} alt='user' className='w-full rounded-3xl shadow-xl/70' />
            </div>
            {/* Right */}
            <div className='flex-1'>
                 <p className='max-w-2xl mb-8'>
                    I enjoy working across both frontend and backend, and I'm always eager to learn, experiment, and grow with every new challenge.
                 </p>
                  
                  <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                     {infoList.map(({icon , iconDark , title , description} , index)=>(
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                            <Image src={icon} alt={title} className='w-7 mt-3'  />
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                     ))}
                  </ul>

                  <h4 className='my-6 text-gray-700'>Tools I Use</h4>

                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool , index)=>(
                        <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-800 rounded-lg cursor-pointer hover:-translate-y-2 duration-500'>  
                            <Image src={tool} alt='Tool' className='w-5 sm:w-9' />
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    </div>
  )
}

export default About