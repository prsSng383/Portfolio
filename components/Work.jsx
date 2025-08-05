"use client"
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CardCarousel } from './ui/card-carousel'
import WrapButton from './ui/wrap-button'



const Work = () => {
  
  const images = [
    { src: "/work_7.png", alt: "Image 1" ,  title: 'Frontend project',description: 'Web Design & SEO',url:"https://prssngmovieapp.vercel.app/"  },
    { src: "/work_6.png", alt: "Image 2" , title: 'JavaScript project',description: 'Fun-Game',  url: "https://bubble-game-with-js.vercel.app/" },
    { src: "/work_8.png", alt: "Image 3" , title: 'Full-Stack project', description: 'AI Image-Generator',url: "https://github.com/prsSng383/AI-image-Generation"},
    { src: "/work_9.png", alt: "Image 4" , title: 'Full-Stack project', description: 'MERN_Auth_Sys',url: "https://mern-auth-system-frontend-opal.vercel.app"},
    { src: "/work_10.png", alt: "Image 5" , title: 'Full-Stack project', description: 'CHAT_APP_Scoket.io',url: "https://chat-app-frontend-sage-theta.vercel.app/login"},
  ]
  return (
    // <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
           
    //        <h4 className='text-center mb-2 text-lg'>
    //             My Portfolio
    //        </h4>
    //        <h2 className='text-center text-5xl'>
    //             My latest Work!
    //        </h2>
    //        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
    //             Welcome to my web-development portfolio! Explore a collection of projects showcasing my experience in the full-stack development.
    //        </p>
            
    //         <div className='grid grid-cols-4 my-10 gap-5'>
    //             {
    //                 workData.map((project , index)=>(
    //                     <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage:`url(${project.bgImage})`}}>
    //                        <a href={project.url} target='_blank'><div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
    //                             <div>
    //                              <h2 className='font-semibold'>{project.title}</h2>
    //                              <p className='text-sm text-gray-700'>{project.description}</p>
    //                             </div>

    //                             <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
    //                              <Image src={assets.send_icon} alt='send icon' className='w-5' />
    //                             </div>    
    //                         </div>
    //                         </a>                         
    //                     </div>
    //                 ))
    //             }
    //         </div>
            
    //         <Link href="/about" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500'>Show more <Image src={assets.right_arrow_bold} alt='arrow icon' className='w-4' /> </Link>

    // </div>

    <div id='work' className='w-full px-[12%] py-10'>
    <h4 className='text-center mb-2 text-lg'>
                 My Portfolio
        </h4>
            <h2 className='text-center text-5xl'>
                 My latest Work!
            </h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
                 Welcome to my web-development portfolio! Explore a collection of projects showcasing my experience in the full-stack development.
            </p>
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
       
      
    </div>
  )
}

export default Work