import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Github Battle: Battle your friends... and stuff.</h2>
      <Link to="/battle" className="button" >
        Battle
      </Link>
    </div>
  )
}

export default Home;