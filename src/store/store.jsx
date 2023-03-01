import { configureStore, combineReducers } from '@reduxjs/toolkit';
import undoable from 'redux-undo';
import playerSlice from './PlayerSlice';
import { isEqual } from 'lodash';

const reducer = combineReducers({
  player: undoable(playerSlice, {
    filter: (currentState, previousState) => !isEqual(currentState, previousState),
  }),
});

const store = configureStore({
  reducer,
});

export default store;