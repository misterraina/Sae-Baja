import React from "react";

export default function Steps() {
  return (
    <div className="max-w-full m-20 flex">
      <div className="w-1/2">
        <h1 className="font-extrabold text-3xl font-serif">
          Discuss the Power of Our product
        </h1>
        <p className="text-gray-600 pt-4 text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          voluptatem suscipit aut fuga ut sunt, placeat voluptas! Mollitia
          aperiam soluta voluptate asperiores molestias aliquam at. Ducimus
          repudiandae reprehenderit nihil unodi delectus! Quidem, inventore.
        </p>
        <button className="px-4 py-2 mt-4 bg-orange-700 hover:bg-gray-800 rounded-full text-white  font-bold border-2 border-orange-700">
          main action
        </button>
      </div>
      <div className="w-1/2">
        <div className="relative bg-orange-100 p-8 mb-4 transform rotate-2" style={{transform:'rotate(-2deg)'}}>
          <h1 className="text-3xl font-serif font-extrabold">
            Conceptualization
          </h1>
          <p className=" text-center pt-4 text-gray-700 text-lg">
            Brainstroming ideas and conceptualizaing the design of the
            electrical vehicle
          </p>
          <h1 className="absolute top-4 right-4 text-3xl font-serif font-extrabold">
            01
          </h1>
        </div>
        <div className="relative bg-bgLight-400 p-8 mb-4 transform rotate-2" style={{transform:'rotate(2deg)'}}>
          <h1 className="text-3xl font-serif font-extrabold">
            Design and Development
          </h1>
          <p className="pt-4 text-center text-gray-700 text-lg">
            Creating detailed designs, selecting components, and developing the
            electric vehicle.
          </p>
          <h1 className="absolute top-4 right-4 text-3xl font-serif font-extrabold">
            02
          </h1>
        </div>
        <div className="relative bg-orange-100 p-8 mb-4 transform rotate-2" style={{transform:'rotate(-2deg)'}}>
          <h1 className="text-3xl font-serif font-extrabold">
            Testing and Optimization
          </h1>
          <p className="pt-4 text-center text-gray-700 text-lg">
            Conducting tests, optimizing performance, and ensuring the electric
            vehicle meets competition standards.
          </p>
          <h1 className="absolute top-4 right-4 text-3xl font-serif font-extrabold">
            03
          </h1>
        </div>
        <div className="relative bg-bgLight-400 p-8 mb-4 transform rotate-2" style={{transform:'rotate(2deg)'}}>
          <h1 className="text-3xl font-serif font-extrabold">
            Competition Preparation
          </h1>
          <p className="pt-4 text-center text-gray-700 text-lg">
            Preparing the team, vehicle, and logistics for the SAE BAJA
            competition.
          </p>
          <h1 className="absolute top-4 right-4 text-3xl font-serif font-extrabold">
            04
          </h1>
        </div>
      </div>
    </div>
  );
}
