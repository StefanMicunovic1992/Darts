import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import './style/ArrowPresentation.css'
import { setCurrentPlayer, resetNumberOfShot} from "../../store/PlayerSlice";

function ArrowPresentation() {
  const numberOfShot = useSelector((state) => state.game.present.numberOfShot);
  const gameState = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const nextPlayerRef = useRef(null);
  const [counterForPlayer, setCounterForPlayer] = useState(0);
  const currentPlayer = gameState.present.player[counterForPlayer];

  const arrows = Array.from({ length: numberOfShot });

  dispatch(setCurrentPlayer(currentPlayer))
  // useEffect(()=>{
  //   console.log(currentPlayer)
  // },[])


  useEffect(()=>{
    console.log(currentPlayer)
  },[currentPlayer])

  useEffect(()=>{
    if(numberOfShot === 0){
      nextPlayerRef.current.className = 'pulsing';
    }else{
      nextPlayerRef.current.className = '';
    }
  },[numberOfShot])

const setNewPlayerAndResetShots =async () => {
  if(numberOfShot === 0) {
    if (counterForPlayer === gameState.present.player.length - 1) {
      setCounterForPlayer(0)
      dispatch(setCurrentPlayer(currentPlayer))
    }else{
      console.log('pre',counterForPlayer)
      await setCounterForPlayer( counterForPlayer + 1 )
      console.log('posle',counterForPlayer)
      await dispatch(setCurrentPlayer(currentPlayer))
    }
    dispatch(resetNumberOfShot(3))
  }
}


  return (
    <div id="ArrowPresentation">
      <div id="nextPlayerDiv">
        <button onClick={setNewPlayerAndResetShots} ref={nextPlayerRef}>next player</button>
      </div>
      <div id="arrowImg">
        {arrows.map((element) => (
          <img src="/img/dart-arrow.png" alt="arrow"/>
        ))}
      </div>
    </div>
  );
}
export default ArrowPresentation;
