import React, { useState, useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';
import pic1 from '../assets/02.jpg';
import pic2 from '../assets/03.jpeg';
import pic3 from '../assets/20.jpg';

const Banner = () => {
    const images = [
        { src: pic1, title: "Baseball", description: "Experience the thrill of baseball games." },
        { src: pic2, title: "Football", description: "Feel the energy of the football field." },
        { src: pic3, title: "Cricket", description: "Dive into the excitement of cricket matches." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full lg:w-9/12 py-4 mx-auto overflow-hidden px-2">
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
                            <div className="absolute bottom-10 text-center bg-black bg-opacity-50 px-4 py-2 rounded-md max-w-[90%] mx-auto">
                                <h2 className="text-3xl font-semibold text-white">{image.title}</h2>
                                <p className="text-white text-lg">{image.description}</p>
                            </div>
                        </div>
                    </Slide>
                ))}
            </div>
        </div>
    );
};

export default Banner;
