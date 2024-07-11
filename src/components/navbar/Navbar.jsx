import React, { useState } from 'react';
import './navbar.css';
import navLogo from '../../assets/Nav_Logo.svg';
import menuIcon from '../../assets/menu_icon.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">
            <img src={navLogo} alt="Nav Icon" />
          </a>
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-item active">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#members" className="nav-item">Members</a>
          <a href="#releases" className="nav-item">Releases</a>
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''} contUs`}>
          <a href="#contact" className="contact-us button--flex">Contact Us</a>
        </div>
        <div className="nav-toggle" onClick={toggleNavbar}>
          <img src={menuIcon} className={`${isOpen ? 'open' : ''}`} alt="Menu Icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
