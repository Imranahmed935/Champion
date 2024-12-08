import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import MyCard from '../Components/MyCard';

const MyEquipment = () => {
  const { user } = useContext(AuthContext);
  const equipment = useLoaderData(); 
  const filterEquipment = equipment.filter(equip => equip.email === user.email);
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">My Equipment</h1>

      <div className="lg:w-10/12 mx-auto w-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          filterEquipment.map(equip => (
            <div key={equip._id} className="card bg-base-100 w-full">
              <figure>
                <img
                  className="w-full h-52 object-cover"
                  src={equip.photo}
                  alt={equip.itemName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{equip.itemName}</h2>
                <p><strong>Category:</strong> {equip.category}</p>
                <p><strong>Description:</strong> {equip.description}</p>
                <p><strong>Price:</strong> ${equip.price}</p>
                <p><strong>Rating:</strong> {equip.rating}</p>
                <p><strong>Time:</strong> {equip.time} days</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-primary">Delete</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default MyEquipment;
