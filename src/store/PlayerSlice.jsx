import { configureStore, createSlice } from "@reduxjs/toolkit";
import undoable, { ActionCreators } from "redux-undo";
import { isEqual } from "lodash";

const gameSlice = createSlice({
  name: "game",
  initialState: { player: [] },
  reducers: {
    setPlayer: (state, action) => {
      console.log(state.player);
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
        bull: action.payload.Bull,
      });
    },
    setHits: (state, action) => {
      console.log('ulazi u slice')
      console.log(action.payload.resultOfHits)
      const hitValur = action.payload.id.substring(1)
      state.player.map(element => {
        if(element.name === 'bogdan'){
          // eslint-disable-next-line default-case
          switch(hitValur){
            case '15':{
              element.point15 = element.point15 - action.payload.resultOfHits;
              break;    
            }
            case '16':{
              element.point16 = element.point16 - action.payload.resultOfHits;
              break;    
            }
            case '17':{
              element.point17 = element.point17 - action.payload.resultOfHits;
              break;    
            }
            case '18':{
              element.point18 = element.point18 - action.payload.resultOfHits;
              break;    
            }
            case '19':{
              element.point19 = element.point19 - action.payload.resultOfHits;
              break;    
            }
            case '20':{
              element.point20 = element.point20 - action.payload.resultOfHits;
              break;    
            }
            case 'ull':{
              element.bull = element.bull - action.payload.resultOfHits;
              break;    
            }
            case 'uter':{
              element.bull = element.bull - action.payload.resultOfHits;
              break;    
            }
          }
        }
      })
    },
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

export const { setPlayer, setHits } = gameSlice.actions;

store.dispatch(ActionCreators.undo());
store.dispatch(ActionCreators.redo());

export default store;
