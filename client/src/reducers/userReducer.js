import {createSlice} from "@reduxjs/toolkit";

const userInitialSate={
    firstname:"",
    lastname:"",
    username:"",
    token:"",
}
export const userSlice = createSlice({
    name: 'user',
    initialState:userInitialSate,
    reducers:{

    }

});

export default userSlice.reducer;