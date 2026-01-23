import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAllPopularItem, deletePopularItemById, getAllPopularItem, getPopularItemById, newPopularItem, updatePopularItemById } from "../api/popularItem";

export const createPopularItem=createAsyncThunk(
    "popularItem/create",
    async (popularItemData,{rejectWithValue})=>{
        try {
            await newPopularItem(popularItemData);
        } catch (error) {
            rejectWithValue(error.response?.data);
        }
    }
);

export const updatePopularItem=createAsyncThunk(
    "popularItem/update",
    async (id,popularData,file)=>{
        try {
            await updatePopularItemById(id,popularData,file);
        } catch (error) {
            rejectWithValue(error.response?.data);
        }
    }
);

export const fetchPopularItemById=createAsyncThunk(
    "popularItem/o/fetch",
    async (id,{rejectWithValue})=>{
        try {
            await getPopularItemById(id);
        } catch (error) {
            rejectWithValue(error.response?.data);
        }
    }
);

export const fetchAllPopularItem=createAsyncThunk(
    "popularItem/fetch",
    async (__dirname,{rejectWithValue})=>{
        try {
            await getAllPopularItem();
        } catch (error) {
            rejectWithValue(error.response?.data);
        }
    }
);


export const deletePopularById=createAsyncThunk(
    "popularItem/deleteOne",
    async (id,{rejectWithValue})=>{
        try {
            await deletePopularItemById(id);
        } catch (error) {
            rejectWithValue(error.response?.data);            
        }
    }
);

export const deletePopularItems=createAsyncThunk(
    "popularItem/deleteOne",
    async (_,{rejectWithValue})=>{
        try {
            await deleteAllPopularItem();
        } catch (error) {
            rejectWithValue(error.response?.data);            
        }
    }
)