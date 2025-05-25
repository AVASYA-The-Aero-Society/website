import React, { useState, useEffect , useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
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

  useGSAP(() => {
    if (hamburger.current) {
      // Select all dots in the hamburger menu
      const dots = Array.from(hamburger.current.querySelectorAll('div'));
  
      // Group dots into rows (3 dots per row)
      const rows = [
        dots.slice(0, 3), // First row
        dots.slice(3, 6), // Second row
        dots.slice(6, 9), // Third row
      ];
  
      // Create a GSAP timeline
      const tl = gsap.timeline({ 
        repeat: -1, // -1 = infinite loops
        repeatDelay: 0.5 // Optional pause between loops
      });
      
  
      // Animate each row sequentially
      rows.forEach((row, index) => {
        tl.to(row, {
          scale: 1.5, // Scale up the dots
          duration: 0.5,
          stagger: 0.1, // Stagger animation for each dot in the row
          ease: 'power1.out', // Smooth easing for animation
        }, index * 0.5) // Delay each row animation by its index * 0.5 seconds
        .to(row, {
          scale: 1, // Scale back down to original size
          duration: 0.5,
          stagger: 0.1,
          ease: 'power1.in',
        }, index * 0.5 + 0.5); // Start scaling down after scaling up finishes
      });
    }
  }, [hamburger]);
  
  
  
  useGSAP(() => {
    // Split text into individual characters
    const mainHeadingSplit = new SplitType('.main-heading', { types: 'chars' });
    const subheadingSplit = new SplitType('.subheading', { types: 'chars' });
    
    const mainChars = mainHeadingSplit.chars;
    const subChars = subheadingSplit.chars;
    
    
    // Calculate string positions
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

    // Set initial states - only first letter visible
    gsap.set(mainChars.slice(1), { color: '#555', opacity: 0.5 });
    gsap.set(subChars.slice(aryabhattaEnd + 1), { color: '#555', opacity: 0.5 });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeAnimation.current,
        start: 'top top',
        end: 'bottom 0%',
        // markers:true,
        scrub: 3,
        pin: true,
      },
    });

    // Animate each section in parallel (skipping the first 'A' which is already visible)
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
      }, index  * 0.3); // Same position parameter for parallel animation
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
              <div className="text-white flex justify-center font-(family-name:BebasNeue) font-[600] tracking-[1.68px]">
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
      <div ref={homeAnimation}>
        <header className="flex justify-between items-center p-2 sticky ">

          <div ref={hamburger} className="w-6 h-6 hover:cursor-pointer">
            <div className="grid grid-cols-3 gap-0.5">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white"></div>
              ))}
            </div>
          </div>
          <img src="./favicon.svg" alt="" width={205} />
          <button className="text-sm border border-white px-4 py-2 hover:bg-white hover:text-black hover:cursor-pointer transition">
            Join Research Team
          </button>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen">
          <h1 className="main-heading text-[22vw] font-bold uppercase tracking-wide text-center leading-none">
            AVASYA
          </h1>
          <p className="subheading text-[1.5rem] w-[555px] font-bold text-white-400 uppercase tracking-wide text-center">
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
