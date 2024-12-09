import React, { useState} from 'react';
import { useLoaderData, } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const equipment = useLoaderData(); 
  const [formData, setFormData] = useState(equipment);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://champion-choice-server.vercel.app/addEquipment/${equipment._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Updated Successfully',
            text: 'The equipment details have been updated!',
          });
        }
      })
      .catch((error) => {
        console.error('Error updating equipment:', error);
      });
  };

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold">Update Equipment</h1>
        </div>
        <div className="bg-white p-6 rounded shadow-md sm:w-3/4 mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Image URL</label>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Item Name</label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Category Name</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <div>
              <label className="label">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Rating</label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Customization</label>
              <input
                type="text"
                name="customization"
                value={formData.description}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Processing Time</label>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Stock Status</label>
              <input
                type="number"
                name="stock"
                value={formData.time}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-2 text-center">
              <button type="submit" className="btn btn-primary">
                Update Equipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
