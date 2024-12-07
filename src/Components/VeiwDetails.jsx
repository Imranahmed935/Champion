import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VeiwDetails = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <h1>detail</h1>
        </div>
    );
};

export default VeiwDetails;