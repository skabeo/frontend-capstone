import React from 'react';
import PropTypes from 'prop-types';
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

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
