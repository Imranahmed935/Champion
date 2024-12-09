import React, { useState } from 'react';
import pic0 from '../assets/ball.jpg';
import pic1 from '../assets/ball.jpg';
import pic2 from '../assets/base2.jpg';
import pic3 from '../assets/red1.webp';
import pic4 from '../assets/bat.jpg';
import pic5 from '../assets/bat1.jpg';
import pic6 from '../assets/boot-2.jpg';
import pic7 from '../assets/boot.jpg';
import { Slide } from 'react-awesome-reveal';

const Slider = () => {
    const images = [pic0, pic1, pic2, pic3, pic4, pic5, pic6, pic7];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative  lg:w-10/12 mx-auto w-full h-80 sm:h-96 overflow-hidden">
            <div className="absolute  -top-4 w-full bg-gradient-to-r from-blue-500 to-indigo-500 p-4 text-center text-white font-bold z-10">
                <Slide direction="up" triggerOnce>
                    <h1 className="text-2xl">Welcome to the Sports Equipment Shop</h1>
                    <p>Find the best equipment for your favorite sports</p>
                </Slide>
            </div>

            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <Slide key={index} direction="left" delay={index * 300} triggerOnce>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </Slide>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
            >
                ❯
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? 'bg-white' : 'bg-gray-500'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
