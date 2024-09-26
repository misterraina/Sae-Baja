import React from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full px-6 py-4 top-0 left-0 z-50 fixed bg-white">

      {/* Left Side of NavBar Logo and Navigation*/}
      <div className="flex space-x-10 items-center">
      <div className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14'>
          <img src={Logo} alt="logo" className='w-full h-full object-contain' />
        </div>
        <ul className="flex space-x-6">
          <li className="cursor-pointer font-semibold">#home</li> 
          <li className="cursor-pointer font-semibold">#specs</li>
          <li className="cursor-pointer font-semibold">#team</li>
          <li className="cursor-pointer font-semibold">#contact</li>
        </ul>
      </div>

      {/* Left Side of the NavBar */}

      <div className="flex space-x-6">
        <button className="px-4 py-2 bg-orange-700 hover:bg-gray-800 rounded-full text-white  font-bold border-2 border-orange-700">
          view more
        </button>
        <button className="px-4 py-2 bg-white hover:bg-gray-800 rounded-full text-orange-700 border-2 border-orange-700 font-semibold hover:text-white">
          Meet the team
        </button>
      </div>
    </div>
  );
}
