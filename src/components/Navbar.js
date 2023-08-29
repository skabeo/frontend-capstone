import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import menu from '../assets/hamburger.png';
import close from '../assets/close.png';
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
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Properties</Link>
        <Link to="/reserve" onClick={toggleMenu}>Reserve property</Link>
        <Link to="/reservations" onClick={toggleMenu}>My Reservations</Link>
        <Link to="/add-property" onClick={toggleMenu}>Add property</Link>
        <Link to="/delete" onClick={toggleMenu}>Delete property</Link>
        <Link to="/signout" onClick={toggleMenu}>Logout</Link>
      </div>
    );
    return (
      <div className={`nav-container small-screen ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-elements">
          <span>get more</span>
          <button type="button" className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <img src={isMenuOpen ? close : menu} alt="hamburger-meny" className="navbar-open" />
          </button>
          {sessionLinks}
        </div>
        <hr className="navbar-line" />
      </div>
    );
  }

  return null;
};

export default Navbar;
