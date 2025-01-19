import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "../App.css";

const PosterCanvas = ({ elements, setElements, setSelectedElement }) => {
  const [focusState, setFocusState] = useState({});

  const handleSelectElement = (id) => {
    setSelectedElement(elements.find((el) => el.id === id)); // Set the selected element
  };
  
  // Handle dragging of elements
  const handleDrag = (id, x, y) => {
    const updatedElements = elements.map((el) =>
      el.id === id ? { ...el, x, y } : el
    );
    setElements(updatedElements);
  };

  // Handle resizing of elements
  const handleResize = (id, width, height) => {
    const updatedElements = elements.map((el) =>
      el.id === id ? { ...el, width, height } : el
    );
    setElements(updatedElements);
  };

  // Focus event for text input
  const handleFocus = (id) => {
    setFocusState((prevState) => ({ ...prevState, [id]: true }));
  };

  // Blur event for text input
  const handleBlur = (id) => {
    setFocusState((prevState) => ({ ...prevState, [id]: false }));
  };

  return (
    <div className="canvas">
      {elements.map((el) => (
        <Rnd
          key={el.id}
          position={{ x: el.x, y: el.y }}
          size={{ width: el.width, height: el.height }}
          onDragStop={(e, d) => handleDrag(el.id, d.x, d.y)}
          onResizeStop={(e, direction, ref, delta, position) =>
            handleResize(el.id, ref.style.width, ref.style.height)
          }
          className={`shape ${el.type}`}
          onClick={() => handleSelectElement(el.id)}
          style={{
            backgroundColor: el.type === "text" ? "transparent" : el.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          enableResizing={{
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true,
          }}
        >
          {/* Render different shapes */}
          {el.type === "rectangle" && <div className="rectangle shape"></div>}
          {el.type === "circle" && <div className="circle shape"></div>}
          {el.type === "triangle" && <div className="triangle shape"></div>}
          {el.type === "star" && <div className="star shape"></div>}
          {el.type === "hexagon" && <div className="hexagon shape"></div>}

          {/* Text Input */}
          {el.type === "text" && (
            <textarea
              type="text"
              value={el.text}
              onChange={(e) =>
                setElements(
                  elements.map((item) =>
                    item.id === el.id ? { ...item, text: e.target.value } : item
                  )
                )
              }
              onInput={(e) => {
                e.target.style.height = "auto"; 
                e.target.style.height = `${e.target.scrollHeight}px`; 
              }}
              autoFocus
              onFocus={() => handleFocus(el.id)}
              onBlur={() => handleBlur(el.id)}
              style={{
                border: focusState[el.id] ? "2px solid rgb(0, 0, 0)" : "none",
                background: "transparent",
                fontSize: `${el.fontSize}px`,
                fontWeight: el.isBold ? "bold" : "normal", 
                fontStyle: el.isItalic ? "italic" : "normal", 
                color: el.color, 
                width: "100%",
                textAlign: "center",
                overflow:"hidden",
                resize: "none",
                whiteSpace: "pre-wrap", 
                lineHeight: "1.5",
              }}
            />
          )}

          {/* Image */}
          {el.type === "image" && (
            <img
              src={el.src}
              alt="Uploaded"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain", 
              }}
            />
          )}
        </Rnd>
      ))}
    </div>
  );
};

export default PosterCanvas;
