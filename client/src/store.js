import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer"

export default configureStore({
    reducer:{
        user : userReducer,
    }
})