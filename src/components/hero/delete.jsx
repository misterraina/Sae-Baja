import React, { useEffect, useState } from "react";
import './hero.css';
import ph1 from '../../assets/img1.jpg';
import ph2 from '../../assets/img2.jpg';
import ph3 from '../../assets/img3.jpg';
import ph4 from '../../assets/img4.jpg';
import ph5 from '../../assets/img5.jpg';
import ph6 from '../../assets/img6.jpg';

export default function Hero() {
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimateLeft(true);
    const timer = setTimeout(() => {
      setAnimateRight(true);
    }, 1000); // Delay for the second row

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-6 overflow-hidden mb-8 mt-52">
      {/* Hero Content 1# */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-serif font-extrabold text-gray-900 mb-4">
          SMVDU College Electrical Vehicle Team
        </h1>
        <p className="text-lg text-gray-700 mt-6 ">
          Welcome to the official website of the SMVDU College team
          participating in the SAE BAJA competition. Follow our journey as we
          design and build an electric vehicle for this prestigious event.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-14 mt-2">
        <button className="px-6 py-2 bg-orange-700 hover:bg-gray-800 rounded-full text-white font-bold border-2 border-orange-700 transition duration-300">
          View More
        </button>
        <button className="px-6 py-2 bg-white hover:bg-orange-700 rounded-full text-orange-700 border-1 border-orange-700 font-semibold hover:text-white transition duration-300">
          Meet the Team
        </button>
      </div>

      {/* Row 1: Animated Horizontal Images (Group 1) */}
      <div className="w-full overflow-hidden relative">
        <div className={`flex space-x-6 ${animateLeft ? "animate-slide-left" : ""}`}>
          <img src={ph1} alt="Team" className="w-1/3 h-64 object-cover hover:scale-110 transition duration-300" />
          <img src={ph2} alt="Team" className="w-1/3 h-64 object-cover hover:scale-110 transition duration-300" />
          <img src={ph3} alt="Team" className="w-1/3 h-64 object-cover hover:scale-110 transition duration-300" />
        </div>
      </div>

      {/* Row 2: Animated Horizontal Images (Group 2) */}
      <div className="w-full overflow-hidden relative mt-8">
        <div className={`flex space-x-6 ${animateRight ? "animate-slide-right" : ""}`}>
          <img src={ph4} alt="Vehicle" className="w-1/3 h-64 object-cover hover:scale-110 transition duration-300" />
          <img src={ph5} alt="Vehicle" className="w-1/3 h-64 object-cover hover:scale-110 transition duration-300" />
          <img src={ph6} alt="Vehicle" className="w-1/3 h-64 object-cover hover:scale-110 transition duration-300" />
        </div>
      </div>
    </div>
  );
}
