import React from 'react';
import styled from 'styled-components';
import './navbar.css'; // Import the CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">P2P Trading</div>
      <div className="navbar-links">
        <a href="#home" className="nav-item">Home</a>
        <a href="#marketplace" className="nav-item">Marketplace</a>
        <a href="#my-trades" className="nav-item">My Trades</a>
        <a href="#energy-stats" className="nav-item">Energy Stats</a>
        <a href="#community" className="nav-item">Community</a>
      </div>
      <div className="navbar-actions">
        <a href="#login" className="nav-item">Login</a>
        <a href="#signup" className="nav-item">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
