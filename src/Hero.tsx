'use client'
import React, { useEffect, useRef } from 'react';
import { Archivo } from 'next/font/google';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);


const archivo = Archivo({
  subsets: ['latin'],       
  weight: ['400', '700'],
  style: ['italic','normal'],          
});

const Hero = () => {

  const heroAnimation = useRef<HTMLDivElement>(null);
  const mainHeadingRef = useRef<HTMLDivElement>(null);
  const subHeadingRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
      const lenis = new Lenis();
      function raf(time : number) {
  
        lenis.raf(time);
        requestAnimationFrame(raf);
        }
  
      requestAnimationFrame(raf);

    },[])

    useGSAP(()=>{
      if(!heroAnimation.current || !mainHeadingRef.current || !subHeadingRef.current) return;
      
      const mainChars = mainHeadingRef.current.querySelectorAll('span > span');
      const subWords = subHeadingRef.current.querySelectorAll('span > span');

      const charToWordMap = [{
        char : mainChars[0],
        word : subWords[0]
      },
      {
        char : mainChars[1],
        word : subWords[1]
      },
      {
        char : mainChars[2],
        word : subWords[2]
      },
      {
        char : mainChars[3],
        word : subWords[3]
      }];

      console.log(mainChars);
      console.log(subWords);
      console.log(charToWordMap);

      gsap.set(mainChars,{ color: '#626262'});
      gsap.set(subWords,{ color: '#626262'});
      gsap.set([mainChars[0], subWords[0]],{ color: '#FAFBFB'});
        

      const tl = gsap.timeline({
              scrollTrigger: {
                trigger: heroAnimation.current,
                pin: true,
                start: 'top 20%',
                end: 'bottom 50%',
                scrub: 1,
                pinType: 'transform',
              },
            });
      
      charToWordMap.forEach((pair, index)=>{
        if (index === 0) return ;
        

        tl.to([pair.char, pair.word], {color: '#FAFBFB', duration: 0.3})
      });


      },[heroAnimation]);
      
    
    

    
  return (
    <div ref={heroAnimation}>
      <div className={`${archivo.className} italic h-[960px] ms-[87px] mt-[185px]`}>
        <div ref={mainHeadingRef} className='main-heading font-[700] text-[432px] w-[1746px] uppercase leading-none text-center'>
          <span>
            <span className='text-cwhite'>A</span>
            <span className='text-cgray'>V</span>
            <span className='text-cgray'>A</span>
            <span className='text-cgray'>Sya</span>
          </span>
        </div>
        <div ref={subHeadingRef} className="subheading text-[1.5rem] font-[700] w-[612px] h-[52px] uppercase tracking-wide text-center mx-[567px] leading-none">
          <span>
            <span className='text-cwhite'>Aryabhatta </span>
            <span className='text-cgray'>Vyamanika and </span>
            <span className='text-cgray'>Antariksha </span>
            <span className='text-cgray'>Shastriya society </span>
          </span>
        </div>

      </div>
    </div>
  )
}

export default Hero;