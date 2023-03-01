import { configureStore, createSlice } from "@reduxjs/toolkit";
import undoable from "redux-undo";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter:[]},
    reducers:{
        add(state, action) {
            state.counter.push({
                id:action.payload.id,
                name:action.payload.name,
                point:action.payload.point,
                hits:action.payload.hits,
            })
        }
    }
})

export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer,
})
export default store;