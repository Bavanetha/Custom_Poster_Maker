import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import MainApp from "./components/MainApp";
import "./App.css";


function App() {
    
  return (
    <>
    
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-poster" element={<MainApp />} />
      </Routes>
    </Router>
      
    </>
    
  );
}

export default App;
