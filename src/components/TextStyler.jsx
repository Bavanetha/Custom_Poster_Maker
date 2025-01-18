import React, { useState } from "react";

const TextStyler = () => {
  const [style, setStyle] = useState({
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "16px", // Default font size
  });
  const [text, setText] = useState("");

  // Handle Bold change
  const handleBoldChange = (e) => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      fontWeight: e.target.checked ? "bold" : "normal",
    }));
  };

  // Handle Italic change
  const handleItalicChange = (e) => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      fontStyle: e.target.checked ? "italic" : "normal",
    }));
  };

  // Handle Font Size change
  const handleFontSizeChange = (e) => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      fontSize: e.target.value,
    }));
  };

  return (
    <div>
      <h2>Text Styler</h2>
      
      <div>
        <label>
          <input
            type="checkbox"
            onChange={handleBoldChange}
          />{" "}
          Bold
        </label>
        
        <label>
          <input
            type="checkbox"
            onChange={handleItalicChange}
          />{" "}
          Italic
        </label>
      </div>
      
      <div>
        <label>
          Font Size: 
          <select onChange={handleFontSizeChange} value={style.fontSize}>
            <option value="12px">12px</option>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
            <option value="28px">28px</option>
          </select>
        </label>
      </div>

      <div>
        <textarea
          placeholder="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <p style={style}>{text}</p>
      </div>
    </div>
  );
};

export default TextStyler;
