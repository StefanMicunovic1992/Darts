import React from 'react'
import Dartboard from '../dartboard/Dartboard'
import TableForResult from '../table-for-result/TableForResult'
import './style/Game.css'

function Game() {

  const onDashboardHit = (value) => {
    console.log('on dashbord hit', value)
  }

  return (
    <section id='gamePage'>
      <Dartboard onDashboardHit={onDashboardHit}/>
      <TableForResult />
    </section>
  )
}

export default Game