import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export const fetchUserCards = createAsyncThunk('getUsers', async(_, thunkAPI) => {
    try {
        const response = await axios.get('/users', { params: { page: 1, count: 6 } });
        return response.data;
    } catch (error) {
        console.log(error.massage);
        
        return thunkAPI.rejectWithValue(error.massage);
    }
});
