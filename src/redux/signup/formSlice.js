import { createSlice } from "@reduxjs/toolkit";
import { submitSignup } from "../operations";

const empty = { 
    username:"", 
    email:"", 
    phone:"", 
    position_id:"", 
    photo:null };

const initialState = {
    initialValue: empty,
    isSubmitting: false,
    submitError: null,
    submitSuccess: false,
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setInitialValue: (state, action) => {
            state.initialValue = action.payload;
        },
        resetInitialValue: (state) => { 
            state.initialValue = empty; 
        },
    },
    extraReducers: builder =>{
        builder
        .addCase(submitSignup.pending, state =>{
            state.isSubmitting = true;
            state.submitError = null;
            state.submitSuccess = false;
        })
        .addCase(submitSignup.fulfilled, state =>{
            state.isSubmitting = false;
            state.submitSuccess= true;
        })
        .addCase(submitSignup.rejected, (state, action) =>{
            state.isSubmitting = false;
            state.submitError = action.payload || "Failed";
        });
    }
});
export const { setInitialValue, resetInitialValue } = authSlice.actions;
export const authReducer =  authSlice.reducer;