import React, { useEffect, useRef } from "react";
import "./hero.css";
import imag from "../../assets/pngCrawler.png";

export default function Hero() {
  const textElementRef = useRef(null);
  const rightTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (textElementRef.current) {
        textElementRef.current.style.animation = scrollY > 50 ? 'slide-out-left 1s forwards' : 'slide-in-left 1s forwards';
      }

      if (rightTopRef.current) {
        rightTopRef.current.style.animation = scrollY > 50 ? 'slide-out-right 1s forwards' : 'slide-in-right 1s forwards';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero-background h-screen dark:bg-dark-600 px-0 overflow-hidden relative">
      <div className="rightTop absolute top-16 right-0 pt-4 mr-0" ref={rightTopRef}>
        <img 
          src={imag}
          alt="" 
          className="h-52 w-72" />
      </div>
      <div className="textElement mb-6 pb-2 mx-20 mt-40 pt-8" ref={textElementRef}>
        <h1 className="textH text-5xl text-center dark:text-dark-200 font-Arimo font-semibold text-gray-800 mb-4">
          SMVDU Electrical Vehicle Team
        </h1>
        <p className=" textP text-2xl text-gray-900 mx-20 my-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          maxime nostrum quia eum explicabo et voluptas laborum nemo laboriosam
          inventore perferendis, in consectetur itaque? Reiciendis animi,
          perspiciatis accusamus quaerat recusandae repellat impedit Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Vel molestiae tempore
          architecto earum tenetur obcaecati quis sapiente mollitia ab
          pariatur! lorem Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>

      {/* Infinite scrolling text at the bottom */}
      <div className="scroll-container textElement2">
        <div className="scroll-content">
          <p className="text-lg">
            Welcome to the official website of the SMVDU College team
            participating in the SAE BAJA competition. Follow our journey as we
            design and build an electric vehicle for this prestigious event.
          </p>
        </div>
      </div>
    </div>
  );
}


{
  /* <div className="flex space-x-4 mb-14 mt-2">
        <button className="px-6 py-2 bg-orange-700 hover:bg-orang-100 rounded-full text-white font-bold transition duration-300">
          View More
        </button>
        <button className="px-6 py-2 bg-white rounded-full text-orange-700 border-1 border-orange-700 font-semibold hover:text-white hover:border-orang-100 hover:bg-orang-100 transition duration-300">
          Meet the Team
        </button>
      </div> */
}
