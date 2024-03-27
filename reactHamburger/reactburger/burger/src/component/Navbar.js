// Navbar.js

import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='navbar'>
      <div className='logo-container' onClick={toggleMenu}>
        <img src={Logo} alt="Logo" className='logo heartbeat' />
      </div>
      <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`mainLink ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Anasayfa</Link>
        <Link to="/menu" onClick={closeMenu}>Menü</Link>
        <Link to="/about" onClick={closeMenu}>Hakkımızda</Link>
        <Link to="/contact" onClick={closeMenu}>İletişim</Link>
      </div>
    </div>
  );
}

export default Navbar;
