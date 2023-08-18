import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const currentUser = useSelector((state) => state.session.currentUser);
  const accessToken = useSelector((state) => state.session.accessToken);
  const refreshToken = useSelector((state) => state.session.refreshToken);
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to Get more properties</p>
      <ul>
        <li>
          id:
          {currentUser.id}
        </li>
        <li>
          name:
          {currentUser.name}
        </li>
      </ul>
      <p>
        access_token:
        {accessToken}
      </p>
      <p>
        refresh_token:
        {refreshToken}
      </p>
      <p><NavLink to="/signup">Sign up</NavLink></p>
      <p><NavLink to="/signin">sign in</NavLink></p>
    </div>
  );
};

export default Home;
