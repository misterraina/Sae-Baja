import React from "react";
import img1 from '../../assets/orPerson1.png';
import img2 from '../../assets/orPerson2.png';
import img3 from '../../assets/orPerson3.png';
import img4 from '../../assets/orPerson4.png';
import './testimonial.css'

const testimonials = [
  {
    name: "Divyansh Kale",
    role: "Chair Person",
    text: "Working on this project has been an incredible learning experience. I am proud of what our team has achieved so far.",
    img: img1,
  },
  {
    name: "Amod Vaibhav",
    role: "Vice Chair Person",
    text: "Being part of this project has allowed me to apply my engineering skills in a practical setting. It's been challenging but rewarding.",
    img: img2,
  },
  {
    name: "Mayur Shurkar",
    role: "Electrical Engineer",
    text: "I have enjoyed collaborating with my teammates and contributing to the development of the electric vehicle. Can't wait for the competition!",
    img: img3,
  },
  {
    name: "Ekansh Sharma",
    role: "Mechanical Engineer",
    text: "As the marketing coordinator, I've had the opportunity to promote our project and engage with the community. It's been a fulfilling experience.",
    img: img4,
  },
];

export default function Testimonial() {
  return (
    <div className="dark:bg-dark-600 pt-20">
      <div className="flex flex-col  justify-center items-center ">
        <h1 className="dark:text-dark-200 font-bold font-serif text-3xl">Testimonials</h1>
        <p className="dark:text-dark-200 max-w-screen-md pt-4 text-gray-700 text-lg text-center">
          Read what our team members have to say about their experience working
          on the electric vehicle project for the SAE BAJA competition.
        </p>
      </div>
      <div className="max-w-full">
        <div className="p-20 pt-10 flex flex-wrap gap-8">
          {testimonials.map((testimonial, index) => (

            <div key={index} className="w-[calc(50%-2rem)] relative  ">

              <div className="cardT relative z-10 bg-bgLight-400
              transition-colors duration-300 rounded-lg p-4 py-8">
                <div className="flex items-center space-x-4">
                  <img src={testimonial.img} alt={`Profile of ${testimonial.name}`} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <h1 className="text-lg font-semibold">{testimonial.name}</h1>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 pt-6">
                  {testimonial.text}
                </p>
              </div>
              <div className="cardzT absolute bg-lightOrange-400 z-0 rounded-lg "></div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
