import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Dark Overlay  */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      <div className="stars absolute inset-0"></div>
      <div className="galaxy-video absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full opacity-50"
        >
          <source src="bgvid.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 bg-transparent z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-2xl md:text-3xl font-bold">
            Avasya
          </a>
          <div className="text-lg md:text-xl font-bold">The Aero Society</div>
        </div>
      </nav>

      {/* Main Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="font-bold mb-8 animate-pulse text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.5rem, 5vw, 6rem)]">
          Avasya: The Aero Society | Coming Soon
        </h1>
        <span className="mb-12 max-w-3xl font-thin text-sm sm:text-base md:text-lg lg:text-[clamp(1rem, 2vw, 2rem)]">
          We're working hard to bring you something amazing. Stay tuned for our
          grand launch!
        </span>

        {/* Button */}
        <div>
          <button className="px-5 py-3 bg-blue-600/80 rounded-lg hover:scale-110 duration-75">
            <a href=" https://forms.gle/HUUB9kMQc2bBGWSeA" target="_blank" rel="noopener noreferrer">
              Join Us Now
            </a>
          </button>
        </div>

        {/* Contact Us Section */}
        <div className="mt-12 flex items-center justify-center space-x-4">
          <div className="text-sm md:text-base lg:text-lg">Contact Us At:</div>
          <a
            href="https://www.instagram.com/aeroclub.iitmbs/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl sm:text-3xl hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/theaeroclub/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl sm:text-3xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:aero.society@study.iitm.ac.in"
            target="_blank"
            rel="noreferrer"
            className="text-2xl sm:text-3xl hover:text-yellow-400 transition-colors duration-300"
          >
            <IoMailOutline />
          </a>
        </div>
      </main>

      {/* Footer */}
      <div className="fixed bottom-0 left-[50%] translate-x-[-50%] p-2 text-center">
        <hr className="relative hidden lg:block" />
        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg">
          Avasya Society © Copyright 2024
        </h2>
      </div>
    </div>
  );
};

export default App;
