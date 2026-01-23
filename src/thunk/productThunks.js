import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProduct, getProductById } from "../api/product.api";

export const fetchProducts=createAsyncThunk(
    "products/fetch",
    async(_,{rejectWithValue})=>{
        try {
            return await getAllProduct();
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

export const fetchProductById=createAsyncThunk(
    "products/o/fetch",
    async(id,{rejectWithValue})=>{
        try {
            await getProductById(id);
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);