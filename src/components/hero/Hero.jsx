import React from "react";
import './hero.css';

export default function Hero() {

  return (
    <div className="hero-background h-screen dark:bg-dark-600 px-0 overflow-hidden relative">
      <div className="mb-8 mx-20 pt-48">
        <h1 className="text-5xl text-center dark:text-dark-200 font-Arimo font-semibold text-gray-900 mb-4">
          SMVDU College Electrical Vehicle Team
        </h1>
      </div>

      {/* Infinite scrolling text at the bottom */}
      <div className="scroll-container">
        <div className="scroll-content">
          <p className="text-lg">
            Welcome to the official website of the SMVDU College team participating in the SAE BAJA competition. Follow our journey as we design and build an electric vehicle for this prestigious event.
          </p>
        </div>
      </div>
    </div>
  );
}







      {/* <div className="flex space-x-4 mb-14 mt-2">
        <button className="px-6 py-2 bg-orange-700 hover:bg-orang-100 rounded-full text-white font-bold transition duration-300">
          View More
        </button>
        <button className="px-6 py-2 bg-white rounded-full text-orange-700 border-1 border-orange-700 font-semibold hover:text-white hover:border-orang-100 hover:bg-orang-100 transition duration-300">
          Meet the Team
        </button>
      </div> */}