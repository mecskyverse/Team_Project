import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ children }) {

  const role = localStorage.getItem('role');

  return role === 'admin' ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );

  return true ? <Outlet /> : <Navigate to="/" replace />;
}
export default PrivateRoute
