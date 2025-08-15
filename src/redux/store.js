import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users/slice";
import { authReducer } from "./signup/formSlice";
import { positionReducer } from "./signup/positionsSlice";

export const store = configureStore({
    reducer:{
        user: userReducer,
        auth: authReducer,
        position: positionReducer,
    },
    devTools: import.meta.env.MODE === 'development' ? true : false,
}); 