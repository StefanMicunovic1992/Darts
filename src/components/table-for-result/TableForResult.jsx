import React, { useEffect } from "react";
import "./style/TableForResult.css";
import { useSelector } from "react-redux";
import OnePlayer from "../one-player/OnePlayer";
import ArrowPresentation from "../arrow-presentation/ArrowPresentation";
import UndoRedoResetButtons from "../undo-redu-reset-buttons/UndoRedoResetButtons";

function TableForResult() {
  const gameState = useSelector((state) => state.game);

  return (
    <section id="tableForResult">
      <div id="arrowPresentation">
        <ArrowPresentation />
      </div>
      <div id="playersResult">
        {gameState.present.player?.map((player) => (
          <OnePlayer player={player} key={player.id} />
        ))}
      </div>
      <div id="buttonsDivs">
          <UndoRedoResetButtons/>
      </div>
    </section>
  );
}

export default TableForResult;
