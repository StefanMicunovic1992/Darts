import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import './style/OnePlayer.css'

function OnePlayer(props) {

  const gameState = useSelector((state) => state.game);



  useEffect(()=>{
console.log(gameState)
  },[gameState])

  const checkValue = (data,number) => {
    
      
      if(data/number === 3){
        return 3
      }else if(data/number === 2){
        return 2
      }else if(data/number === 1){
        return 1
      }else{
        return 0
      }
  }
  return (
    <div className='onePlayer'>
        {
          <table>
          <tr>
            <th>{props.player.name} : {props.player.point}</th>
          </tr>
          <tr>
            <th>{checkValue(props.player.point15,15)}</th>
          </tr>
          <tr>
            <th>{checkValue(props.player.point16,16)}</th>
          </tr>
          <tr>
            <th>{checkValue(props.player.point17,17)}</th>
          </tr>
          <tr>
            <th>{checkValue(props.player.point18,18)}</th>
          </tr>
          <tr>
            <th>{checkValue(props.player.point19,19)}</th>
          </tr>
          <tr>
            <th>{checkValue(props.player.point20,20)}</th>
          </tr>
          <tr>
            <th>{checkValue(props.player.bull,50)}</th>
          </tr>
        </table>
        }
    </div>
  )
}

export default OnePlayer