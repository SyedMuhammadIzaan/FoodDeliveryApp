import { createSlice } from "@reduxjs/toolkit"
import { createPopularItem, fetchAllPopularItem, fetchPopularItemById, updatePopularItem } from "../../thunk/popularItemThunks"
import { deletePopularItemById } from "../../api/popularItem"


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
            state.popularItems=[]
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

        .addCase(fetchPopularItemById.pending,(state)=>{
            state.loading=true;
        })

        .addCase(fetchPopularItemById.fulfilled,(state,action)=>{
            state.loading=false;
            state.popularItems=action.payload;
        })

        .addCase(fetchPopularItemById.rejected,(state)=>{
            state.loading=false;
            state.error=action.error;
        })

        .addCase(createPopularItem.fulfilled,(state,action)=>{
            state.popularItems=action.payload;
        })

        .addCase(updatePopularItem.fulfilled,(state,action)=>{
            const index=state.popularItems.findIndex((item)=> item.id === action.payload.id)
            if(index !== -1) state.popularItems[index]=action.payload;
        })

        .addCase(deletePopularItemById.fulfilled,(state,action)=>{
            const index=state.popularItems.findIndex((item)=> item.id === action.payload.id);
            if(index !== -1) state.popularItems.splice(index,1)

        })
    }

})

export const {createPopularItem}=popularItemSlice.actions;
export default popularItemSlice.reducer;