import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import CustomizerReducer from "./customizer/CustomizerSlice";
import EcommerceReducer from "./apps/eCommerce/ECommerceSlice";


export const store = configureStore({
    reducer: {
        customizer: CustomizerReducer,
        ecommerceReducer: EcommerceReducer,

    },
    devTools: process.env.NODE_ENV !== "production",
});

const rootReducer = combineReducers({
    customizer: CustomizerReducer,
    ecommerceReducer: EcommerceReducer,

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
