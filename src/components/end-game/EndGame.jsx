import React, { useEffect, useRef } from 'react'
import './style/EndGame.css'
import ReactConfetti from 'react-confetti'
import { useSelector } from 'react-redux';

function EndGame() {
    const winner = useSelector((state) => state.game.present.winner);

    useEffect(()=>{
        if(winner){
            endGameDiv.current.className = 'showDiv'
        }else{
            endGameDiv.current.className = 'hideDiv'
        }
    },[winner])
    console.log(winner)
    const endGameDiv = useRef(null)
  return (
    <div className='hideDiv' ref={endGameDiv}>
        <ReactConfetti/>
        <h2>WINNER</h2>
        <h2>{winner.name}</h2>
    </div>
  )
}

export default EndGame