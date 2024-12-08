import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const AllEquipment = () => {
    const equipmentData = useLoaderData();
    const {loading} = useContext(AuthContext)

    if(loading){
        return <p>loading</p>
    }
 
    return (
        <div>
            <h1 className='text-3xl text-center py-6'>All Sports Equipment</h1>
            <table className="table sm:w-6/12 mx-auto mb-52">
                <thead>
                    <tr className='font-bold'>
                        <th className='text-2xl font-semibold'>#</th>
                        <th className='text-2xl font-semibold'>Name</th>
                        <th className='text-2xl font-semibold'>Category</th>
                        <th className='text-2xl font-semibold'>Price</th>
                        <th className='text-2xl font-semibold'>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        equipmentData.map((data, index) => (
                            <tr key={data.id || index}>
                                <th>{index + 1}</th>
                                <td>{data.itemName}</td>
                                <td>{data.category}</td>
                                <td>${data.price}</td>
                                <td>
                                    <Link to={`/allEquipment/:${data._id}`}><button className='btn btn-primary rounded-none'>
                                        View Details
                                    </button></Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllEquipment;
