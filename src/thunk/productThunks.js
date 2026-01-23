import { createAsyncThunk } from "@reduxjs/toolkit";
import { createProduct, deleteAllProduct, deleteProdutById, getAllProduct, getProductById, updateProductById } from "../api/product.api";

export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async (_, { rejectWithValue }) => {
        try {
            return await getAllProduct();
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

export const fetchProductById = createAsyncThunk(
    "products/o/fetch",
    async (id, { rejectWithValue }) => {
        try {
            await getProductById(id);
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

export const newProduct = createAsyncThunk(
    "products/create",
    async (productData, file, { rejectWithValue }) => {
        try {
            await createProduct(productData, file);
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)

export const updateProduct = createAsyncThunk(
    "product/update",
    async (id, productData, file, { rejectWithValue }) => {
        try {
            await updateProductById(id, productData, file);
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)

export const deleteProduct = createAsyncThunk(
    "products/deleteOne",
    async (id, { rejectWithValue }) => {
        try {
            await deleteProdutById(id);
        } catch (error) {
            rejectWithValue(error.response?.data);
        }
    }
)

export const deleteProducts=createAsyncThunk(
    "products/deleteProducts",
    async (_,{rejectWithValue})=>{
        try {
            await deleteAllProduct();
        } catch (error) {
            rejectWithValue(error.response?.data);
        }
    }
)
