import React, { useState } from "react";
import "./featuress.css";

const img1 =
  "https://images.unsplash.com/photo-1673969206260-7cca51be9f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3N3w&ixlib=rb-4.0.3&q=80&w=1080";
const img2 =
  "https://images.unsplash.com/photo-1593985818125-f506da53a292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3Nnw&ixlib=rb-4.0.3&q=80&w=1080";
const img3 =
  "https://images.unsplash.com/photo-1580795478966-561ba4f1ce68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjY4NzA3Nnw&ixlib=rb-4.0.3&q=80&w=1080";

export default function Featuress() {
  const [currentImage, setCurrentImage] = useState(img1);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="flex p-20">
      <div className="w-[50%] mr-10">
        <img
          src={currentImage}
          alt=""
          className="rounded-lg h-96 object-cover w-full"
        />
      </div>

      <div className="w-[50%] pl-10 flex flex-col justify-between">
        <div
          className="hover:bg-slate-100 cursor-pointer p-5 rounded-lg"
          onClick={() => handleImageChange(img1)}
        >
          <h1 className="text-3xl font-semibold">Lottery</h1>
          <p>I love you can i have this one last time</p>
        </div>

        <div
          className="hover:bg-slate-100 cursor-pointer p-5 rounded-lg"
          onClick={() => handleImageChange(img2)}
        >
          <h1 className="text-3xl font-semibold">Vehicle Specs</h1>
          <p>Learn about this this is a bad example of the world</p>
        </div>

        <div
          className="hover:bg-slate-100 cursor-pointer p-5 rounded-lg"
          onClick={() => handleImageChange(img3)}
        >
          <h1 className="text-3xl font-semibold"> Man Made Earth</h1>
          <p>This is gonna be my Last breath so i wanna live</p>
        </div>
      </div>
    </div>
  );
}
