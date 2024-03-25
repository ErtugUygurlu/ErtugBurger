import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import '../styles/Footer.css'; 

function Footer() {
  return (
    <div className="footer-container custom-color">
      <div className="footer-content">
        <FacebookIcon className="custom-color" />
        <InstagramIcon className="custom-color" />
        <XIcon className="custom-color" />
      </div>
      <div className="footer-text">
        <span className="custom-color" style={{ color: 'red' }}>|</span> Tüm hakları saklıdır <span className="custom-color" style={{ color: 'red' }}>|</span> <span className="custom-color">ERTUĞ BURGER</span>
      </div>
    </div>
  );
}

export default Footer;
