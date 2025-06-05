import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userloggedIn:false,
    signup:{
        username:null,
        email:null,
        password:null,
    },
    token:null,
    logIn:{
        email:null,
        password:null,
    }
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        signUp:(state,action)=>{
            state.signup={
                username:action.payload.username,
                email:action.payload.email,
                password:action.payload.password,
            }

        },
        login:(state,action)=>{
            state.userloggedIn=true;
            state.logIn={
                email:action.payload.email,
                password:action.payload.password,
            }
            // state.token=action.payload.token;
        },
        logout:(state)=>{
            state.userloggedIn=false;
            state.token=null;
            state.fullName=null;
            state.email=null;
            state.password=null;
        }
    }
})

export const {signUp,login,logout}=userSlice.actions;
export default userSlice.reducer;