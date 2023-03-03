import getGameState from "./getGameState";

export default function getPlayers(state) {
    const gameState = getGameState(state)
    return gameState.present.player;
}