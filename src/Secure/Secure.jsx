import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const Secure = ({children}) => {
    const {user,loading}=useAuth()
      const location = useLocation();
 if (loading) {
    return <div className="text-center mt-10">Loading...</div>; 
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