import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import pic1 from "../assets/banner/badminton.webp";
import pic2 from "../assets/banner/cricket.webp";
import pic3 from "../assets/banner/football.webp";

const Banner = () => {
  const images = [
    {
      src: pic1,
      title: "Badminton",
      description: "Experience the thrill of badminton games.",
    },
    {
      src: pic3,
      title: "Football",
      description: "Feel the energy of the football field.",
    },
    {
      src: pic2,
      title: "Cricket",
      description: "Dive into the excitement of cricket matches.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-[#e3e6e6]">
      <div className="relative lg:w-9/12 mx-auto overflow-hidden">
        <div className="relative w-full h-[600px]">
          {images.map((image, index) => (
            <Slide
              key={index}
              direction="left"
              triggerOnce
              className={`absolute w-full transition-opacity duration-1000 ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <img
                  src={image.src}
                  alt={image.title}
                  className="object-cover w-full h-[600px]"
                />
                <div className="absolute bottom-10 text-center bg-black bg-opacity-60 px-4 py-2 rounded-md max-w-[90%] mx-auto">
                  <h2 className="text-4xl font-semibold text-white">
                    {image.title}
                  </h2>
                  <p className="text-white text-lg">{image.description}</p>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
