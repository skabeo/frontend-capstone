import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const accessToken = useSelector((state) => state.session.accessToken);
  const { name } = useSelector((state) => state.session.currentUser);

  let sessionLinks;
  if (accessToken) {
    sessionLinks = (
      <>
        <div className="center-text">
          <p className="bold">get more</p>
          <p className="bold">properties</p>
          <hr className="sidebar-logo-line" />
          <p className="sidebar-username">
            Signed in as
            <span className="sidebar-name">{name}</span>
          </p>
        </div>
        <div className="sidebar-links-container">
          <div className="app-links large-screens">
            <NavLink to="/" activeClassName="active-link">Properties</NavLink>
            <NavLink to="/reserve" activeClassName="active-link">Reserve property</NavLink>
            <NavLink to="/reservations" activeClassName="active-link">My Reservations</NavLink>
            <NavLink to="/add-property" activeClassName="active-link">Add property</NavLink>
            <NavLink to="/delete" activeClassName="active-link">Delete property</NavLink>
          </div>
        </div>
        <Link to="/signout" className="session-btn large-screens">Logout</Link>
      </>
    );
    return (
      <div className="sidebar large-screens">
        {sessionLinks}
      </div>
    );
  }

  return null;
};

export default Sidebar;
