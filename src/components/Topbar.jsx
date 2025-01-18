import React, { useState } from "react";
import html2canvas from "html2canvas";
import "../App.css";

const Topbar = ({ setElements, selectedFontSize,setSelectedFontSize,isBold,setIsBold,isItalic,setIsItalic}) => {
  
  const clearCanvas = () => {
    setElements([]); 
  };

  const saveAsImage = () => {
    const canvasArea = document.getElementById("poster-area");
    html2canvas(canvasArea).then((canvas) => {
      const link = document.createElement("a");
      link.download = "poster.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="topbar">

      <button onClick={clearCanvas}>Clear</button>
      <button onClick={saveAsImage}>Save as PNG</button>

      {/* Font Size Selector */}
      <label>Font Size:</label>
      <select
        value={selectedFontSize}
        onChange={(e) => {
          setSelectedFontSize(e.target.value);
        }}
      >
        <option value={16}>16px</option>
        <option value={18}>18px</option>
        <option value={20}>20px</option>
        <option value={24}>24px</option>
        <option value={30}>30px</option>
      </select>

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
