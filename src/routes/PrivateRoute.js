import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const loading = useSelector((state) => state.session.loading);
  const accessToken = useSelector((state) => state.session.accessToken);
  const location = useLocation();
  const fromLocation = (location.state)?.from;
  const previousLocation = fromLocation || { pathname: '/signin' };

  if (accessToken) {
    return children;
  } if (loading) {
    return <p>Loading...</p>;
  } if (!accessToken && !loading) {
    return <Navigate to={previousLocation} state={{ from: location }} replace />;
  }
  return <p>Something went wrong</p>;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
