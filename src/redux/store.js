import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users/slice";
import { authReducer } from "./signup/slice";

export const store = configureStore({
    reducer:{
        user: userReducer,
        auth: authReducer
    },
    devTools: import.meta.env.MODE === 'development' ? true : false,
}); 