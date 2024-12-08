import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyEquipment = () => {
  const equipment = useLoaderData(); 
  console.log(equipment)
  return (
    <div>
      <h1>My Equipment</h1>

    </div>
  );
};

export default MyEquipment;
