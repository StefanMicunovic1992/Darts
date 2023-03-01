import React, { useRef, useEffect } from "react";
import "./styleCreatePlayer/CreatePlayer.css";
import { useSelector, useDispatch } from "react-redux";
import { ActionCreators } from 'redux-undo';
import { setPlayer } from "../../store/PlayerSlice";

function CreatePlayer() {
  
  const inputName = useRef();
  const pointForPlayer = useRef();


  const playerState = useSelector((state) => state.player);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log( playerState);
  }, [playerState]);

  const createPlayerFnc = () => {

    if(inputName.current.value && pointForPlayer.current.value){

      dispatch(
        setPlayer({
          id: Date.now(),
          name: inputName.current.value,
          point: pointForPlayer.current.value,
          hits: [],
        })
      );
      console.log(playerState);
      inputName.current.value = "";
      pointForPlayer.current.value = "";
    }
  };

  const undoFnc = () => {
    dispatch(ActionCreators.undo());
    console.log( playerState);
  };

  const redoFnc = () => {
    dispatch(ActionCreators.redo());
  };

  return (
    <div>
      <h1>DARTS</h1>
      <div>
        <input type="number" name="numberOfPoint" id="numberOfPoint" ref={pointForPlayer}/>
        <input type="text" name="player" id="player" placeholder="player name" ref={inputName}/>
        {playerState.present.player.length < 4? <button onClick={createPlayerFnc}>add</button>:''}
      </div>
      <div>
        {playerState.present.player?.map((elem) => (
          <h2 key={elem.id}>{elem.name}</h2>
        ))}
      </div>
      { playerState.present.player.length === 4 || playerState.present.player.length >= 2 ?<button>start game</button>:''}
      <button onClick={undoFnc} disabled={!playerState.past.length}>
        Undo
      </button>
      <button onClick={redoFnc} disabled={!playerState.future.length}>
        Redo
      </button>
    </div>
  );
}

export default CreatePlayer;
