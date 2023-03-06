import React, { useEffect, useRef } from 'react'
import './style/EndGame.css'
import ReactConfetti from 'react-confetti'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function EndGame() {
    const winner = useSelector((state) => state.game.present.winner);
    const endGameDiv = useRef(null)
    const history = useNavigate();

    useEffect(()=>{
        if(winner){
            endGameDiv.current.className = 'showDiv'
        }else{
            endGameDiv.current.className = 'hideDiv'
        }
    },[winner])
    

    const startNewGame = () =>{
        window.location.reload();
      history("/");
    }
  return (
    <div className='hideDiv' ref={endGameDiv}>
        <ReactConfetti/>
        <h2>WINNER</h2>
        <h2>{winner.name}</h2>
        <button id='newGame' onClick={startNewGame}>New game</button>
    </div>
  )
}

export default EndGame