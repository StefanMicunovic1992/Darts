import React, { useRef, useEffect } from "react";
import "./styleCreatePlayer/CreatePlayer.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/index";

function CreatePlayer() {
  const inputName = useRef();
  const pointForPlayer = useRef();

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("ulazi u useEffect");
    console.log(counter);
  }, [counter]);

  const createPlayerFnc = () => {

    if(inputName.current.value && pointForPlayer.current.value){

      dispatch(
        actions.add({
          id: Date.now(),
          name: inputName.current.value,
          point: pointForPlayer.current.value,
          hits: [],
        })
      );
      console.log(counter);
      inputName.current.value = "";
      pointForPlayer.current.value = "";
    }
  };

  return (
    <div>
      <h1>DARTS</h1>
      <div>
        <input type="number" name="numberOfPoint" id="numberOfPoint" ref={pointForPlayer}/>
        <input type="text" name="player" id="player" placeholder="player name" ref={inputName}/>
        {counter.length < 4 ? <button onClick={createPlayerFnc}>add</button>:''}
        
      </div>
      <div>
        {counter?.map((elem) => (
          <h2 key={elem.id}>{elem.name}</h2>
        ))}
      </div>
      {counter.length === 4 || counter.length >= 2 ?<button>start game</button>:''}
    </div>
  );
}

export default CreatePlayer;
