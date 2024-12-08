import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData(); 

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Equipment Details</h1>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                    src={data.photo}
                    alt={data.itemName}
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        {data.itemName}
                    </h2>
                    <p className="text-gray-600 mb-4">
                        <span className="font-semibold">Category:</span> {data.category}
                    </p>
                    <p className="text-gray-600 mb-4">
                        <span className="font-semibold">Price:</span> ${data.price}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Description:</span> {data.description || 'No description available.'}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Customization:</span> {data.customization || 'No description available.'}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">time:</span> {data.time || 'No description available.'}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">rating:</span> {data.rating || 'No description available.'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;

