import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchColleges = createAsyncThunk("college/fetchColleges", async (page=1) => {

    const response = await axios.get(`http://localhost:8000/college/${page}`);
    console.log(response.data);
    return response.data;
});

export const CollegeSlice = createSlice({
    name:"college",
    initialState:{
        colleges :[] ,
        status : "Pending",
        totalPages : 0
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchColleges.pending, (state) => {
            state.status = "Loading";
            return state;
        });
        builder.addCase(fetchColleges.fulfilled, (state, action) => {
            state.status = "Success";
            state.colleges = action.payload.result;
            state.totalPages = action.payload.totalPages;
            return state;
        });
        builder.addCase(fetchColleges.rejected, (state) => {
            state.status = "Rejected";
            return state;
        });
    }
    
    
})

export default CollegeSlice.reducer