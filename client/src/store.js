import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer"
import usersReducer from "./reducers/usersReducer";
import actorsReducer from "./reducers/actorsReducer";

export default configureStore({
    reducer:{
        user : userReducer,
        users: usersReducer,
        actors: actorsReducer,
    }
})