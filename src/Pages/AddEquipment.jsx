import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <>loading...</>;
  }

  const handleEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const itemName = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const time = form.time.value;
    const email = form.email.value;
    const user = form.user.value;
    const addEquipment = {
      photo,
      itemName,
      category,
      description,
      price,
      rating,
      time,
      email,
      user,
    };

    fetch("https://champion-choice-server.vercel.app/addEquipment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset()
          Swal.fire({
            title: "success",
            text: "Equipment added successfully.",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };
  return (
    <div className="min-h-screen py-6">
        <div className="bg-white p-6 rounded shadow-md sm:w-3/4 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-600 pb-6">Add Equipment</h1>
          <form onSubmit={handleEquipment} className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Image URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter image URL"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Item Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter item name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Category Name</label>
              <input
                type="text"
                name="category"
                placeholder="Enter category name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Description</label>
              <textarea
                placeholder="Enter description"
                name="description"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <div>
              <label className="label">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Rating</label>
              <input
                type="number"
                name="rating"
                step="0.1"
                max="5"
                placeholder="Enter rating (out of 5)"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Customization</label>
              <input
                type="text"
                name="customization"
                placeholder="Enter customization options"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Processing Time</label>
              <input
                type="text"
                name="time"
                placeholder="Enter delivery time"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Stock Status</label>
              <input
                type="number"
                name="stock"
                placeholder="Enter available product quantity"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">User Email</label>
              <input
                type="email"
                name="email"
                defaultValue={user.email}
                placeholder="User email"
                readOnly
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="label">User Name</label>
              <input
                type="text"
                placeholder="User name"
                name="user"
                defaultValue={user.displayName}
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="col-span-2 text-center">
              <button type="submit" className="btn btn-primary">
                Add Equipment
              </button>
            </div>
          </form>
        </div>
      
    </div>
  );
};

export default AddEquipment;
