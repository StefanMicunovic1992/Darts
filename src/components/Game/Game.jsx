import React from 'react'
import Dartboard from '../dartboard/Dartboard'
import TableForResult from '../table-for-result/TableForResult'
import './style/Game.css'

function Game() {

  return (
    <section id='gamePage'>
      <Dartboard />
      <TableForResult />
    </section>
  )
}

export default Game