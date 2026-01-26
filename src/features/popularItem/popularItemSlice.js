import { createSlice } from "@reduxjs/toolkit"
import { fetchAllPopularItem } from "../../thunk/popularItemThunks"


const initialState={
    popularItems:[],
    selectedPopularItem:null,
    loading:false,
    error:false,
}

const popularItemSlice=createSlice({
    name:"popularItems",
    initialState,
    reducers:{
        clearPopularItems:(state)=>{
            state.popularItems=[],
        }
    },
    extraReducers:(builders)=>{
        builders
        .addCase(fetchAllPopularItem.pending,(state)=>{
            state.loading=true;
        })

        .addCase(fetchAllPopularItem.fulfilled,(state,action)=>{
            state.loading=false;
            state.popularItems=action.payload
        })

        .addCase(fetchAllPopularItem.rejected,(state)=>{
            state.loading=false;
            state.error=action.error
        })
    }

})