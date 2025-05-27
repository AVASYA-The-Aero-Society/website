import React, { useState, useEffect , useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'
import SubHome from "../components/SubHome";
import Achievement from "../components/Achievement";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const homeAnimation = useRef(null)
  const hamburger = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time) {

      lenis.raf(time);
      requestAnimationFrame(raf);
      }

    requestAnimationFrame(raf);
  },[])

  useGSAP(() => {
    if (hamburger.current) {
      const dots = Array.from(hamburger.current.querySelectorAll('div'));
  
      const rows = [
        dots.slice(0, 3), 
        dots.slice(3, 6), 
        dots.slice(6, 9), 
      ];
  
      // Create a GSAP timeline
      const tl = gsap.timeline({ 
        repeat: -1, 
        repeatDelay: 0.5 
      });
      
  
      rows.forEach((row, index) => {
        tl.to(row, {
          // scale: 1.5,
          color: '#FAFBFB',
          duration: 0.5,
          stagger: 0.1, 
        }, index * 0.5) 
        .to(row, {
          scale: 1, 
          color: '#626262',
          duration: 0.5,
          stagger: 0.1,
        }, index * 0.5 + 0.5); 
      });
    }
  }, [hamburger]);
  
  
  
  useGSAP(() => {
    const mainHeadingSplit = new SplitType('.main-heading', { types: 'chars' });
    const subheadingSplit = new SplitType('.subheading', { types: 'chars' });
    
    const mainChars = mainHeadingSplit.chars;
    const subChars = subheadingSplit.chars;
    
    
    const aryabhattaEnd = "ARYABHATTA".length - 1;
    const vymanikAndEnd = "ARYABHATTAVYMANIKAAND".length - 1;
    const antarikShaEnd = "ARYABHATTAVYMANIKAANDANTARIKSHA".length - 1;
    
    const mapping = [
      { 
        mainChars: [mainChars[0]], // First 'A'
        subRange: { start: 0, end: aryabhattaEnd }
      },
      { 
        mainChars: [mainChars[1]], // 'V'
        subRange: { start: aryabhattaEnd + 1, end: vymanikAndEnd }
      },
      { 
        mainChars: [mainChars[2]], // Second 'A'
        subRange: { start: vymanikAndEnd + 1, end: antarikShaEnd }
      },
      { 
        mainChars: [mainChars[3], mainChars[4], mainChars[5]], // 'SYA' (grouped)
        subRange: { start: antarikShaEnd + 1, end: subChars.length - 1 }
      }
    ];

    gsap.set(mainChars.slice(1), { color: '#555', opacity: 0.5 });
    gsap.set(subChars.slice(aryabhattaEnd + 1), { color: '#555', opacity: 0.5 });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeAnimation.current,
        start: 'top top',
        end: 'bottom 0%',
        scrub: 3,
        pin: true,
      },
    });

    mapping.forEach((section, index) => {
      if (index == 0 ) return;
      tl.to(section.mainChars, {
        color: '#fff',
        opacity: 1,
        duration: 0.3,
      }, index  * 0.3);
      
      tl.to(subChars.slice(section.subRange.start, section.subRange.end + 1), {
        color: '#fff',
        opacity: 1,
        duration: 0.3,
      }, index  * 0.3); 
    });
  }, { scope: homeAnimation });
  
  return (
    <>
      {loading && (
        <div
          id="loadingPage"
          className="bg-[#161616] fixed w-full h-full flex flex-col items-center justify-center z-50"
        >
          <div className="loading flex flex-col items-center">
            <img src="/favicon.svg" alt="avasya-logo" />
            <div className="mt-12 w-[257px] ">
              <div className="text-white flex justify-center font-[600] tracking-[1.68px]">
                LOADING
              </div>
              <div className="loading-bar mt-1"></div>
            </div>
          </div>
          <div className="footer-text fixed bottom-0">
            <p className="text-[#626262] w-[590px] text-center">
              Focuses on unmanned aircraft systems and aerospace vehicles.
              Develops aviation and energy technologies.
            </p>
          </div>
        </div>
      )}

    <div className="min-h-screen bg-[#161616] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-2 sticky top-0 z-22  backdrop-blur-2xl py-6">

        <div ref={hamburger} className="w-6 h-6 hover:cursor-pointer m-6">
          <div className="grid grid-cols-3 gap-0.5">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 border rounded-[0.5px] bg-[#2D2D2D]"></div>
            ))}
          </div>
        </div>
        <img src="./favicon.svg" alt="" width={205}  />
        <button className="text-sm border bg-[#2D2D2D] border-[#2D2D2D] rounded-sm px-4 py-2 hover:bg-white hover:text-black hover:cursor-pointer transition uppercase font-medium">
          Join Research Team
        </button>
      </header>
      <div ref={homeAnimation}>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen overflow-hidden">
          <h1 className="main-heading text-[22vw] uppercase tracking-wide text-center leading-none text-nowrap ">
            AVASYA
          </h1>
          <p className="subheading text-[1.5rem] w-[555px] font-bold text-white-400 uppercase tracking-wide text-center ">
            Aryabhatta Vymanika and Antariksha Shastriya Society
          </p>
        </section>
      </div>
      <div>
        <SubHome />
        <Achievement />   
      </div>
      
    </div>
    </>
  );
};

export default Home;
