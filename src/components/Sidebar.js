import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const accessToken = useSelector((state) => state.session.accessToken);
  const loading = useSelector((state) => state.session.loading);
  const currentUser = useSelector((state) => state.session.currentUser);

  let sessionLinks;
  if (accessToken) {
    sessionLinks = <Link to="/signout">Logout</Link>;
  } else if (!accessToken && !loading) {
    sessionLinks = (
      <>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Login</Link>
      </>
    );
  }

  return (
    <div className="sidebar">
      <p>
          Welcome
          {' '}
          {currentUser ? currentUser.name : 'Guest'}
        </p>
        <div className='menu-links'>
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/reservations">Reservations</Link>
        </div>
      <div className="email-link">
        {sessionLinks}
      </div>
    </div>
  );
};

export default Sidebar;
