'use client'
import Image from "next/image"
import React,{useRef,useEffect, useState} from "react";
const Navbar = () => {
    const hamburger = useRef(null);
    const [activeRow, setActiveRow] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setActiveRow((prev) => (prev + 1) % 3);
        }, 700);
        return () => clearInterval(interval);
      }, []);

  return (
    <div className='navbar'>
        <div ref={hamburger} className="w-[27px] h-[27px] hover:cursor-pointer ">
          <div className="grid grid-cols-3 gap-[1.588px]">
            {[...Array(9)].map((_, i) => {
              const row = Math.floor(i / 3);
              return (
                <div
                  key={i}
                  className="h-[7.941px] border rounded-[0.5px]"
                  style={{
                    background: row === activeRow ? "#FAFBFB" : "#2D2D2D",
                    border: row === activeRow ? "#FAFBFB" : "#2D2D2D",
                    transition: "background 0.3s"
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <Image src="/favicon.svg" alt="avasya-logo" width={221.999} height={61.827}  />
        <div className="w-auto h-[48px] px-3 py-[17px] bg-join uppercase font-[400] text-[14px] rounded-sm hover:cursor-pointer">Join reasearch team</div>

           
    </div>
  )
}

export default Navbar