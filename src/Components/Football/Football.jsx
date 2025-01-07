import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Football = () => {
  const [footballData, setFootballData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  useEffect(() => {
    fetch("http://localhost:5000/equipment/football")
      .then((response) => response.json())
      .then((data) => setFootballData(data))
      .catch((error) => console.error("Error fetching football data:", error));
  }, []);

  return (
    <div className="bg-[#e3e6e6]">
      <div className="lg:w-9/12 mx-auto px-4 ">
        <h1 className="text-2xl font-semibold py-4">Football Accessories</h1>

        {/* Grid container for displaying products */}

        <div className="">
          <Slider {...settings}>
            {footballData.map((product) => (
              <Link
                key={product._id}
                to={`/details/${product._id}`}
                className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="relative">
                  {/* Check if product.photos exists and render images */}
                  {product.photos && product.photos.length > 0 ? (
                    product.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`${product.itemName} - ${index + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    ))
                  ) : (
                    /* Fallback to single image or placeholder */
                    <img
                      src={product.photo || "/placeholder.jpg"}
                      alt={product.itemName}
                      className="w-full h-48 object-cover"
                    />
                  )}
                </div>

                {/* Product details */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold truncate mb-2">
                    {product.itemName}
                  </h2>
                  <p className="text-lg text-gray-600">${product.price}</p>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Football;
