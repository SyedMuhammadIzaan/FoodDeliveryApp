import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	cart:[{}]
};

console.log("Inital State", initialState);
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cart.push(action.payload);
		},
		removeFromCart: (state, action) => {
			state.cart = state.cart.filter((items) => {
				items.id !== action.payload;
			});
		},
		updateCart: (state, action) => {
			const id = state.cart.find((item) => {
				item.id === action.payload.id;
			});
			if (id) Object.assign(id, action.payload);
		},
		removeAll: (state) => {
			state.cart = [];
		},
	},
});

export const { addToCart, removeFromCart, updateCart, removeAll } =
	cartSlice.actions;

export default cartSlice.reducer;
