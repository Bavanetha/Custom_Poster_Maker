import React from 'react';
import {useNavigate } from "react-router-dom";

import "../App.css";

const Home = () => {

 const navigate = useNavigate();

  const handleCreatePosterClick = () => {
    navigate("/create-poster");
  };

  return (
    <div className = "home">
      <h1>Turn Your Vision Into a Beautiful Poster – Start Creating Now!</h1>
      <button onClick={handleCreatePosterClick}>Create Poster</button>
    </div>
  )
}

export default Home
