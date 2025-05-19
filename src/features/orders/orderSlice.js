import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders:[{}]
};

console.log("Inital State", initialState);
export const orderSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: () => {},
        removeFromCart: () => {},
        updateCart: () => {},
        removeAll: () => {},
    },
});

export const { addToCart, removeFromCart, updateCart, removeAll } =
    orderSlice.actions;

export default orderSlice.reducer;
