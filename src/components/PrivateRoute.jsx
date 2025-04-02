import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, getUserRole } from '../auth/auth';

const PrivateRoute = ({ children, requiredRole }) => {
 if (!isAuthenticated()) {
  return <Navigate to='/admin_login' />;
 }
 if (requiredRole && getUserRole() !== requiredRole) {
  return <Navigate to='/admin_login' />;
 }
 return children;
};
export default PrivateRoute;