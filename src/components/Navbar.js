import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const accessToken = useSelector((state) => state.session.accessToken);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let sessionLinks;
  if (accessToken) {
    sessionLinks = (
      <div className={`nav-links small-screen ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Properties</Link>
        <Link to="/reserve" onClick={toggleMenu}>Reserve property</Link>
        <Link to="/reservations" onClick={toggleMenu}>My Reservations</Link>
        <Link to="/add-property" onClick={toggleMenu}>Add property</Link>
        <Link to="/delete" onClick={toggleMenu}>Delete property</Link>
        <Link to="/signout" onClick={toggleMenu}>Logout</Link>
      </div>
    );
  }

  return (
    <div className={`nav-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="email-link">
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        {sessionLinks}
      </div>
    </div>
  );
};

export default Navbar;
