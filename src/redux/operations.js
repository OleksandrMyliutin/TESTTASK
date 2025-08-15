import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1";

/** ---------- GET /users (page, count) ---------- */
export const fetchUserCards = createAsyncThunk("getUsers",
    async ({ page = 1, count = 6 } = {}, { rejectWithValue }) => {
        try {
        const { data } = await axios.get("/users", { params: { page, count } });
        return data;
        } catch (error) {
        return rejectWithValue(error?.response?.data?.message ?? error.message);
        }
    }
);

/** ---------- GET /positions ---------- */
export const fetchPositions = createAsyncThunk("positions/fetch",
    async (_, { rejectWithValue }) => {
        try {
        const { data } = await axios.get("/positions");
        return data.positions;
        } catch (error) {
        return rejectWithValue(error?.response?.data?.message ?? error.message);
        }
    }
);

/** ---------- helper: get token (POST, fallback GET) ---------- */
const getToken = async () => {
    try {
        const { data } = await axios.post("/token");
        return data.token;
    } catch {
        const { data } = await axios.get("/token");
        return data.token;
    }
};

/** ---------- POST /users (multipart/form-data) ---------- */
export const submitSignup = createAsyncThunk("signup/submit",
    async (values, { rejectWithValue }) => {
        try {
        const token = await getToken();

        const fd = new FormData();
        fd.append("name", values.username);
        fd.append("email", values.email);
        fd.append("phone", values.phone);
        fd.append("position_id", String(values.position_id));
        fd.append("photo", values.photo);

        const { data } = await axios.post("/users", fd, {
            headers: { Token: token },
        });

        return data;
        } catch (error) {
        return rejectWithValue(error?.response?.data?.message ?? error.message);
        }
    }
);

export const submitFromStore = createAsyncThunk(
    "signup/submitFromStore",
    async (_, { getState, dispatch, rejectWithValue }) => {
        try {
        const values = getState().auth.initialValue;
        return await dispatch(submitSignup(values)).unwrap();
        } catch (e) {
        return rejectWithValue(e);
        }
    }
);