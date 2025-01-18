import React, { useState } from "react";
import "../App.css";

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
      <label htmlFor="imageUpload" style={{ cursor: "pointer", padding: "10px", background: "#007bff", color: "white", borderRadius: "5px", display: "inline-block" }}>
        Upload Image
      </label>
      
      <button onClick={() => addElement("rectangle")}>Rectangle</button>
      <button onClick={() => addElement("circle")}>Circle</button>
      <button onClick={() => addElement("triangle")}>Triangle</button>
      <button onClick={() => addElement("star")}>Star</button>
      <button onClick={() => addElement("hexagon")}>Hexagon</button>
      <button onClick={() => addElement("text")}>Text</button>

    </div>
  );
};

export default Sidebar;
