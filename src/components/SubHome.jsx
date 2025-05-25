import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SubHome = () => {
  const outlineAnim = useRef(null);
  const Outlinecontainer = useRef(null);
  const [imageSrc, setImageSrc] = useState("./what-we-do.png");

  useGSAP(
    () => {
      if (outlineAnim.current) {
        const items = outlineAnim.current.querySelectorAll("div");
        const tl = gsap.timeline({ repeat: -1 });

        // Sequential animation for each item
        items.forEach((item, index) => {
          tl.to(item, {
            color: "#fff",
            borderColor: "#fff",
            duration: 0.8,
            onStart: () => handleImageChange(index),
          }).to(
            items[index - 1] || items[0],
            {
              color: "#555",
              borderColor: "#555",
              duration: 0.5,
            },
            ">"
          );
        });
      }
    },
    { scope: Outlinecontainer }
  );

  const handleImageChange = (index) => {
    const imageSources = [
      "./what-we-do.png", // Default image
    ];

    setImageSrc(imageSources[index] || imageSources[0]);
  };

  return (
    <div ref={Outlinecontainer}>
      <div className="uppercase text-center font-bold text-gray-400">
        what we do
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 pt-10 px-20 pb-20">
        <div className="w-75 h-105 col-span-1 sm:justify-self-center">
          <div className="text-center pt-10">
            In research we focused on tackling on solving complex problems.
          </div>
          <div ref={outlineAnim}>
            <div className=" border-b-2 h-10 pt-2 ">Reasearch</div>
            <div className="border-[#555] text-[#555] border-b-2 h-10 pt-2 ">
              Project
            </div>
            <div className="border-[#555] text-[#555] border-b-2 h-10 pt-2 ">
              Applications
            </div>
            <div className="border-[#555] text-[#555] border-b-2 h-10 pt-2 ">
              Workshops
            </div>
            <div className="border-[#555] text-[#555] border-b-2 h-10 pt-2 ">
              Hackathons
            </div>
            <div className="border-[#555] text-[#555] border-b-2 h-10 pt-2 ">
              Informative sessions
            </div>
            <div className="border-[#555] text-[#555] border-b-2 h-10 pt-2 ">
              In person meetups
            </div>
          </div>
        </div>
        <div className="col-span-2 relative md:col-span-1 lg:col-span-2 h-full flex justify-center md:justify-start items-start md:place-items-center">
          <div className="relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 flex items-end p-4">
              <div className="text-white text-lg">{/* The text you want at the bottom */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam, sapiente harum rerum, repellat sed nihil reiciendis inventore vitae quis sit incidunt ad blanditiis similique?
              </div>
            </div>
            <img 
              src={imageSrc} 
              alt="what we do" 
              className="w-full h-full object-cover rounded-xl" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHome;
