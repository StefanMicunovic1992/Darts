import { configureStore, createSlice } from "@reduxjs/toolkit";
import undoable, { ActionCreators } from "redux-undo";
import { isEqual } from "lodash";

const gameSlice = createSlice({
  name: "game",
  initialState: { player: [], currentPlayer: "", winner: "", numberOfShot: 3 },
  reducers: {
    setPlayer: (state, action) => {
      state.player.push({
        id: action.payload.id,
        name: action.payload.name,
        point: action.payload.point,
        cricketPoints: {
          point15: action.payload.point15,
          point16: action.payload.point16,
          point17: action.payload.point17,
          point18: action.payload.point18,
          point19: action.payload.point19,
          point20: action.payload.point20,
          bull: action.payload.bull,
        },
      });
    },
    setNumberOfShot: (state, action) => {
      state.numberOfShot -= action.payload;
    },
    resetNumberOfShot: (state, action) => {
      state.numberOfShot = action.payload;
    },
    setWinner: (state, action) => {
      state.winner = action.payload;
    },
    setCurrentPlayer: (state, action) => {
      state.currentPlayer = action.payload;
    },
    setHits: (state, action) => {
      const hitValue = action.payload.idOfField.substring(1);
      state.player.map((element) => {
        if (element.id === action.payload.idOfCurrentPlayer) {
          // eslint-disable-next-line default-case
          switch (hitValue) {
            case "15":
            case "16":
            case "17":
            case "18":
            case "19":
            case "20":
              element.cricketPoints[`point${hitValue}`] -=
                action.payload.resultForCurrentPlayer;
                break;
            case "25":
            case "50":
              element.cricketPoints[`bull`] -=
                action.payload.resultForCurrentPlayer;
          }
        }
      });
    },
    setHitsForOtherPlayer: (state, action) => {
      
      const hitValur = action.payload.idOfField.substring(1)
      state.player.map(element => {
        
        if(element.id !== action.payload.idOfCurrentPlayer){
          // eslint-disable-next-line default-case
          switch(hitValur){
            case '15':{
              if(element.cricketPoints.point15 < 45 && element.cricketPoints.point15 > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '16':{
              if(element.cricketPoints.point16 < 48 && element.cricketPoints.point16 > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '17':{
              if(element.cricketPoints.point17 < 51 && element.cricketPoints.point17 > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '18':{
              if(element.cricketPoints.point18 < 54 && element.cricketPoints.point18 > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '19':{
              if(element.cricketPoints.point19 < 57 && element.cricketPoints.point19 > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '20':{
              if(element.cricketPoints.point20 < 60 && element.cricketPoints.point20 > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '50':{
              if(element.cricketPoints.bull < 75 && element.cricketPoints.bull > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '25':{
              if(element.cricketPoints.bull < 75 && element.cricketPoints.bull > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;    
            }
          }
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder.addDefaultCase(undoablePlayerSlice.reducer);
  },
});

const undoablePlayerSlice = undoable(gameSlice.reducer, {
  filter: (currentState, previousState) =>
    !isEqual(currentState, previousState),
});

const reducer = {
  game: undoablePlayerSlice,
};

const store = configureStore({
  reducer,
});

export const {
  setPlayer,
  setHits,
  setHitsForOtherPlayer,
  setCurrentPlayer,
  setNumberOfHitsForCurrentPlayer,
  setWinner,
  setNumberOfShot,
  resetNumberOfShot
} = gameSlice.actions;

store.dispatch(ActionCreators.undo());
store.dispatch(ActionCreators.redo());

export default store;
