import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import StaggeredMenu from './StaggeredMenu';

function Navbar() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Skills', ariaLabel: 'View my skills', link: '/skills' },
    { label: 'Projects', ariaLabel: 'View my projects', link: '/projects' },
    { label: 'Certificates', ariaLabel: 'View certificates', link: '/certificates' },
    { label: 'Games', ariaLabel: 'Play games', link: '/games' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/jishan225' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/md-jishan-8626a62b1' },
    { label: 'Instagram', link: 'https://instagram.com/jishannn._' },
    { label: 'Leetcode', link: 'https://leetcode.com/MDJ786' }
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar desktop-nav">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MDJ
          </Link>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/skills" className="nav-link">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/certificates" className="nav-link">
                Certificates
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/games" className="nav-link">
                Games
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          <a 
            href="https://drive.google.com/file/d/1r3GkArSsSUDW8m9jORpQueJzsYRoOj8D/view?usp=sharing"
            className="resume-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Mobile Staggered Menu */}
      <div className="mobile-menu-wrapper">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={['#2632dfea', '#4051e8ea']}
          logoText="MDJ" 
          accentColor="#6049ea"
          isFixed={true}
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>
    </>
  );
}

export default Navbar;


