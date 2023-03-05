import { configureStore, createSlice } from "@reduxjs/toolkit";
import undoable, { ActionCreators } from "redux-undo";
import { isEqual } from "lodash";

const gameSlice = createSlice({
  name: "game",
  initialState: { player: [], currentPlayer: "", winner: "", numberOfShot: 1 },
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
            case "25":
            case "50":
              element.cricketPoints[`point${hitValue}`] -=
                action.payload.resultForCurrentPlayer;
          }
        }
      });
    },
    setHitsForOtherPlayer: (state, action) => {
      const hitValue = action.payload.idOfField.substring(1);
      state.player.map((element) => {
        if (element.id !== action.payload.idOfCurrentPlayer) {
          // eslint-disable-next-line default-case
          switch (hitValue) {
            case "15":
            case "16":
            case "17":
            case "18":
            case "19":
            case "20":
            case "25":
            case "50":
              element.cricketPoints[`point${hitValue}`] +=
                action.payload.resultForCurrentPlayer;
          }
        }
      });
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

export const {
  setPlayer,
  setHits,
  setHitsForOtherPlayer,
  setCurrentPlayer,
  setNumberOfHitsForCurrentPlayer,
  setWinner,
  setNumberOfShot,
} = gameSlice.actions;

store.dispatch(ActionCreators.undo());
store.dispatch(ActionCreators.redo());

export default store;
