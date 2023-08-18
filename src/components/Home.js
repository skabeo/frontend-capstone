import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome to Get more properties</p>
    <p><NavLink to="/signup">Sign up</NavLink></p>
    <p>sign in</p>
  </div>
);

export default Home;
