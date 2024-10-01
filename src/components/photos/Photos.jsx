import React from 'react'
import ph0 from '../../assets/img0.jpg';
import ph1 from '../../assets/img1.jpg';
import './photos.css'
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

export default function Photos() {
    const rowOne = [ph0, ph1, ph2, ph3, ph4, ph5];
    const rowTwo = [ph6, ph7, ph9, ph10, ph11, ph12,];
  return (
    <div className='pb-10 pt-10'>
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
        {/* <div className="image-slider2">
          {rowTwo.concat(rowTwo).map((image, index) => ( // Doubling the images for seamless scroll
            <img
              src={image}
              key={index}
              alt={`image ${image}`}
              className="transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}
