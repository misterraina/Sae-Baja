import Marquee from "../Marquee";
import ImageCarousel from "../Swiper";
import React, { useEffect, useState } from "react";
import './hero.css';
import ph0 from '../../assets/img0.jpg';
import ph1 from '../../assets/img1.jpg';
import ph2 from '../../assets/img2.jpg';
import ph3 from '../../assets/img3.jpg';
import ph4 from '../../assets/img4.jpg';
import ph5 from '../../assets/img5.jpg';
import ph6 from '../../assets/img6.jpg';
import ph7 from '../../assets/img7.jpg';
import ph8 from '../../assets/img8.jpg';
import ph9 from '../../assets/img9.jpg';
import ph10 from '../../assets/img10.jpg';
import ph11 from '../../assets/img11.jpg';
import ph12 from '../../assets/img12.jpg';

export default function Hero() {

  const rowOne = [ph0, ph1, ph2, ph3, ph4, ph5]

  return (
    <div className="flex flex-col justify-center items-center px-6 overflow-hidden mb-8 mt-52">
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

      <div className="flex space-x-4 mb-14 mt-2">
        <button className="px-6 py-2 bg-orange-700 hover:bg-gray-800 rounded-full text-white font-bold border-2 border-orange-700 transition duration-300">
          View More
        </button>
        <button className="px-6 py-2 bg-white hover:bg-orange-700 rounded-full text-orange-700 border-1 border-orange-700 font-semibold hover:text-white transition duration-300">
          Meet the Team
        </button>
      </div>

      {/* Lower Portion of Hero Component */}
    
    <div className="content-2 bg-slate-900 overflow-hidden relative">
      <div className="image-slider flex space-x-4 overflow-x-auto no-scrollbar">
        {rowOne.map((image, index) => (
          <img
          src={image} 
          key={index}
          alt={`image ${image}`}
          className="object-contain h-96 w-96 transition-transform duration-500 ease-in-out transform hover:scale-105" />
        ))}
      </div>
    </div>
      

    </div>
  );
}
