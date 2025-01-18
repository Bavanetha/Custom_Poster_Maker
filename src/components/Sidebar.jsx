import React, { useState } from "react";
import "../App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Sidebar = ({ setElements, selectedFontSize, isBold, isItalic }) => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  console.log(selectedFontSize)

  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      x: 50,
      y: 50,
      width: 200,
      height: 100,
      color: selectedColor, // Apply the selected color here
      text: type === "text" ? "Add your text here" : null,
      fontSize: selectedFontSize,
      isBold: isBold,
      isItalic: isItalic,
    };
    setElements((prev) => [...prev, newElement]);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Read file as Base64
      reader.onload = () => {
        const imageUrl = reader.result; // Get the image data
  
        const newElement = {
          id: Date.now(),
          type: "image",
          src: imageUrl, // Store image URL
          x: 100,
          y: 100,
          width: 200,
          height: 150,
        };
        setElements((prev) => [...prev, newElement]); // Add image to elements state
      };
    }
  };
  
  

  return (
    <div className="sidebar">
      <label>Choose Color:</label>
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
        id="imageUpload"
      />
      <label htmlFor="imageUpload" className="upload-btn">
        Upload Image
      </label>
      <label>SHAPES</label>
      <button onClick={() => addElement("rectangle")}><i className="fa-solid fa-square"></i></button>
      <button onClick={() => addElement("circle")}><i className="fa-solid fa-circle"></i></button>
      <button onClick={() => addElement("triangle")}><i className="fa-solid fa-play fa-rotate-270"></i></button>
      <button onClick={() => addElement("star")}><i className="fa-solid fa-star"></i></button>
      <button onClick={() => addElement("hexagon")}>⬢ </button>
      <button onClick={() => addElement("text")}><i className="fa-solid fa-t"></i></button>

    </div>
  );
};

export default Sidebar;
