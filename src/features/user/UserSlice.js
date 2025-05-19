import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userloggedIn:false,
    userInfo:null,
    token:null,
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.userloggedIn=true;
            state.userInfo=action.payload.userInfo;
            state.token=action.payload.token;
        },
        logout:(state)=>{
            state.userloggedIn=false;
            state.userInfo=null;
            state.token=null;
        }
    }
})

export const {login,logout}=userSlice.actions;
export default userSlice.reducer;