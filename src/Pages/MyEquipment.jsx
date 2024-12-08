import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const MyEquipment = () => {
  const { user } = useContext(AuthContext);
  const initialEquipment = useLoaderData(); 
  const [equipment, setEquipment] = useState(initialEquipment);

  const filterEquipment = equipment.filter(equip => equip.email === user.email);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/addEquipment/${_id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
       
            setEquipment(prevEquipment => prevEquipment.filter(equip => equip._id !== _id));
            Swal.fire(
              "Deleted!",
              "Your equipment has been deleted.",
              "success"
            );
          }
        });
      }
    });
  };

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
                  <button className="btn btn-primary" onClick={() => handleDelete(equip._id)}>Delete</button>
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
