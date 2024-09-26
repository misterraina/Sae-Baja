import Image1 from '../assets/img0.jpg';
import Image2 from '../assets/img1.jpg';
import Image3 from '../assets/img2.jpg';
import Image4 from '../assets/img3.jpg';
import Image5 from '../assets/img5.jpg';
import Image6 from '../assets/img6.jpg';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageCarousel = () => {
  const images = [
    Image1, // replace with actual image paths or URLs
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
  ];

  return (
    <Swiper
      loop={true}               // Enables infinite looping
      autoplay={{ delay: 3000 }} // Auto scroll every 3 seconds
      navigation={true}          // Optional: Add arrows for navigation
      pagination={{ clickable: true }} // Optional: Add pagination dots
      spaceBetween={30}          // Adjust space between slides
      slidesPerView={1}          // Number of slides visible at a time
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Image ${index + 1}`} className="w-96 h-96 object-contain" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
