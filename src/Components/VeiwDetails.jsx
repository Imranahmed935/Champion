import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData(); 
    console.log(data)

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Equipment Details</h1>
        </div>
    );
};

export default ViewDetails;
