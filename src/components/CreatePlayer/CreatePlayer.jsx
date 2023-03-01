import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {actions} from '../../store/index'

function CreatePlayer() {

    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch()
    
    
    const increment = () => {
        dispatch(actions.increment())
    }

  return (
    <div>
        <div>{counter}</div>
        <button onClick={increment}>increase</button>
    </div>
  )
}

export default CreatePlayer
