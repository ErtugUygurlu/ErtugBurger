import React from 'react';
import ImageBanner from '../assets/banner.png';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className='mainPage' style={{ backgroundImage: `url(${ImageBanner})` }}>
      <div className='order'>
        <Link to="/menu" className='button'>
          Menüyü İncele
        </Link>
      </div>
    </div>
  );
}

export default Home;
