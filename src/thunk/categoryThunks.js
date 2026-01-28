import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategory } from "../api/category.api";

export const fetchAllCategory=createAsyncThunk(
    "category/",
    async(_ ,{rejectWithValue})=>{
        try {
            return await getAllCategory();
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)