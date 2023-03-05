import React, { useEffect } from "react";
import "./style/TableForResult.css";
import { useSelector } from "react-redux";
import OnePlayer from "../one-player/OnePlayer";

function TableForResult() {
  const gameState = useSelector((state) => state.game);

  return (
    <section id="tableForResult">
      {gameState.present.player?.map((player) => (
      <OnePlayer player={player} key={player.id}/>
      ))}
    </section>
  );
}

export default TableForResult;
