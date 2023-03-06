import React from "react";
import Dartboard from "../dartboard/Dartboard";
import EndGame from "../end-game/EndGame";
import ResultTable from "../result-table/ResultTable";
import "./style/Game.css";

function Game() {

  return (
    <section id="gamePage">
      <Dartboard />
      <ResultTable />
      <EndGame/>
    </section>
  );
}

export default Game;
