import React, { useContext, useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyEquipment = () => {
  const { user } = useContext(AuthContext);
  const [equipment, setEquipment] = useState([]);
  useEffect(() => {
    fetch(`https://champion-choice-server.vercel.app/myEquipment/${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setEquipment(data);
      })
      .catch((error) => console.error("Error fetching equipment data:", error));
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://champion-choice-server.vercel.app/addEquipment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setEquipment((prevEquipment) =>
                prevEquipment.filter((equip) => equip._id !== _id)
              );
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
    <div className="pb-24 min-h-screen">
      <h1 className="lg:w-9/12 mx-auto text-2xl font-semibold py-6">
        My Equipment
      </h1>
      <div className="lg:w-9/12 px-2 mx-auto w-full py- grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {equipment.map((equip) => (
          <div
            key={equip._id}
            className="bg-white overflow-hidden hover:shadow-lg transition-shadow"
          >
            <figure>
              <img
                className="w-full h-52 object-cover"
                src={equip.photo}
                alt={equip.itemName}
              />
            </figure>
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {equip.itemName}
              </h2>
              <p className="text-sm text-gray-600">
                <strong>Category:</strong> {equip.category}
              </p>
              <p className="text-sm text-gray-600 line-clamp-2">
                <strong>Description:</strong> {equip.description}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Price:</strong> ${equip.price}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Rating:</strong> {equip.rating}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Delivery Time:</strong> {equip.time} days
              </p>
              <div className="flex justify-between items-center mt-4">
                <Link to={`/update/${equip._id}`}>
                  <button className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600">
                    <FaEdit /> Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(equip._id)}
                  className="flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEquipment;
