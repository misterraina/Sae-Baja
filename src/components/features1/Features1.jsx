import React, { useState } from "react";
import img1 from "../../assets/orCarModel.png"
import img2 from "../../assets/orTeam.png"

// const img1 =
//   "https://images.unsplash.com/photo-1673969206260-7cca51be9f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3N3w&ixlib=rb-4.0.3&q=80&w=1080";
// const img2 =
//   "https://images.unsplash.com/photo-1593985818125-f506da53a292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3Nnw&ixlib=rb-4.0.3&q=80&w=1080";
const img3 =
  "https://images.unsplash.com/photo-1580795478966-561ba4f1ce68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3Nnw&ixlib=rb-4.0.3&q=80&w=1080";

export default function Featuress() {
  const [currentImage, setCurrentImage] = useState(img1);
  const [activeSection, setActiveSection] = useState("Lottery");

  const handleImageChange = (image, section) => {
    setCurrentImage(image);
    setActiveSection(section);
  };

  return (
    <div className="flex p-20 dark:bg-dark-600">
      <div className="w-[50%] mr-10">
        <img
          src={currentImage}
          alt="Current feature"
          className="rounded-lg h-96 object-cover w-full"
        />
      </div>

      <div className="w-[50%] pl-8 flex flex-col justify-between">
        <div className={`border-l-4 ${activeSection === "Lottery" ? "border-black dark:border-dark-200" : "border-0 border-white dark:border-dark-600"}`}>
          <div
            className="cursor-pointer p-5 rounded-lg mx-2"
            onClick={() => handleImageChange(img1, "Lottery")}
          >
            <h1 className="text-3xl font-semibold dark:text-dark-200">Vehicle Specs</h1>
            <p className="dark:text-dark-200">Learn about the specifications and features of our electric vehicle.</p>
          </div>
        </div>

        <div className={`border-l-4 ${activeSection === "Vehicle Specs" ? "border-black dark:border-dark-200" : "border-0 border-white dark:border-dark-600"}`}>
          <div
            className="cursor-pointer p-5 rounded-lg mx-2"
            onClick={() => handleImageChange(img2, "Vehicle Specs")}
          >
            <h1 className="text-3xl font-semibold dark:text-dark-200">Meet the Team</h1>
            <p className="dark:text-dark-200">Meet the dedicated team of students working on the electric vehicle project.</p>
          </div>
        </div>

        <div className={`border-l-4 ${activeSection === "Man Made Earth" ? "border-black dark:border-dark-200" : "border-0 border-white dark:border-dark-600"}`}>
          <div
            className="cursor-pointer p-5 rounded-lg mx-2"
            onClick={() => handleImageChange(img3, "Man Made Earth")}
          >
            <h1 className="text-3xl font-semibold dark:text-dark-200">Progress Blog Updates</h1>
            <p className="dark:text-dark-200" >Follow our progress as we build and test our electric vehicle for the competition.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
