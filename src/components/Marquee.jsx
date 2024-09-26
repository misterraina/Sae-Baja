import React from 'react';
import Image1 from '../assets/img0.jpg';
import Image2 from '../assets/img1.jpg';
import Image3 from '../assets/img2.jpg';
import Image4 from '../assets/img3.jpg';
import Image5 from '../assets/img5.jpg';
import Image6 from '../assets/img6.jpg';

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee space-x-8">
        <img src={Image1} alt="Image 1" className="w-96 h-96 object-cover" />
        <img src={Image2} alt="Image 2" className="w-96 h-96 object-cover" />
        <img src={Image3} alt="Image 3" className="w-96 h-96 object-cover" />
        <img src={Image4} alt="Image 4" className="w-96 h-96 object-cover" />
        <img src={Image5} alt="Image 4" className="w-96 h-96 object-cover" />
        <img src={Image6} alt="Image 4" className="w-96 h-96 object-cover" />

        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Marquee;
