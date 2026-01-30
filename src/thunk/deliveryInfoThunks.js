import { createAsyncThunk } from "@reduxjs/toolkit";
import { newDelivery } from "../api/deliveryinfo.api";

export const createDelivery=createAsyncThunk(
    "delivery/c/",
    async(deliveryData,{rejectWithValue})=>{
        try {
            return newDelivery(deliveryData);
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
)