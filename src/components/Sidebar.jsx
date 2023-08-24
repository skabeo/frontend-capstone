import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const accessToken = useSelector((state) => state.session.accessToken);

  let sessionLinks;
  if (accessToken) {
    sessionLinks = (
      <>
        <img className="app-logo" src="https://source.unsplash.com/ZsuqlSxrjRk" alt="Application logo" />
        <div className="app-links">
          <Link to="/">Properties</Link>
          <Link to="/reserve">Reserve property</Link>
          <Link to="/reservations">My Reservations</Link>
          <Link to="/add-property">Add property</Link>
          <Link to="/delete">Delete property</Link>
        </div>
        <div className="session-btn"><Link to="/signout">Logout</Link></div>
      </>
    );
  }

  return (
    <div className="sidebar large-screens">
      {sessionLinks}
    </div>
  );
};

export default Sidebar;
