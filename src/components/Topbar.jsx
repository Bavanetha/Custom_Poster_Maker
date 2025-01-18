import React, { useState } from "react";
import domtoimage from "dom-to-image";
import "../App.css";

const Topbar = ({ setElements, selectedFontSize,setSelectedFontSize,isBold,setIsBold,isItalic,setIsItalic}) => {
  
  const clearCanvas = () => {
    setElements([]); 
  };



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
        <option value={16}>16px</option>
        <option value={18}>18px</option>
        <option value={20}>20px</option>
        <option value={22}>22px</option>
        <option value={24}>24px</option>
        <option value={26}>26px</option>
        <option value={30}>30px</option>
        <option value={34}>34px</option>
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
  );
};

export default Topbar;
