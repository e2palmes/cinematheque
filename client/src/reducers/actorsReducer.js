import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getActors} from "../utils/server/Api";

export const fetchAllActors = createAsyncThunk(
    '/actors/fetchAllActors',
    ()=>{
        return getActors()
    }
)

const initialState = {
    allActors: [],
    isLoading: false
}

const actorsSlice = createSlice({
    name: 'actors',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAllActors.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchAllActors.fulfilled, (state, action)=>{
            state.allActors = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchAllActors.rejected, (state)=>{
            state.isLoading = false;
        })
    }

})

export default actorsSlice.reducer