export default function checkWinner(data,currentPlayer) {

    let currentPlayerFromStore = data.present.player.filter(element => element.id === currentPlayer.id)
    currentPlayerFromStore = currentPlayerFromStore[0]

  if (
    currentPlayerFromStore.bull === 0 &&
    currentPlayerFromStore.point15 === 0 &&
    currentPlayerFromStore.point16 === 0 &&
    currentPlayerFromStore.point17 === 0 &&
    currentPlayerFromStore.point18 === 0 &&
    currentPlayerFromStore.point19 === 0 &&
    currentPlayerFromStore.point20 === 0
  ) {
      // console.log('winnerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    return true; 
  }else{
      // console.log('praznoooooooooooooooooooooooooooooooooooooooooooooooooo')
    return false   
  }
}
