import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
    <div className="navbar">
      <p>Get more properties</p>
      <div className="email-link">
        <p>
          Welcome
          {' '}
          {currentUser ? currentUser.name : 'Guest'}
        </p>
        {sessionLinks}
      </div>
    </div>
  );
};

export default Navbar;
