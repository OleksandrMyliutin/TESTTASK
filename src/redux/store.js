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
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["auth/setInitialValue"],
            ignoredPaths: ["auth.initialValue.photo"],
        },
    }),
    devTools: import.meta.env.MODE === 'development' ? true : false,
}); 