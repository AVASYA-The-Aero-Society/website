import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div
      id="loadingPage"
      className="fixed w-full h-full flex flex-col items-center justify-center z-5"
    >
      <div className="loading flex flex-col items-center">
        <Image src="/favicon.svg" alt="avasya-logo" width={836} height={118}/>
        <div className="mt-12 w-[257px] ">
          <div className="text-white flex justify-center font-[600] tracking-[1.68px]">
            LOADING
          </div>
          <div className="mt-1 h-4 w-[257px] bg-cgray overflow-hidden">
            <div className="h-full animate-loading "></div>
          </div>
        </div>
      </div>
      <div className="footer-text fixed bottom-7">
        <p className="text-cgray w-[590px] text-[14px] leading-none text-center">
          Focuses on unmanned aircraft systems and aerospace vehicles. Develops
          aviation and energy technologies.
        </p>
      </div>
    </div>
  );
};

export default Loading;
