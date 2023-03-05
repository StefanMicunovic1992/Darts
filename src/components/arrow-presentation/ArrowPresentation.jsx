import React from "react";
import { useSelector } from "react-redux";
import './style/ArrowPresentation.css'

function ArrowPresentation() {
  const numberOfShot = useSelector((state) => state.game.present.numberOfShot);
  const arrows = Array.from({ length: numberOfShot });

  return (
    <div id="ArrowPresentation">
      <div id="nextPlayerDiv">
        <button>next player</button>
      </div>
      <div id="arrowImg">
        {arrows.map((element) => (
          <img src="/img/dart-arrow.png" alt="arrow" />
        ))}
      </div>
    </div>
  );
}
export default ArrowPresentation;
