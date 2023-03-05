import React from "react";
import { useSelector } from "react-redux";

function ArrowPresentation() {


    const numberOfShot = useSelector((state) => state.game.present.numberOfShot)
    const arrows = Array.from({length: 3- numberOfShot})

  return <div>
    {
        arrows.map(element=>(
            <img src="/img/dart-arrow.png" alt="arrow" />
        ))
    }
  </div>;
}
export default ArrowPresentation;
