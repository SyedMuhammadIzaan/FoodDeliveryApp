import { createSlice } from "@reduxjs/toolkit";
import { foodItem as initialFoodItem } from "../../constant";
const initialState = {
    foodItems: initialFoodItem,
};

console.log("Inital State", initialState);
export const productSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.foodItems.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.foodItems = state.foodItems.filter((items) => {
                items.id !== action.payload;
            });
        },
        updateCart: (state, action) => {
            const id = state.foodItems.find((item) => {
                item.id === action.payload.id;
            });
            if (id) Object.assign(id, action.payload);
        },
        removeAll: (state) => {
            state.foodItems = [];
        },
    },
});

export const { addToCart, removeFromCart, updateCart, removeAll } =
    productSlice.actions;

export default productSlice.reducer;
