import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/sessions/sessionSlice';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refreshToken = useSelector((state) => state.session.accessToken);

  useEffect(() => {
    if (refreshToken) {
      dispatch(logoutUser(refreshToken));
    }
    navigate('/signin');
  }, []);

  return (
    <div>Logout</div>
  );
}

export default Logout;
