import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getFilms} from "../utils/server/Api";

export const fetchAllFilms = createAsyncThunk(
    '/actors/fetchAllFilms',
    ()=>{
        return getFilms()
    }
)

const initialState = {
    allFilms: [],
    isLoading: false
}

const filmsSlice = createSlice({
    name: 'film',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAllFilms.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchAllFilms.fulfilled, (state, action)=>{
            state.allActors = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchAllFilms.rejected, (state)=>{
            state.isLoading = false;
        })
    }

})

export default filmsSlice.reducer