import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip'; 
import 'react-tooltip/dist/react-tooltip.css';

const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext);

    const links = (
        <ul className="menu menu-vertical lg:menu-horizontal p-0">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'bg-purple-600 text-white rounded-lg' : 'text-gray-700 hover:bg-purple-100'
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/allEquipment"
                    className={({ isActive }) =>
                        isActive ? 'bg-purple-600 text-white rounded-lg' : 'text-gray-700 hover:bg-purple-100'
                    }
                >
                    All Sports Equipment
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/addEquipment"
                    className={({ isActive }) =>
                        isActive ? 'bg-purple-600 text-white rounded-lg' : 'text-gray-700 hover:bg-purple-100'
                    }
                >
                    Add Equipment
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/myEquipment`}
                    className={({ isActive }) =>
                        isActive ? 'bg-purple-600 text-white rounded-lg' : 'text-gray-700 hover:bg-purple-100'
                    }
                >
                    My Equipment List
                </NavLink>
            </li>

            <li>
                <NavLink
                    to={`/aboutUs`}
                    className={({ isActive }) =>
                        isActive ? 'bg-purple-600 text-white rounded-lg' : 'text-gray-700 hover:bg-purple-100'
                    }
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/ContactUs`}
                    className={({ isActive }) =>
                        isActive ? 'bg-purple-600 text-white rounded-lg' : 'text-gray-700 hover:bg-purple-100'
                    }
                >
                    Contact Us
                </NavLink>
            </li>
        </ul>
    );

    const handleSignOut = () => {
        userLogOut()
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'You have logged out successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Warning!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };

    return (
        <div className="navbar bg-base-100 lg:w-9/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Champion's Choice</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {links}
            </div>
            <div className="navbar-end gap-4">
                {user ? (
                    <>
                        <img
                            className="w-10 h-10 rounded-full cursor-pointer"
                            src={user.photoURL}
                            alt="User Profile"
                            id="profile-img"
                        />
                        <Tooltip
                            anchorSelect="#profile-img"
                            place="bottom"
                            content={user.displayName || 'Anonymous User'}
                            className="bg-black text-white px-2 py-1 rounded"
                        />
                        <button onClick={handleSignOut} className="btn btn-neutral">
                            LogOut
                        </button>
                    </>
                ) : (
                    <>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
