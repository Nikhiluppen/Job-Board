// Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">JobBoard</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/saved-jobs">Saved Jobs</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
      <div className="layout-container">
        {children}
      </div>
    </>
  );
};

export default Layout;
