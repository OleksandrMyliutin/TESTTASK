import { createSlice } from "@reduxjs/toolkit";
import { fetchUserCards } from "../operations";

const initialState = {
    users: [],
    totalPages: 0,
    page: 1,
    isLoading: false,
    error: null,
    
};

export const slice = createSlice ({
    name:'user',
    initialState,
    extraReducers: builder =>{
        builder
        .addCase(fetchUserCards.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchUserCards.fulfilled, (state,action)=>{
            const data = action.payload;
            state.users = data?.users ?? [];
            state.totalPages = data?.total_pages ?? 0;
            state.page = data?.page ?? 1;
            state.isLoading = false;
        })
        .addCase(fetchUserCards.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
});

export const userReducer =  slice.reducer;