import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Auth/Authcontext';
import LoddingSpenner from '../Component/LoddingSpenner';

const PrivateRouter = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoddingSpenner />; // or return <div>Loading...</div>;
  }
  if (user && user.email) {
    return children;
  }

  return <Navigate to="/loging" state={{ from: location }} replace />;
};

export default PrivateRouter;
