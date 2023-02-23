import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer"
import usersReducer from "./reducers/usersReducer";
import actorsReducer from "./reducers/actorsReducer";
import directorsReducer from "./reducers/directorsReducer";
import filmsReducer from "./reducers/filmsReducer";

export default configureStore({
    reducer:{
        user : userReducer,
        users: usersReducer,
        actors: actorsReducer,
        directors: directorsReducer,
        films: filmsReducer
    }
})