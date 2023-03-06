export default function checkWinner(gameState, currentPlayer) {
  if (currentPlayer) {
    if (
      currentPlayer.cricketPoints.bull === 0 &&
      currentPlayer.cricketPoints.point15 === 0 &&
      currentPlayer.cricketPoints.point16 === 0 &&
      currentPlayer.cricketPoints.point17 === 0 &&
      currentPlayer.cricketPoints.point18 === 0 &&
      currentPlayer.cricketPoints.point19 === 0 &&
      currentPlayer.cricketPoints.point20 === 0
    ) {
      console.log("prolazi prvi if");
      const otherPlayers = gameState.present.player.filter(
        (element) => element.id !== currentPlayer.id
      );
      const comparisonCurrentAndOther = otherPlayers.filter(
        (element) => element.point < currentPlayer.point
      );
      if (comparisonCurrentAndOther.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
