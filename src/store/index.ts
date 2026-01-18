import {combineReducers} from "redux";
import mainSlice from "./reducers/mainSlice";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    main: mainSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch