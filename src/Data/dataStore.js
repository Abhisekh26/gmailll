import { configureStore } from "@reduxjs/toolkit";
import authslice from "./token-slics";
const store=configureStore({
    reducer:{
        auth:authslice.reducer,
    }
})
export default store;