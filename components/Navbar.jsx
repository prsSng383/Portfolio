import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const sideMenu =  useRef();
    const [isScroll , setIsScroll] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll' , ()=>{

        if(scrollY > 50){
               setIsScroll(true)
        }else{
              setIsScroll(false)
        }
      })
    },[])

    const openMenu = () =>{
      sideMenu.current.style.transform = "translateX(-16rem)"
    }
    const closeMenu = () =>{
      sideMenu.current.style.transform = "translateX(16rem)"
    }
    
  return (
    <>

     <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
       <Image src={assets.header_bg_color} alt='' className='w-full' />
     </div>
 
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg/50 backdrop-blur-lg shadow-sm' : ''}`}>
        {/* Left Part */}
        <a href="#top">
            <Image src={assets.my_logo} alt="Paras Singh" className='w-60 cursor-pointer' />
        </a>
        {/* Middle Part */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg/50 shadow-xl"}`}>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact Me</a></li>
        </ul>
        {/*Right Part*/}

        <div className='flex items-center gap-4'>
            
            <button><Image src={assets.moon_icon} alt='' className='w-6' /></button>

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact <Image className='w-3' src={assets.arrow_icon} alt='arrow-logo' /> </a>
        
            <button className='block md:hidden ml-3'><Image src={assets.menu_black} alt='' className='w-6' onClick={openMenu} /></button>
        </div>

        {/* For mobile the menu items */}
         
         <ul  ref={sideMenu} className='bg-rose-50 md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500'>
 
             <div className='absolute top-6 right-6'>
              <Image src={assets.close_black} alt='' className='w-3' onClick={closeMenu}/>
             </div>
           
            <li><a href="#top" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About Me</a></li>
            <li><a href="#work" onClick={closeMenu}>My Work</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
         </ul>

      </nav>
    </>
  )
}

export default Navbar