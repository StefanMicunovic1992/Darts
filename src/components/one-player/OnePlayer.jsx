import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style/OnePlayer.css";

function OnePlayer(props) {
  const gameState = useSelector((state) => state.game);

  const renderNumberOfHitsPerField = (data, num) => {
    if (num !== 50) {
      if (data / num === 3) {
        return <span>{num} : </span>;
      } else if (data / num === 2) {
        return <span>{num} /</span>;
      } else if (data / num === 1) {
        return <span>{num} / /</span>;
      } else {
        return <span className="green">{num} : / / /</span>;
      }
    } else {
      if (data <= 50 && data > 0) {
        return <span>Bull : /</span>;
      } else if (data === 0) {
        return <span className="green">Bull : / /</span>;
      }else if(data === 75){
        return <span>Bull : </span>;
      }
    }
  };

  const setImageOfNumberOfHits = () => {
    if (props.player.id === gameState.present.currentPlayer) {
      return <img src="./img/dart-arrow.png" alt="arrow" className="arrow" />;
    }
  };

  return (
    <div className="onePlayer">
      <div className="resultPerPlayer">
        <h4>{props.player.name} : {props.player.point}</h4>
        {renderNumberOfHitsPerField(props.player.point15, 15)}
        {renderNumberOfHitsPerField(props.player.point16, 16)}
        {renderNumberOfHitsPerField(props.player.point17, 17)}
        {renderNumberOfHitsPerField(props.player.point18, 18)}
        {renderNumberOfHitsPerField(props.player.point19, 19)}
        {renderNumberOfHitsPerField(props.player.point20, 20)}
        {renderNumberOfHitsPerField(props.player.bull, 50)}
      </div>
      <div className="arrows">{setImageOfNumberOfHits()}</div>
    </div>
  );
}

export default OnePlayer;
