import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
   
        <div className="flex flex-col lg:flex-row items-start gap-8 p-6">
 
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-lg group">
              <img
                src={data.photo}
                alt={data.itemName}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>

    
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{data.itemName}</h1>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Category:</span> {data.category}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Price:</span> ${data.price}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Rating:</span> {data.rating || "No rating available"}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Description:</span> {data.description || "No description available."}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Customization:</span> {data.customization || "No customization options available."}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Delivery Time:</span> {data.time || "No estimated time available."}
            </p>
            <button className="btn bg-purple-600 text-white hover:text-black">Add to cart <FaCartArrowDown/></button>
          </div>
         
        </div>


        <div className="border-t border-gray-200 lg:flex gap-4 p-6 space-y-8">

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose This Equipment?</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>High-quality materials ensure durability and performance.</li>
              <li>Recommended by professionals in the sports industry.</li>
              <li>Designed to meet the latest industry standards.</li>
              <li>Eco-friendly manufacturing process with recyclable materials.</li>
              <li>Lightweight and ergonomic design for comfortable use.</li>
            </ul>
          </div>


          <div>
            <h3 className="text-2xl font-semibold text-gray-800 -mt-8">Warranty & Support</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Comes with a 1-year warranty for manufacturing defects.</li>
              <li>24/7 customer support available for any queries.</li>
              <li>Easy return policy within 30 days of purchase.</li>
              <li>Access to free maintenance guides and resources.</li>
            </ul>
          </div>

 
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 -mt-8">Additional Benefits</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Eligible for discounts on bulk purchases.</li>
              <li>Available in multiple sizes and color options.</li>
              <li>Exclusive access to upcoming product launches.</li>
              <li>Free shipping on orders above $50.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
