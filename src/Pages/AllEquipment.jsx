import React, { useState, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const AllEquipment = () => {
    const equipmentData = useLoaderData();
    const { loading } = useContext(AuthContext);

    const [sortedData, setSortedData] = useState(equipmentData);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

    if (loading) {
        return <p>Loading...</p>;
    }


    const sortByPrice = () => {
        const sorted = [...sortedData].sort((a, b) => {
            return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        });
        setSortedData(sorted);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div>
            <h1 className='text-3xl text-center py-6'>All Sports Equipment</h1>

            <div className='text-center mb-4'>
                <button
                    onClick={sortByPrice}
                    className='btn btn-secondary rounded-none'
                >
                    Sort by Price ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </button>
            </div>

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
                    {sortedData.map((data, index) => (
                        <tr key={data.id || index}>
                            <th>{index + 1}</th>
                            <td>{data.itemName}</td>
                            <td>{data.category}</td>
                            <td>${data.price}</td>
                            <td>
                                <Link to={`/addEquipment/${data._id}`}>
                                    <button className='btn btn-primary rounded-none'>
                                        View Details
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllEquipment;
