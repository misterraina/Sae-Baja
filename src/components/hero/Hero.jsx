import React from "react";
import './hero.css';
import ph0 from '../../assets/img0.jpg';
import ph1 from '../../assets/img1.jpg';
import ph2 from '../../assets/img2.jpg';
import ph3 from '../../assets/img3.jpg';
import ph4 from '../../assets/img4.jpg';
import ph5 from '../../assets/img5.jpg';
import ph6 from '../../assets/img6.jpg';
import ph7 from '../../assets/img7.jpg';
import ph9 from '../../assets/img9.jpg';
import ph10 from '../../assets/img10.jpg';
import ph11 from '../../assets/img11.jpg';
import ph12 from '../../assets/img12.jpg';

export default function Hero() {

  const rowOne = [ph0, ph1, ph2, ph3, ph4, ph5];
  const rowTwo = [ph6, ph7, ph9, ph10, ph11, ph12,];

  return (
    <div className="flex flex-col justify-center items-center px-0 overflow-hidden mb-8 mt-52">
      <div className="mb-8 mx-20">
        <h1 className="text-5xl text-center font-serif font-extrabold text-gray-900 mb-4">
          SMVDU College Electrical Vehicle Team
        </h1>
        <p className="text-lg text-gray-700 mt-6">
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

      {/* Lower Portion of Hero Component */}
      <div className="content-2 overflow-hidden relative">
        <div className="image-slider">
          {rowOne.concat(rowOne).map((image, index) => ( // Doubling the images for seamless scroll
            <img
              src={image}
              key={index}
              alt={`image ${image}`}
              className="transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          ))}
        </div>
        <div className="image-slider2">
          {rowTwo.concat(rowTwo).map((image, index) => ( // Doubling the images for seamless scroll
            <img
              src={image}
              key={index}
              alt={`image ${image}`}
              className="transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          ))}
        </div>
      </div>

      
    </div>
  );
}
