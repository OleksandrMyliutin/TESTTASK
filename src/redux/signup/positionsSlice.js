import { createSlice } from "@reduxjs/toolkit";
import { fetchPositions } from "../operations";

const initialState= {
    list: [], 
    isLoading: false, 
    error: null
}

export const position = createSlice({
    name:'position',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchPositions.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchPositions.fulfilled, (state, action)=>{
            state.list = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchPositions.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
});

export const positionReducer = position.reducer;