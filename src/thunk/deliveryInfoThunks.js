import { createAsyncThunk } from "@reduxjs/toolkit";
import { newDelivery, updateDeliveryDataById } from "../api/deliveryinfo.api";

export const createDelivery=createAsyncThunk(
    "delivery/c/",
    async(deliveryData,{rejectWithValue})=>{
        try {
            return await newDelivery(deliveryData);
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)

export const updateDelivery=createAsyncThunk(
    "delivery/u/",
    async (id,deliveryData,{rejectWithValue})=>{
        try {
            return await updateDeliveryDataById(id,deliveryData)
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)

