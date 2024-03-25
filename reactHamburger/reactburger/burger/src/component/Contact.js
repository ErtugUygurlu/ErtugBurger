import React, { useEffect, useState } from 'react';
import '../styles/Contact.css'; 
import ImageBanner from '../assets/burgers.jpg';

function Contact() {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    setShowElements(true);
  }, []);

  return (
    <div className={`contact ${showElements ? 'show' : ''}`}>
      <div className={`leftSide ${showElements ? 'show' : ''}`} style={{ backgroundImage: `url(${ImageBanner})` }}></div>
      <div className={`rightSide ${showElements ? 'show' : ''}`}>
        <h1 className={`${showElements ? 'show' : ''}`}>Bizimle İletişime Geçiniz</h1>
        <form className={`${showElements ? 'show' : ''}`}>
          <label className={`${showElements ? 'show' : ''}`} htmlFor="fullName">Ad Soyad</label>
          <input className={`${showElements ? 'show' : ''}`} type="text" id="fullName" placeholder='Lütfen adınız soyadınızı giriniz...' />
          <label className={`${showElements ? 'show' : ''}`} htmlFor="email">Emailiniz</label>
          <input className={`${showElements ? 'show' : ''}`} type="email" id="email" placeholder='Lütfen mailinizi giriniz...' />
          <label className={`${showElements ? 'show' : ''}`} htmlFor="message">Mesajınız</label>
          <textarea className={`${showElements ? 'show' : ''}`} id="message" placeholder='Lütfen mesajınızı giriniz...'></textarea>
          <button className={`${showElements ? 'show' : ''}`} type="submit">
            <span role="img" aria-label="burger-icon">🍔</span> Gönder
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
