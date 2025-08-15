import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export const fetchUserCards = createAsyncThunk('getUsers', async({ page, count }, thunkAPI) => {
    try {
        const response = await axios.get('/users', { params: { page, count} });
        return response.data;
    } catch (error) {
        console.log(error.massage);
        
        return thunkAPI.rejectWithValue(error.massage);
    }
});

export const fetchPositions = createAsyncThunk('positions/fetch', async(_, thunkAPI) => {
    try {
        const {data} = await axios.get('/positions');
        return data.positions;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
    }
});
