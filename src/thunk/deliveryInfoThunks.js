import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDelivery, getDeliveryById, newDelivery, updateDeliveryDataById } from "../api/deliveryinfo.api";

export const createDelivery=createAsyncThunk(
    "deliveries/c/",
    async(deliveryData,{rejectWithValue})=>{
        try {
            return await newDelivery(deliveryData);
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)

export const updateDelivery=createAsyncThunk(
    "deliveries/u/",
    async (id,deliveryData,{rejectWithValue})=>{
        try {
            return await updateDeliveryDataById(id,deliveryData)
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)

export const fetchAllDelivery=createAsyncThunk(
    "deliveries/fetch/",
    async (_,{rejectWithValue})=>{
        try {
            return await getAllDelivery();
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)

export const fetchDeliveryById=createAsyncThunk(
    "deliveries/d/fetch",
    async (id,{rejectWithValue})=>{
        try {
            return await getDeliveryById(id);
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)