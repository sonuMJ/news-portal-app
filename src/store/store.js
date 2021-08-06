import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";
import newsReducer from "./newsSlice"

export const store = configureStore({
    reducer:{
        news:newsReducer,
        account:accountSlice
    }
})