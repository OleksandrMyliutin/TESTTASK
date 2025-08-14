import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    initialValue: 
    {
        username: "",
        email: "",
        phone:"",
        position: '',
        photo: null
    }
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setInitialValue: (state, action) => {
            state.initialValue = action.payload;
        }
}});
export const { setInitialValue } = authSlice.actions;
export const authReducer =  authSlice.reducer;