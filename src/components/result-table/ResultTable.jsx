import React from "react";
import "./style/ResultTable.css";
import { useSelector } from "react-redux";
import ArrowPresentation from "../arrow-presentation/ArrowPresentation";
import UndoRedoResetButtons from "../undo-redu-reset-buttons/UndoRedoResetButtons";
import PlayerResult from "../player-result/PlayerResult";

function TableForResult() {
  const gameState = useSelector((state) => state.game);

  return (
    <section id="tableForResult">
      <div id="arrowPresentation">
        <ArrowPresentation />
      </div>
      <div id="playersResult">
        {gameState.present.player?.map((player) => (
          <PlayerResult player={player} key={player.id} />
        ))}
      </div>
      <div id="buttonsDivs">
          <UndoRedoResetButtons/>
      </div>
    </section>
  );
}

export default TableForResult;
