import { configureStore, createSlice } from "@reduxjs/toolkit";
import undoable, { ActionCreators } from "redux-undo";
import { isEqual } from "lodash";

const gameSlice = createSlice({
  name: "game",
  initialState: { player: [],
                  currentPlayer:'',
                  numberOfHitsForCurrentPlayer:3 },
  reducers: {
    setPlayer: (state, action) => {
      state.player.push({
        id: action.payload.id,
        name: action.payload.name,
        point: action.payload.point,
        point15: action.payload.point15,
        point16: action.payload.point16,
        point17: action.payload.point17,
        point18: action.payload.point18,
        point19: action.payload.point19,
        point20: action.payload.point20,
        bull: action.payload.bull,
      });
    },
    setCurrentPlayer:(state, action) => {
      console.log(action.payload)
      state.currentPlayer = action.payload
    },
    setNumberOfHitsForCurrentPlayer:(state, action) => {
      state.numberOfHitsForCurrentPlayer = action.payload
    },
    setHits: (state, action) => {
      const hitValur = action.payload.idOfField.substring(1)
      state.player.map(element => {
        if(element.id === action.payload.idOfCurrentPlayer){
          // eslint-disable-next-line default-case
          switch(hitValur){
            case '15':{
              element.point15 = element.point15 - action.payload.resultForCurrentPlayer;
              break;
            }
            case '16':{
              element.point16 = element.point16 - action.payload.resultForCurrentPlayer;
              break;
            }
            case '17':{
              element.point17 = element.point17 - action.payload.resultForCurrentPlayer;
              break;
            }
            case '18':{
              element.point18 = element.point18 - action.payload.resultForCurrentPlayer;
              break;
            }
            case '19':{
              element.point19 = element.point19 - action.payload.resultForCurrentPlayer;
              break;
            }
            case '20':{
              element.point20 = element.point20 - action.payload.resultForCurrentPlayer;
              break;
            }
            case '25':{
              element.bull = element.bull - action.payload.resultForCurrentPlayer;
              break;
            }
            case '50':{
              element.bull = element.bull - action.payload.resultForCurrentPlayer;
              break;    
            }
          }
        }
      })
    },
    setHitsForOtherPlayer: (state, action) => {
      
      const hitValur = action.payload.idOfField.substring(1)
      state.player.map(element => {
        
        if(element.id !== action.payload.idOfCurrentPlayer){
          // eslint-disable-next-line default-case
          switch(hitValur){
            case '15':{
              if(element.point15 < 45 && element.point15 > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '16':{
              if(element.point16 < 48 && element.point16 > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '17':{
              if(element.point17 < 51 && element.point17 > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '18':{
              if(element.point18 < 54 && element.point18 > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '19':{
              if(element.point19 < 57 && element.point19 > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '20':{
              if(element.point20 < 60 && element.point20 > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '50':{
              if(element.bull < 75 && element.bull > 0){
                element.point += action.payload.resultForOtherPlayer
              }
              break;
            }
            case '25':{
              if(element.bull < 75 && element.bull > 0){
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

export const { setPlayer, setHits, setHitsForOtherPlayer, setCurrentPlayer, setNumberOfHitsForCurrentPlayer } = gameSlice.actions;

store.dispatch(ActionCreators.undo());
store.dispatch(ActionCreators.redo());

export default store;
