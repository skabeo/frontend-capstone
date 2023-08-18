import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { refreshAccessToken } from '../../redux/sessions/sessionSlice';

const PersistLogin = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.session.isLoading);
  const accessToken = useSelector((state) => state.session.accessToken);
  const refreshToken = useSelector((state) => state.session.refreshToken);

  useEffect(() => {
    function verifyRefreshToken() {
      try {
        dispatch(refreshAccessToken(refreshToken));
      } catch (error) {
        console.log(error);
      }
    }
    if (!accessToken) {
      verifyRefreshToken();
    }
  }, [accessToken, refreshToken]);

  return (
    <>
      {loading ? <p>Loading...</p> : <Outlet />}
    </>
  );
};

export default PersistLogin;
