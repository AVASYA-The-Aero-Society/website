import React, { useState, useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
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
      <div id='home-page' className="bg-[#161616] overflow-x-hidden">
        <div className="navbar flex justify-between p-2.5">
          <div className="hamburger">
            
          </div>
          <div className="logo">
            <img src="/favicon.svg" alt="avasya-logo" className="w-[188px]" />
          </div>
          <button className="text-white border-none bg-[#2D2D2D] px-2 rounded">JOIN AVASYA TEAM</button>
        </div>
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          
            <div className="avasya-text-container text-[BebasNeue] text-[21rem] font-bold tracking-widest flex items-center justify-center">
              <h1>A</h1>
              <h1>V</h1>
              <h1>A</h1>
              <h1>SYA</h1>
            </div>
            <div className="w-[22rem] full-form">
              <p className="text-[#626262] text-center text-[1.2rem] font-bold uppercase">Aryabhatta Vymanika and Antariksha Shastriya Society</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
