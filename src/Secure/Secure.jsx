import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Components/Spinner/Spinner';

const Secure = ({children}) => {
    const {user,loading}=useAuth()
      const location = useLocation();
 if (loading) {
    return <Spinner></Spinner>; 
  }

  if (!user) {
    return <Navigate to="/log-in" state={{ from: location }}  />;
  }
    return (
        <div>
            {children}
        </div>
    );
};

export default Secure;