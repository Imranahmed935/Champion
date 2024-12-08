import React, { useContext } from 'react';
import {Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const {user, loading, userLogOut} = useContext(AuthContext);

    if(loading){
      return <>loading...</>
    }
  
    const links = <div className='sm:flex gap-4'>
        <NavLink to='/' className={({ isActive }) =>
        `px-4 py-2 rounded-lg transition ${
          isActive ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-purple-100'
        }`
      }><li>Home</li></NavLink>
        <NavLink to='/allEquipment' className={({ isActive }) =>
        `px-4 py-2 rounded-lg transition ${
          isActive ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-purple-100'
        }`
      }><li>All Sports Equipment</li></NavLink>
        <NavLink to='/addEquipment' className={({ isActive }) =>
        `px-4 py-2 rounded-lg transition ${
          isActive ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-purple-100'
        }`
      }><li>Add Equipment</li></NavLink>
        <NavLink to={`/myEquipment/:${user.email}`} className={({ isActive }) =>
        `px-4 py-2 rounded-lg transition ${
          isActive ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-purple-100'
        }`
      }><li>My Equipment List</li></NavLink>
    </div>

    const handleSignOut = ()=>{
      userLogOut()
      .then(()=>{
        Swal.fire({
          title: 'success',
          text: 'you have loggedOut successfully.',
          icon: 'success',
          confirmButtonText: 'ok'
        })
      })
      .catch(error =>{
        Swal.fire({
          title: 'warning!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'ok'
        })
      })

    }

    
    return (
<div className="navbar bg-base-100 lg:w-10/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Champion's Choice</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    {
      user ? <button onClick={handleSignOut} className='btn btn-neutral'>LogOut</button>: 
      <>
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
      </>
    }
      
  </div>
</div>
    );
};

export default Navbar;