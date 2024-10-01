import React, { useState } from "react";
import img1 from '../../assets/orCollege.png'

// const img1 =
//   "https://images.unsplash.com/photo-1594443787110-73423138299e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3Nnw&ixlib=rb-4.0.3&q=80&w=1080";
const img3 =
  "https://images.unsplash.com/photo-1722573783625-eceb04251036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3N3w&ixlib=rb-4.0.3&q=80&w=1080";
const img2 =
  "https://images.unsplash.com/photo-1617886322168-72b886573c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3Nnw&ixlib=rb-4.0.3&q=80&w=1080";

export default function Featuress() {
  const [currentImage, setCurrentImage] = useState(img1);
  const [activeSection, setActiveSection] = useState("Lottery");

  const handleImageChange = (image, section) => {
    setCurrentImage(image);
    setActiveSection(section);
  };

  return (
    <div className="flex p-20 dark:bg-dark-600">
      <div className="w-[50%] pl-8 flex flex-col justify-between">
        <div className={`border-l-4 ${activeSection === "Lottery" ? "border-black dark:border-dark-200" : "border-0 border-white dark:border-dark-600"}`}>
          <div
            className="cursor-pointer p-5 rounded-lg mx-2"
            onClick={() => handleImageChange(img1, "Lottery")}
          >
            <h1 className="text-3xl font-semibold dark:text-dark-200">College</h1>
            <p className="dark:text-dark-200">Shri Mata Vaishno Devi University (SMVDU) is a college
                      located in Jammu, India. It is known for its engineering
                      programs and innovative projects.</p>
          </div>
        </div>

        <div className={`border-l-4 ${activeSection === "Vehicle Specs" ? "border-black dark:border-dark-200" : "border-0 border-white dark:border-dark-600"}`}>
          <div
            className="cursor-pointer p-5 rounded-lg mx-2"
            onClick={() => handleImageChange(img2, "Vehicle Specs")}
          >
            <h1 className="text-3xl font-semibold dark:text-dark-200">Vehicle Specs</h1>
            <p className="dark:text-dark-200">Our electric vehicle is designed for the SAE BAJA
                      competition, featuring a lightweight chassis, powerful
                      electric motor, and advanced suspension system.</p>
          </div>
        </div>

        <div className={`border-l-4 ${activeSection === "Man Made Earth" ? "border-black dark:border-dark-200" : "border-0 border-white dark:border-dark-600"}`}>
          <div
            className="cursor-pointer p-5 rounded-lg mx-2"
            onClick={() => handleImageChange(img3, "Man Made Earth")}
          >
            <h1 className="text-3xl font-semibold dark:text-dark-200">Team</h1>
            <p className="dark:text-dark-200">The SMVDU College team consists of dedicated students from
                      various engineering disciplines who are passionate about
                      designing and building innovative vehicles.</p>
          </div>
        </div>
      </div>
      <div className="w-[50%] mr-10">
        <img
          src={currentImage}
          alt="Current feature"
          className="rounded-lg h-full object-cover w-full"
        />
      </div>
    </div>
  );
}
