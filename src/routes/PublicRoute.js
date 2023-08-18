import React from 'react';
import { useNavigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const accessToken = false;
  const loading = false;
  const navigate = useNavigate();

  if (!accessToken && !loading) {
    return children;
  } if (loading) {
    return <p>Loading...</p>;
  } if (accessToken && !loading) {
    navigate('/signin');
  }
  return <p>Something went wrong</p>;
};

export default PublicRoute;
