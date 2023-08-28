import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { refreshAccessToken } from '../../redux/sessions/sessionSlice';
import Spinner from '../Spinner';

const PersistLogin = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.session.loading);
  const accessToken = useSelector((state) => state.session.accessToken);
  const refreshToken = useSelector((state) => state.session.refreshToken);

  useEffect(() => {
    const verifyRefreshToken = () => {
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
      {loading ? <Spinner /> : <Outlet />}
    </>
  );
};

export default PersistLogin;
