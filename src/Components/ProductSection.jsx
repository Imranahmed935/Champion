import React, { useEffect, useState } from 'react';

const ProductSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addEquipment') 
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="border border-gray-200 rounded-lg p-4 shadow-md"
                    >
                        <img
                            src={product.photo}
                            alt={product.name}
                            className="w-full h-56 object-cover rounded-md mb-4 shadow-lg"
                        />

                        <h2 className="text-xl font-semibold mb-2">{product.itemName}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="text-lg font-bold text-purple-600">${product.price}</p>
                        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
