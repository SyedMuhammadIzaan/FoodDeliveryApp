import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  pricing: {
    subtotal: 0,
    deliveryFee: 50, // Default delivery fee
    total: 0,
  },
};

export const cartSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      state.pricing.subtotal = calculateSubtotal(state.orders);
      state.pricing.total = state.pricing.subtotal + state.pricing.deliveryFee;
    },
    removeFromCart: (state, action) => {
      state.orders = state.orders.filter(item => item.id !== action.payload);
      state.pricing.subtotal = calculateSubtotal(state.orders);
      state.pricing.total = state.pricing.subtotal + state.pricing.deliveryFee;
    },
    updateOrder: (state, action) => {
      const index = state.orders.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.orders[index] = { ...state.orders[index], ...action.payload };
        state.pricing.subtotal = calculateSubtotal(state.orders);
        state.pricing.total = state.pricing.subtotal + state.pricing.deliveryFee;
      }
    },
    removeAll: (state) => {
      state.orders = [];
      state.pricing.subtotal = 0;
      state.pricing.total = 0;
    },
    updateDeliveryFee: (state, action) => {
      state.pricing.deliveryFee = action.payload;
      state.pricing.total = state.pricing.subtotal + state.pricing.deliveryFee;
    },
  },
});

// Helper function to calculate subtotal
const calculateSubtotal = (orders) => {
  return orders.reduce((sum, item) => sum + (item.amount * item.quantity || 0), 0);
};

export const { 
  addOrder, 
  removeFromCart, 
  updateOrder, 
  removeAll,
  updateDeliveryFee
} = cartSlice.actions;

export default cartSlice.reducer;