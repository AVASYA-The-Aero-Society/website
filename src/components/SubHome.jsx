import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SubHome = () => {
  const outlineAnim = useRef(null);
  const Outlinecontainer = useRef(null);

  useGSAP(() => {
    if (outlineAnim.current) {
      const items = outlineAnim.current.querySelectorAll('div');
      const tl = gsap.timeline({repeat:-1});

      // Sequential animation for each item
      items.forEach((item, index) => {
        tl.to(item, {
          color: '#fff',
          borderColor: '#fff',
          duration: 0.3
        })
        .to(items[index-1] || items[0], {
          color: '#555',
          borderColor: '#555',
          duration: 0.5,
        },'>');
      });
    }
  }, { scope: Outlinecontainer });


  return (
    <div ref={Outlinecontainer}>
        <div className='uppercase text-center font-bold text-gray-400'>
            what we do
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 pt-10 px-20 pb-20'>
            <div className='w-75 h-105 col-span-1'>
              <div className='text-center pt-10'>
                In research we focused on tackling on solving complex problems.
              </div>
              <div ref={outlineAnim}>
                <div className=' border-b-2 h-10 pt-2 '>Reasearch</div>
                <div className='border-[#555] text-[#555] border-b-2 h-10 pt-2 '>Project</div>
                <div className='border-[#555] text-[#555] border-b-2 h-10 pt-2 '>Applications</div>
                <div className='border-[#555] text-[#555] border-b-2 h-10 pt-2 '>Workshops</div>
                <div className='border-[#555] text-[#555] border-b-2 h-10 pt-2 '>Hackathons</div>
                <div className='border-[#555] text-[#555] border-b-2 h-10 pt-2 '>Informative sessions</div>
                <div className='border-[#555] text-[#555] border-b-2 h-10 pt-2 '>In person meetups</div>
              </div>
            </div>
            <div className="rounded-[10px] bg-[linear-gradient(180deg,rgba(0,0,0,0)42.5%,#000_100%),url('./what-we-do.png')] bg-lightgray bg-cover bg-center bg-no-repeat col-span-2 "></div>
        </div>
    </div>
  )
}

export default SubHome