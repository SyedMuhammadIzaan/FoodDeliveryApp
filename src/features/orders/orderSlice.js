import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	orders: [],
};

console.log("Initial State Orders",initialState.orders)
export const orderSlice = createSlice({
    name: "order",
	initialState,
	reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
		},
		removeFromCart: (state, action) => {
			state.orders = state.orders.filter((item) => item.id !== action.payload);
		},
		updateOrder: (state, action) => {
			const item = state.orders.find((item) => item.id === action.payload.id);
			if (item) Object.assign(item, action.payload);
		},
		removeAll: (state) => {
			state.orders = [];
		},
	},
});

export const { addOrder, removeFromCart, updateOrder, removeAll } =
	orderSlice.actions;

export default orderSlice.reducer;
