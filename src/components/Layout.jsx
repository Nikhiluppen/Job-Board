// Layout.jsx dqwdqwdfwdqw wqwdwefewfe
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">JobBoard</div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/saved-jobs">Saved Jobs</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/log out">Log Out</Link></li>
        </ul>
      </nav>
      <div className="layout-container">
        {children}
      </div>
    </>
  );
};

export default Layout;
