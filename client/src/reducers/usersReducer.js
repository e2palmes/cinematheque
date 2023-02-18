import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUsers} from "../utils/server/Api";
export const fetchAllUsers = createAsyncThunk(
    'users/fetchAllUsers',
     ()=>{
         return getUsers();
    }
)

const initialState = {
    allUsers: [],
    isLoading: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
      extraReducers: (builder)=>{
        builder.addCase(fetchAllUsers.pending,(state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAllUsers.fulfilled,(state, action) => {
            state.isLoading = false;
            state.allUsers = action.payload;
        })
        builder.addCase(fetchAllUsers.rejected,(state, action) => {
            state.isLoading = false;
        })
    }
})

export default usersSlice.reducer