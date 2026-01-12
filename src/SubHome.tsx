"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SubHome = () => {
  const loadingAnimation = useRef<HTMLDivElement | null>(null);
  const [imageSrc, setImageSrc] = useState("/what-we-do.png");

  useGSAP(
    () => {
      if (loadingAnimation.current) {
        const items = loadingAnimation.current?.querySelectorAll(
          "div:not(.slimLoading)"
        );
        const tl = gsap.timeline({ repeat: -1 });

        items.forEach((item, index: number) => {
          const loadingBar = item.querySelector(".slimLoading");
          if (!loadingBar) return;

          tl.to(item, {
            color: "#fff",
            duration: 0.6,
            onStart: () => handleImageChange(index),
          })
            .to(
              loadingBar,
              {
                width: "100%",
                left: "0%",
                duration: 0.7,
                ease: "linear",
              },
              "<"
            )
            .to(loadingBar, {
              width: "0%",
              left: "100%",
              duration: 1,
              ease: "power1.in",
            })
            .set(loadingBar, {
              width: "0%",
              left: "0%",
            })
            .set(item, {
              color: "#555",
              duration: 0.3,
            },'<');
        });
      }
    },
    { scope: loadingAnimation }
  );

  const handleImageChange = (index: number) => {
    const imageSources = [
      "/what-we-do.png", // Default image
    ];

    setImageSrc(imageSources[index] || imageSources[0]);
  };

  const items = [
    "Research",
    "Project",
    "Applications",
    "Workshops",
    "Hackathons",
    "Informative sessions",
    "In person meetups",
  ];

  return (
    <div className="flex justify-center w-[1920px] py-[164.5px] px-[141px]">
      <div className="flex flex-col items-center gap-[64px] w-[1638px] shrink-0">
        <div className="font-archivo text-cgray text-[12px] font-[800] uppercase tracking-[0.68px]">
          what we do
        </div>
        <div className="flex justify-center items-center gap-16">
          <div className="flex flex-col w-[260px] items-start gap-[19px]">
            <p className="font-archivo text-white text-2xl font-normal tracking-normal">
              In research we focused on tackling on solving complex problems.
            </p>
            <div
              ref={loadingAnimation}
              className="flex flex-col items-start self-stretch relative"
            >
              {items.map((label, idx) => (
                <div
                  key={idx}
                  className=" h-10 pt-3 text-[24px] font-normal tracking-[0.48px] line-height-[27.607px] text-cgray font-otameal text-center"
                >
                  {label}
                  <div className="slimLoading absolute left-0 h-0.5 bg-white overflow-hidden">
                    <div
                      className="slimLoading-inner h-full bg-white rounded"
                      style={{ width: 0, left: 0, position: "absolute" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[24px] overflow-hidden">
            <Image src={imageSrc} alt="subhome" width={1200} height={673} priority={true} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_42.5%,_#000_100%)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHome;
