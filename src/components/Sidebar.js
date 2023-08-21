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
      <div className="menu-links">
        <Link to="/">Properties</Link>
        <Link to="/reserve">Reserve property</Link>
        <Link to="/reservations">My Reservations</Link>
        <Link to="/add">Add property</Link>
        <Link to="/delete">Delete</Link>
      </div>
      <div className="email-link">
        {sessionLinks}
      </div>
    </div>
  );
};

export default Sidebar;
