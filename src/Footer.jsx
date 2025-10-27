import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaDiscord, FaMedium } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Details */}
        <div className="footer-section">
          <h3 className="footer-title">CONTACT DETAILS</h3>
          <div className="footer-links">
            <a href="https://linkedin.com/in/md-jishan" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:your.email@example.com">
              <FaEnvelope /> mohdjishan1056@gmail.com
            </a>
            <a href='/'>
            <b>PH:</b>+91 9667911863
            </a>
            <a href="tel:+919876543210">
              <FaMapMarkerAlt /> New Delhi, India
            </a>
          </div>
        </div>

        {/* Services */}
<div className="footer-section">
  <h3 className="footer-title">SITE MAP</h3>
  <div className="footer-links">
    <a href="/">Home</a>
    <a href="/skills">Skills</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
  </div>
</div>


        {/* Links */}
        <div className="footer-section">
          <h3 className="footer-title">LINKS</h3>
          <div className="footer-links">
            <a href="/">Summary</a>
            <a href="/about">About</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
          </div>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h3 className="footer-title">LET'S CONNECT</h3>
          <div className="footer-social">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer" aria-label="Medium">
              <FaMedium />
            </a>
            <a href="https://discord.com/users/youruserid" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <FaDiscord />
            </a>
            <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {currentYear} Made with <span className="highlight">React.js</span></p>
      </div>
    </footer>
  );
};

export default Footer;

