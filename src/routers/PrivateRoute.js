import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext)
  let location = useLocation();

  if(loading){
    return <h2>Loading...</h2>;
  }
  if(user?.uid){
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
  
};

export default PrivateRoute;