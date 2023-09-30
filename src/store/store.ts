import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import CustomizerReducer from "./customizer/CustomizerSlice";

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

const rootReducer = combineReducers({
 customizer: CustomizerReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
