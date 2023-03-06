import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import getGameState from '../../store/selectors/getGameState';
import { ActionCreators } from "redux-undo";
import './style/UndoRedoResetButtons.css'

function UndoRedoResetButtons() {

  const gameState = useSelector(getGameState);
  const history = useNavigate();
  const dispatch = useDispatch();

  const resetGame = () => {
      window.location.reload();
      history("/");
  }

  const undoFnc2 = () => {
    if(gameState.past.length > 3){
      dispatch(ActionCreators.jump(-3));
    }
  };

  const redoFnc2 = () => {
    dispatch(ActionCreators.jump(+3));
  };

  return (
    <div id='UndoRedoResetButtons'>
        <button onClick={resetGame}>Reset</button>
        <button onClick={undoFnc2} disabled={!gameState.past.length}>Undo</button>
        <button onClick={redoFnc2} disabled={!gameState.future.length}>Redu</button>
    </div>
  )
}

export default UndoRedoResetButtons