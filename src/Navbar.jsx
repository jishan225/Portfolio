import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MDJ
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/skills" className="nav-link">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/certificates" className="nav-link">Certificates</Link>
          </li>
          <li className="nav-item">
            <Link to="/games" className="nav-link">Games</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
