import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://champion-choice-server.vercel.app/equipment")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="bg-[#e3e6e6]">
        <div className="lg:w-9/12 mx-auto px-4  ">
      <h1 className="text-2xl font-semibold py-4">Best Sellers in Sports</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white border border-gray-200 shadow-md"
          >
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.photo}
                alt={product.itemName}
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h2 className="text-lg font-semibold truncate mb-2">{product.itemName}</h2>
              <p className="text-lg text-gray-600">${product.price}</p>
            </div>

            {/* Details Button */}
            <div className="flex justify-end items-center p-4">
              <Link
                to={`/details/${product._id}`}
                className=" flex items-center text-purple-600 hover:text-purple-800 transition duration-300"
              >
                <FaArrowRight/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductSection;
