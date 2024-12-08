import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Update = () => {
    const {user} = useContext(AuthContext)
    return (
 <div>
<div className="bg-gray-100 py-10 min-h-screen">
  <div className="container mx-auto">
    <div className="text-center mb-4">
      <h1 className="text-3xl font-bold">Update Equipment</h1>
    </div>
    <div className="bg-white p-6 rounded shadow-md sm:w-3/4 mx-auto">
      <form className="grid grid-cols-2 gap-4">
        <div>
          <label className="label">Image URL</label>
          <input
            type="text"
            name='photo'
            placeholder="Enter image URL"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Item Name</label>
          <input
            type="text"
            name='name'
            placeholder="Enter item name"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Category Name</label>
          <input
            type="text"
            name='category'
            placeholder="Enter category name"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Description</label>
          <textarea
            placeholder="Enter description"
            name='description'
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        <div>
          <label className="label">Price</label>
          <input
            type="text"
            name='price'
            placeholder="Enter price"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Rating</label>
          <input
            type="number"
            name='rating'
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
            name='customization'
            placeholder="Enter customization options"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Processing Time</label>
          <input
            type="text"
            name='time'
            placeholder="Enter delivery time"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Stock Status</label>
          <input
            type="number"
            name='stock'
            placeholder="Enter available product quantity"
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

</div>
    );
};

export default Update;