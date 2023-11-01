import React from 'react'
import NavBar from './NavBar'

const Home = () => {
  const handleJoinClick = () => {

  };
  return (
    <div className="home-container">
      <NavBar />
      <button onClick={handleJoinClick}>Join</button> 
    </div >
  );
};

export default Home;

