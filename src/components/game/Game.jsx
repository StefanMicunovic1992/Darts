import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dartboard from "../dartboard/Dartboard";
import EndGame from "../end-game/EndGame";
import TableForResult from "../table-for-result/TableForResult";
import "./style/Game.css";

function Game() {
  

  // const onDashboardHit = (value) => {
  //   console.log('on dashbord hit', value)
  // }

  return (
    <section id="gamePage">
      <Dartboard />
      <TableForResult />
      <EndGame/>
    </section>
  );
}

export default Game;
