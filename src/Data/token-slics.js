import { createSlice } from "@reduxjs/toolkit";


const auth={
    idToken:localStorage.getItem('idToken') ||null,
    logIn:localStorage.getItem('idToken') ? true:false
    
}

const authslice = createSlice({
    name:"ram",
    initialState:auth,
    reducers:{
        setToken(state,action){
            state.idToken=action.payload
            state.logIn=true
            
        }
    }
})
export const authAction=authslice.actions

export default authslice