import React, { useEffect, useState } from "react";
import "./style/CreatePlayer.css";
import { useSelector, useDispatch } from "react-redux";
import { ActionCreators } from 'redux-undo';
import { setPlayer } from "../../store/PlayerSlice";
import { useNavigate } from "react-router-dom";

function CreatePlayer() {

  const MAX_PLAYER_FOR_GAME = 4;
  const MIN_PLAYER_FOR_GAME = 2;
  
  const [inputNameValue, setInputNameValue] = useState('');

  const gameState = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    console.log("test", gameState);
  }, [gameState]);

  const createPlayerFnc = () => {

    if(inputNameValue){

      dispatch(
        setPlayer({
          id: Date.now(),
          name: inputNameValue,
          point: 0,
          point15:45,
          point16:48,
          point17:51,
          point18:54,
          point19:57,
          point20:60,
          bull:75
        })
      );
      setInputNameValue('')
    }
  };

  const undoFnc = () => {
    dispatch(ActionCreators.undo());
    console.log( gameState);
  };

  const redoFnc = () => {
    dispatch(ActionCreators.redo());
  };

  const handleChangeInputName = (e) => setInputNameValue(e.target.value);

  const playGameFnc = () => history("/game");

  return (
    <div>
      <h1>DARTS</h1>
      <div>
        {/* <div>
          <input type="radio" name="pointForGame" id="301" />
          <label htmlFor="pointForGame">301</label>
          <input type="radio" name="pointForGame" id="501" />
          <label htmlFor="pointForGame">501</label>
          <input type="radio" name="pointForGame" id="701" />
          <label htmlFor="pointForGame">701</label>
        </div> */}
        <input type="text" name="player" id="player" placeholder="player name" value={inputNameValue} onChange={handleChangeInputName}/>
        {gameState.present.player.length < MAX_PLAYER_FOR_GAME ? <button onClick={createPlayerFnc}>ADD</button>:''}
      </div>
      <div>
        {gameState.present.player?.map((elem) => (
          <h2 key={elem.id}>{elem.name}</h2>
        ))}
      </div>
      { gameState.present.player.length >= MIN_PLAYER_FOR_GAME ?<button onClick={playGameFnc}>start game</button>:''}
      <button onClick={undoFnc} disabled={!gameState.past.length}>
        Undo
      </button>
      <button onClick={redoFnc} disabled={!gameState.future.length}>
        Redo
      </button>
    </div>
  );
}

export default CreatePlayer;
