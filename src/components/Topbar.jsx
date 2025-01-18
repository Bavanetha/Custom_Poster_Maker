import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import domtoimage from "dom-to-image";
import "../App.css";

const Topbar = ({ setElements, selectedFontSize,setSelectedFontSize,isBold,setIsBold,isItalic,setIsItalic}) => {

  const navigate = useNavigate();
  
  const clearCanvas = () => {
    setElements([]); 
  };

  const returnBack = () => {
    navigate("/");
  }

const saveAsImage = () => {
  const canvasArea = document.getElementById("poster-area");

  domtoimage.toPng(canvasArea).then((dataUrl) => {
    const link = document.createElement("a");
    link.download = "poster.png";
    link.href = dataUrl;
    link.click();
  }).catch((error) => {
    console.error("Error saving image:", error);
  });
};


  return (
    <div className="topbar">

      <button onClick={returnBack} className="back-btn">Back</button>
      <div className ="container">
      <button onClick={clearCanvas}>Clear</button>
      <button onClick={saveAsImage}>Save as PNG</button>

      {/* Font Size Selector */}
      <div>
      <label>Font Size:</label>
      <select
        value={selectedFontSize}
        onChange={(e) => {
          setSelectedFontSize(e.target.value);
        }}
      >
        <option value={10}>10px</option>
        <option value={15}>15px</option>
        <option value={18}>18px</option>
        <option value={20}>20px</option>
        <option value={24}>24px</option>
        <option value={28}>28px</option>
        <option value={30}>30px</option>
        <option value={34}>34px</option>
        <option value={38}>38px</option>
        <option value={40}>40px</option>
        <option value={45}>45px</option>
        <option value={50}>50px</option>
      </select>
      </div>
      

      {/* Bold Button */}
      <button
        onClick={() => {
          setIsBold(!isBold);
        }}
        style={{ fontWeight: isBold ? "bold" : "normal" }}
      >
        B
      </button>

      {/* Italic Button */}
      <button
        onClick={() => {
          setIsItalic(!isItalic);
        }}
        style={{ fontStyle: isItalic ? "italic" : "normal" }}
      >
        I
      </button>

      </div>

      
      
    </div>
  );
};

export default Topbar;
