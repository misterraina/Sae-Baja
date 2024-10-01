import React from "react";
import './hero.css';
import bgPhoto from '../../assets/orLanding.webp'

export default function Hero() {

  return (
    <div className="hero-background flex flex-col h-screen dark:bg-dark-600 justify-center items-center px-0 overflow-hidden pb-8 pt-52">
      <div className="mb-8 mx-20">
        <h1 className="text-5xl text-center dark:text-dark-200  font-serif font-extrabold text-gray-900 mb-4">
          SMVDU College Electrical Vehicle Team
        </h1>
        <p className="text-lg text-gray-700 mt-6 dark:text-dark-200 ">
          Welcome to the official website of the SMVDU College team
          participating in the SAE BAJA competition. Follow our journey as we
          design and build an electric vehicle for this prestigious event.
        </p>
      </div>

      <div className="flex space-x-4 mb-14 mt-2">
        <button className="px-6 py-2 bg-orange-700 hover:bg-orang-100 rounded-full text-white font-bold transition duration-300">
          View More
        </button>
        <button className="px-6 py-2 bg-white rounded-full text-orange-700 border-1 border-orange-700 font-semibold hover:text-white hover:border-orang-100 hover:bg-orang-100 transition duration-300">
          Meet the Team
        </button>
      </div>

      
    </div>
  );
}
