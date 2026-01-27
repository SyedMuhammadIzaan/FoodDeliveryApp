import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
    error: false,
}

const addToCartSlice = createSlice({
    name: "addToCart",
    initialState,
    reducers: {
        createItemIntoCart: (state, action) => {
            const product = action.payload;

            const exists = state.items.find(
                (item) => item.id === product.id
            );
            if (!exists) {
                state.items = product;
            }
        },
        clearCartItem: (state) => {
            state.items = []
        },
        deleteCartItem: (state, action) => {
            const productIndex = state.items.findIndex((item) => item.id === action.payload.id)
            if (productIndex !== -1) state.items.splice(productIndex, 1);
        }
    }

})

export const {createItemIntoCart,deleteCartItem,clearCartItem}=addToCartSlice.actions;
export default addToCartSlice.reducer;