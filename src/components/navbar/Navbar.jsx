import React from "react";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full px-10 py-4 top-0 left-0 z-50 fixed dark:bg-dark-800 bg-white">

      {/* Left Side of NavBar Logo and Navigation*/}
      <div className="flex space-x-10 items-center">
      <div className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14'>
          <img src={Logo} alt="logo" className='w-full h-full object-contain' />
        </div>
        <ul className="flex space-x-6 ">
    {["home", "specs", "team", "contact"].map((item) => (
      <li key={item} className="relative cursor-pointer font-semibold text-lg group">
        <span className=" dark:text-dark-200 bg-gradient-to-r from-orange-700 to-orange-700 bg-[length:0%_100%] bg-left-bottom bg-no-repeat transition-all duration-500 group-hover:bg-[length:100%_100%] text-gray-800 group-hover:text-transparent bg-clip-text">
          #{item}
        </span>
      </li>
    ))}
  </ul>
      </div>

      {/* Left Side of the NavBar */}

      <div className="flex space-x-6">
        <button className="px-6 py-2 bg-orange-700 hover:bg-gray-800 rounded-full text-white text-base font-bold border-2 border-orange-700">
          View More
        </button>
        <button className="px-4 py-2 bg-white text-base hover:bg-gray-800 rounded-full text-orange-700 border-2 border-orange-700 font-semibold hover:text-white">
          Meet the team
        </button>
      </div>
    </div>
  );
}
