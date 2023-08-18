import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const PersistLogin = () => {
  const loading = false;
  const accessToken = false;
  const refreshToken = null;

  useEffect(() => {
    function verifyRefreshToken() {
      try {
        console.log('refreshing access token');
      } catch {
        console.log('error refreshing access token');
      }
    }
    if (!accessToken) {
      verifyRefreshToken();
    }
  }, [accessToken, refreshToken]);

  return (
    <>
      {loading ? <p>Loading</p> : <Outlet />}
    </>
  );
};

export default PersistLogin;
