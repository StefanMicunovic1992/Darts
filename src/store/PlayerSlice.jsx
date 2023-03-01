import { configureStore, createSlice } from '@reduxjs/toolkit';
import undoable, {ActionCreators} from 'redux-undo';
import { isEqual } from 'lodash';

const playerSlice = createSlice({
  name: 'player',
  initialState: { player: [] },
  reducers: {
    setPlayer: (state, action) => {
      state.player.push({
        id: action.payload.id,
        name: action.payload.name,
        point: action.payload.point,
        hits: action.payload.hits,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase(undoablePlayerSlice.reducer);
  },
});

const undoablePlayerSlice = undoable(playerSlice.reducer, {
    filter: (currentState, previousState) => !isEqual(currentState, previousState),
});

const reducer = {
  player: undoablePlayerSlice,
};

const store = configureStore({
  reducer,
});

export const { setPlayer } = playerSlice.actions;

store.dispatch(ActionCreators.undo());
store.dispatch(ActionCreators.redo());

export default store;
