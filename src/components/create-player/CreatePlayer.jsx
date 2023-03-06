import React, { useState } from "react";
import "./style/CreatePlayer.css";
import { useSelector, useDispatch } from "react-redux";
import { ActionCreators } from "redux-undo";
import { setPlayer } from "../../store/PlayerSlice";
import { useNavigate } from "react-router-dom";
import getGameState from "../../store/selectors/getGameState";
import getPlayers from "../../store/selectors/getPlayers";

function CreatePlayer() {
  
  const MIN_PLAYER_FOR_GAME = 2;
  const MAX_PLAYER_FOR_GAME = 4;

  const dispatch = useDispatch();
  const history = useNavigate();

  const [inputNameValue, setInputNameValue] = useState("");

  const gameState = useSelector(getGameState);
  const players = useSelector(getPlayers);

  const createPlayerFnc = () => {
    if (inputNameValue) {
      dispatch(
        setPlayer({
          id: Date.now(),
          name: inputNameValue,
          point: 0,
          point15: 45,
          point16: 48,
          point17: 51,
          point18: 54,
          point19: 57,
          point20: 60,
          bull: 75,
        })
      );
      setInputNameValue("");
    }
  };

  const undoFnc = () => {
    dispatch(ActionCreators.undo());
    console.log(gameState);
  };

  const redoFnc = () => {
    dispatch(ActionCreators.redo());
  };

  const handleChangeInputName = (e) => setInputNameValue(e.target.value);

  const playGameFnc = () => {
    history("/game"); 
    };

  return (
    <section id="createPlayer">
      <h1>DARTS</h1>
      <div id="inputAndBtn">
        <h2>Create players</h2>
        <div id="inputDiv">
          <input
            type="text"
            name="player"
            id="player"
            placeholder="player name"
            value={inputNameValue}
            onChange={handleChangeInputName}
          />
          {players.length < MAX_PLAYER_FOR_GAME && (
            <button onClick={createPlayerFnc}>ADD</button>
          )}
        </div>
        <div id="renderPlayersName">
          {players?.map((elem) => (
            <h2 key={elem.id}>{elem.name}</h2>
          ))}
        </div>
        <div id="undoRedoBtn">
          <button onClick={undoFnc} disabled={!gameState.past.length}>
            Undo
          </button>
          <button onClick={redoFnc} disabled={!gameState.future.length}>
            Redo
          </button>
        </div>
        {players.length >= MIN_PLAYER_FOR_GAME && <button onClick={playGameFnc} id='startGameBtn'>start game</button>}
      </div>
    </section>
  );
}

export default CreatePlayer;
