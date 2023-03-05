import React from "react";
import { useSelector } from "react-redux";
import Dartboard from "../dartboard/Dartboard";
import TableForResult from "../table-for-result/TableForResult";
import "./style/Game.css";

function Game() {
  const gameState = useSelector((state) => state.game);

  // const onDashboardHit = (value) => {
  //   console.log('on dashbord hit', value)
  // }

  return (
    <section id="gamePage">
      <Dartboard />
      <TableForResult />
    </section>
  );
}

export default Game;
