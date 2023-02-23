import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getDirectors} from "../utils/server/Api";

export const fetchAllDirectors = createAsyncThunk(
    '/actors/fetchAllDirectors',
    ()=>{
        return getDirectors()
    }
)

const initialState = {
    allDirectors: [],
    isLoading: false
}

const directorsSlice = createSlice({
    name: 'director',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAllDirectors.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchAllDirectors.fulfilled, (state, action)=>{
            state.allActors = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchAllDirectors.rejected, (state)=>{
            state.isLoading = false;
        })
    }

})

export default directorsSlice.reducer