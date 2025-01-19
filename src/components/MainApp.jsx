import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MainPosterArea from "./MainPosterArea";
import "../App.css";

const MainApp = () => {

    const [elements, setElements] = useState([]);
    const [selectedFontSize, setSelectedFontSize] = useState(10);
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [selectedElement, setSelectedElement] = useState(null);

    const deleteSelectedElement = () => {
      if (selectedElement) {
        setElements(elements.filter((el) => el.id !== selectedElement.id));
        setSelectedElement(null); // Reset selected element
      }
    };

  return (
    <div className="app-container">
      <Topbar setElements={setElements}  
      selectedFontSize={selectedFontSize}
      setSelectedFontSize={setSelectedFontSize}
      isBold={isBold}
      setIsBold={setIsBold}
      isItalic={isItalic}
      setIsItalic={setIsItalic} 
      deleteSelectedElement={deleteSelectedElement} />
      <div className="content">
        <Sidebar setElements={setElements} 
         selectedFontSize={selectedFontSize}
         isBold={isBold}
         isItalic={isItalic} />
        <MainPosterArea elements={elements} setElements={setElements} setSelectedElement={setSelectedElement} />
      </div>
    </div>
  )
}

export default MainApp
