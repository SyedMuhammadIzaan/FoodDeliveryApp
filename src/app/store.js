import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/CartSlice.js";
import userReducer from "../features/user/UserSlice.js";
import orderReducer from "../features/orders/orderSlice.js";
import productReducer from "../features/products/productSlice.js";

export const foodAppStore= configureStore ({
    reducer:{
        cart:cartReducer,
        user:userReducer,
        order:orderReducer,
        product:productReducer,
    },
})