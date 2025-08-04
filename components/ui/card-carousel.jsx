"use client";
import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"
import { assets } from "@/assets/assets";
import WrapButton from "./wrap-button";

export const CardCarousel = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  ` 
  const href= "/about"

  return (
    (<section className="w-ace-y-4">
      <style>{css}</style>
      <div
        className="mx-auto mt-6 w-full max-w-5xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
        <div
          className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          
          <div className="w-full">
             <Badge
            variant="outline"
            className="absolute left-4 top-6 rounded-[14px] border border-black/10 text-base md:left-6">
            <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
            Latest Work
          </Badge>
           <WrapButton  className="absolute right-4 top-6 md:right-6"  href={href} children="Show More"/>
          </div>
          
          <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
            <div className="flex gap-2">
              <div>
                <h3 className="text-4xl opacity-85 font-bold tracking-tight">
                  Projects
                </h3>
                <p>Creating Something Daily.</p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}>
                {/* {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl">
                      <Image
                        src={image.src}
                        width={500}
                        height={500}
                        className="size-full rounded-xl"
                        alt={image.alt} />
                    </div>
                  </SwiperSlide>
                ))}
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl">
                      <Image
                        src={image.src}
                        width={200}
                        height={200}
                        className="size-full rounded-xl"
                        alt={image.alt} />
                    </div>
                  </SwiperSlide>
                ))} */}
                 { images.map((project , index)=>(
                  <SwiperSlide key={index}>
                        <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage:`url(${project.bgImage})`}}>
                          <Image
                        src={project.src}
                        width={500}
                        height={500}
                        className="size-full rounded-xl"
                        alt={project.alt} />
                           <a href={project.url} target='_blank'><div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                 <h2 className='font-semibold'>{project.title}</h2>
                                 <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>

                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                 <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                </div>    
                            </div>
                            </a>                         
                        </div>
                       </SwiperSlide> 
                    ))}
                     { images.map((project , index)=>(
                  <SwiperSlide key={index}>
                        <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage:`url(${project.bgImage})`}}>
                          <Image
                        src={project.src}
                        width={500}
                        height={500}
                        className="size-full rounded-xl"
                        alt={project.alt} />
                           <a href={project.url} target='_blank'><div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                 <h2 className='font-semibold'>{project.title}</h2>
                                 <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>

                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                 <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                </div>    
                            </div>
                            </a>                         
                        </div>
                       </SwiperSlide> 
                    ))}
                 
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}
