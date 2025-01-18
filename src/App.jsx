import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MainPosterArea from "./components/MainPosterArea";
import "./App.css";


function App() {
  const [elements, setElements] = useState([]);
  const [selectedFontSize, setSelectedFontSize] = useState(10);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  console.log(selectedFontSize,isBold,isItalic);
  
  return (
    <div className="app-container">
      <Topbar setElements={setElements}  
      selectedFontSize={selectedFontSize}
      setSelectedFontSize={setSelectedFontSize}
      isBold={isBold}
      setIsBold={setIsBold}
      isItalic={isItalic}
      setIsItalic={setIsItalic} />
      <div className="content">
        <Sidebar setElements={setElements} 
         selectedFontSize={selectedFontSize}
         isBold={isBold}
         isItalic={isItalic} />
        <MainPosterArea elements={elements} setElements={setElements} />
      </div>
    </div>
  );
}

export default App;
