import React from "react";
import PosterCanvas from "./PosterCanvas";
import "../App.css";

const MainPosterArea = ({ elements, setElements }) => {
  return (
    <div className="poster-container">
      <div id="poster-area" className="poster-area">
        <PosterCanvas elements={elements} setElements={setElements} />
      </div>
    </div>
  );
};

export default MainPosterArea;
