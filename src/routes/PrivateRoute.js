import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const accessToken = false;
  const loading = false;
  const navigate = useNavigate();

  if (accessToken) {
    return children;
  } if (loading) {
    return <p>Loading...</p>;
  } if (!accessToken && !loading) {
    navigate('/signup');
  }
  return <p>Something went wrong</p>;
};

export default PrivateRoute;
