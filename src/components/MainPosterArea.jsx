import React, { useState } from "react";
import PosterCanvas from "./PosterCanvas";
import "../App.css";

const MainPosterArea = ({ elements, setElements, setSelectedElement,posterSize }) => {
  const [backgroundColor, setBackgroundColor] = useState("#f0f0f0");
  
  const handleColorChange = (e) => {
    setBackgroundColor(e.target.value); 
    // Change the canvas background color dynamically
    document.querySelector('.poster-area').style.backgroundColor = e.target.value;
  };
  return (
    <div className="poster-container">
      <div className="bg">
      <lable>Poster Background Color</lable>
      <input
              type="color"
              value={backgroundColor}
              onChange={handleColorChange}
              style={{ marginBottom: "10px" }}
      />
      </div>
      
      <div
        id="poster-area"
        className="poster-area"
        style={{
          width: posterSize.width,
          height: posterSize.height,
          backgroundColor: backgroundColor,
        }}
      >
        <PosterCanvas elements={elements} setElements={setElements} setSelectedElement = {setSelectedElement} />
      </div>
    </div>
  );
};

export default MainPosterArea;
