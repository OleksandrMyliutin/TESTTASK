import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users/slice";

export const store = configureStore({
    reducer:{
        user: userReducer,
    },
    devTools: import.meta.env.MODE === 'development' ? true : false,
}); 