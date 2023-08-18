import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const loading = useSelector((state) => state.session.isLoading);
  const accessToken = useSelector((state) => state.session.accessToken);
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
