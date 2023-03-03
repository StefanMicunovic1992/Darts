import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './style/OnePlayer.css'

function OnePlayer(props) {

  const gameState = useSelector((state) => state.game);

const [isCurrentPlayer, setIsCurrentPlayer] = useState()

  const renderNumberOfHitsPerField = (data,num) => {
          
      if(data/num === 3){
        return 
      }else if(data/num === 2){
        return '/'
      }else if(data/num === 1){
        return '/ /'
      }else{
        return '/ / /'
      }
  }

  const setImageOfNumberOfHits = () =>{
    if(props.player.id === gameState.present.currentPlayer){
      return <img src="./img/dart-arrow.png" alt="arrow" className='arrow'/>
    }
  }
  return (
    <div className='onePlayer'>
      { setImageOfNumberOfHits()}
        {
          <table>
          <tr>
            <th>{props.player.name} : {props.player.point}</th>
          </tr>
          <tr>
            <th>15 : {renderNumberOfHitsPerField(props.player.point15,15)}</th>
          </tr>
          <tr>
            <th>16 : {renderNumberOfHitsPerField(props.player.point16,16)}</th>
          </tr>
          <tr>
            <th>17 : {renderNumberOfHitsPerField(props.player.point17,17)}</th>
          </tr>
          <tr>
            <th>18 : {renderNumberOfHitsPerField(props.player.point18,18)}</th>
          </tr>
          <tr>
            <th>19 : {renderNumberOfHitsPerField(props.player.point19,19)}</th>
          </tr>
          <tr>
            <th>20 : {renderNumberOfHitsPerField(props.player.point20,20)}</th>
          </tr>
          <tr>
            <th>Bull : {renderNumberOfHitsPerField(props.player.bull,50)}</th>
          </tr>
        </table>
        }
    </div>
  )
}

export default OnePlayer