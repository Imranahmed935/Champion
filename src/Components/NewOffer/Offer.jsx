import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Offer = () => {
  const [showOffer, setShowOffer] = useState(true);

  const handleClose = () => {
    setShowOffer(false);
  };

  if (!showOffer) return null;

  return (
    <div className='bg-[#e3e6e6] py-4 px-2'>
        <div className="relative lg:w-9/12 w-full mt-2 px-2 rounded-xl mx-auto bg-red-500 py-4 overflow-hidden">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-4 text-white text-lg hover:text-gray-300 transition duration-200"
      >
        <FaTimes />
      </button>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-6 left-5 w-12 h-12 bg-yellow-300 rounded-full blur-xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 bg-blue-400 rounded-full blur-lg animate-bounce opacity-60"></div>
        <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-pink-300 rounded-full blur-md animate-pulse opacity-50"></div>
        <div className="absolute bottom-14 left-12 w-14 h-14 bg-green-400 rounded-full blur-xl animate-spin opacity-50"></div>
      </div>

      {/* Offer Content */}
      <div className="relative lg:w-10/12 mx-auto text-center z-10">
        <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
          🎉 Special New Year Offers! 🎉
        </h1>

        {/* Marquee Section */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden mb-4">
          <Marquee
            gradient={false}
            speed={60}
            pauseOnHover={true}
            className="py-1"
          >
            <span className="mx-4 text-sm lg:text-lg font-medium text-purple-800">
              🏀 50% OFF on Basketballs
            </span>
            <span className="mx-4 text-sm lg:text-lg font-medium text-red-800">
              ⚽ Buy One, Get One on Footballs
            </span>
            <span className="mx-4 text-sm lg:text-lg font-medium text-green-800">
              🏓 Free Shipping on Orders Over $50
            </span>
            <span className="mx-4 text-sm lg:text-lg font-medium text-blue-800">
              🏋️‍♂️ Up to 40% OFF on Gym Equipment
            </span>
            <span className="mx-4 text-sm lg:text-lg font-medium text-yellow-800">
              🎾 Exclusive Discounts on Tennis Gear
            </span>
          </Marquee>
        </div>

        {/* Explore Button */}
        <Link to={"/allEquipment"}>
          <button className="px-4 py-2 bg-purple-700 text-white text-sm lg:text-base font-bold rounded-full shadow-md hover:bg-pink-600 transition-all duration-300">
            Explore Deals
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Offer;
