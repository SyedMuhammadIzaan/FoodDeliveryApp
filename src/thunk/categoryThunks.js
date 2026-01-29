import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAllCategory, deleteCategoryById, getAllCategory, getCategoryById, newCategory, updateCatgeoryById } from "../api/category.api";

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

export const fetchCategoryById=createAsyncThunk(
    "category/fetch",
    async (id,{rejectWithValue})=>{
        try {
            return await getCategoryById(id);
        } catch (error) {
            return rejectWithValue(error.response?.data)
        }
    }
)

export const createCategory=createAsyncThunk(
    "category/c",
    async(categoryData,file,{rejectWithValue})=>{
        try {
            return await newCategory(categoryData,file);
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)

export const editCategoryById=createAsyncThunk(
    "category/c",
    async(categoryData,file,{rejectWithValue})=>{
        try {
            return await updateCatgeoryById(categoryData,file);
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)

export const removeCategoryById=createAsyncThunk(
    "category/rid",
    async (id,{rejectWithValue})=>{
        try {
            return await deleteCategoryById(id);
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)

export const removeAllCateory=createAsyncThunk(
    "category/r",
    async (_,{rejectWithValue})=>{
        try {
            return await deleteAllCategory();
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)

