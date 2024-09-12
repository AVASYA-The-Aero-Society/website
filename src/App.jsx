import React, { useState, useEffect, useRef } from "react";
import { FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          Your browser does not support the video tag.
        </video>
      </div>
      <nav className="absolute top-0 left-0 right-0 bg-transparent z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-3xl font-bold">
            Avasya
          </a>
          <div className="text-xl font-bold">The Aero Society</div>
        </div>
      </nav>
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="font-bold mb-8 animate-pulse text-4xl sm:text-5xl md:text-[clamp(2.5rem, 5vw, 6rem)]">
          Avasya: The Aero Society | Coming Soon
        </h1>
        <span className="mb-12 max-w-3xl font-thin text-base sm:text-lg md:text-[clamp(1rem, 2vw, 2rem)]">
          We're working hard to bring you something amazing. Stay tuned for our
          grand launch!
        </span>
        {/* <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex items-center border-b-2 border-white py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Enter your email"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="flex-shrink-0 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
              type="submit"
            >
              Notify Me
            </button>
          </div>
        </form>
        {isSubmitted && (
          <p className="mt-4 text-green-400 animate-fade-in-down text-sm sm:text-base md:text-lg">
            Thank you for subscribing! We'll keep you updated.
          </p>
        )} */}
        <div>
          <button className="px-4 py-2 bg-white/50 rounded-lg hover:scale-110 hover:border-2 duration-75">
            <a href=" https://forms.gle/HUUB9kMQc2bBGWSeA" target="_blank">Join Us Now</a>
          </button>
        </div>

        <div className="mt-16 flex justify-center ">
          <div className="mx-2 flex items-center">Contact Us At : </div>
          <a
            href=" https://www.instagram.com/aeroclub.iitmbs/"
            target="_blank"
            rel="noreferrer"
            className="text-3xl mr-4"
          >
            <FaInstagram size={40} />
          </a>
          <a
            href="https://www.linkedin.com/company/theaeroclub/"
            target="_blank"
            rel="noreferrer"
            className="text-3xl mr-4"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="mailTo:aero.society@study.iitm.ac.in"
            target="_blank"
            rel="noreferrer"
            className="text-3xl"
          >
            <IoMailOutline size={42} />
          </a>
        </div>
      </main>
      <div className="fixed bottom-0 left-[50%] translate-x-[-50%] p-2 text-center">
        <hr className="relative w-[500px]" />
        <h2 className="text-xs sm:text-sm md:text-base">
          Avasya Society @ Copyright- 2024
        </h2>
      </div>
    </div>
  );
};

export default App;
