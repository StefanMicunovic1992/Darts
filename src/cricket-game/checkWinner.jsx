export default function checkWinner(data,currentPlayer) {

    let currentPlayerFromStore = data.present.player.filter(element => element.id === currentPlayer.id)//izbrisati ovaj deo koda
    currentPlayerFromStore = currentPlayerFromStore[0]
    let winner = currentPlayerFromStore;
  if (
    currentPlayerFromStore.bull === 0 &&
    currentPlayerFromStore.point15 === 0 &&
    currentPlayerFromStore.point16 === 0 &&
    currentPlayerFromStore.point17 === 0 &&
    currentPlayerFromStore.point18 === 0 &&
    currentPlayerFromStore.point19 === 0 &&
    currentPlayerFromStore.point20 === 0
  ) {
    const otherPlayers = data.present.player.filter(element => element.id !== currentPlayerFromStore.id)
    console.log('trenutni igrac koji dolazi u check winner',currentPlayer)
    otherPlayers.forEach(player => {
      if(currentPlayerFromStore.point <= player.point){
        console.log('poeni proveravanog igraca',currentPlayerFromStore.point)
        console.log('poeni ostalih igraca',player.point)
        console.log('ceo objekat igraca',currentPlayerFromStore)
        winner = true;
      }else{
        winner = false;
      }
    });
    // console.log('winnerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
      return winner;
  }else{
      console.log('praznoooooooooooooooooooooooooooooooooooooooooooooooooo')
    return false   
  }
}
