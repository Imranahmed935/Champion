import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PersonalEquipment = () => {
    const equipment = useLoaderData();
    console.log(equipment)
    return (
        <div>
            
        </div>
    );
};

export default PersonalEquipment;