import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner text-success relative top-52 ml-[900px] "></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
    
};

export default PrivateRoute;