import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Navbar = () => {
  const accessToken = useSelector((state) => state.session.accessToken);

  let sessionLinks;
  if (accessToken) {
    sessionLinks = (
      <div className="nav-links small-screen">
        <Link to="/">Properties</Link>
        <Link to="/reserve">Reserve property</Link>
        <Link to="/reservations">My Reservations</Link>
        <Link to="/add-property">Add property</Link>
        <Link to="/delete">Delete property</Link>
        <Link to="/signout">Logout</Link>
      </div>
    );
  }

  return (
    <div className="nav-links small-screen">
      <div className="email-link">
        {sessionLinks}
      </div>
    </div>
  );
};

export default Navbar;
