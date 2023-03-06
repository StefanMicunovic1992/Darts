import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./style/PlayerResult.css";

function PlayerResult(props) {
  const currentPlayer = useSelector((state) => state.game.present.currentPlayer);
  const myRef = useRef(null);
  useEffect(()=>{
    if(currentPlayer.id === props.player.id){
      myRef.current.className = 'current';
    }else{
      myRef.current.className = 'onePlayer';
    }
  },[currentPlayer])

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

  return (
    <div className="onePlayer" ref={myRef}>
      <div className="resultPerPlayer">
        <h4>{props.player.name} : {props.player.point}</h4>
        {renderNumberOfHitsPerField(props.player.cricketPoints.point15, 15)}
        {renderNumberOfHitsPerField(props.player.cricketPoints.point16, 16)}
        {renderNumberOfHitsPerField(props.player.cricketPoints.point17, 17)}
        {renderNumberOfHitsPerField(props.player.cricketPoints.point18, 18)}
        {renderNumberOfHitsPerField(props.player.cricketPoints.point19, 19)}
        {renderNumberOfHitsPerField(props.player.cricketPoints.point20, 20)}
        {renderNumberOfHitsPerField(props.player.cricketPoints.bull, 50)}
      </div>
    </div>
  );
}

export default PlayerResult;