import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Addly</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#" className="signup-btn">Sign Up</a></li>
      </ul>
    </nav>
  );
}