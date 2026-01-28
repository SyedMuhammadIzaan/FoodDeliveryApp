import { createSlice } from "@reduxjs/toolkit";
import { getAllDelivery } from "../../api/deliveryinfo.api";

const initialState = {
  orders: [],
  pricing: {
    subtotal: 0,
    deliveryFee: 15, // Default delivery fee
    total: 0,
  },
  loading: false,
  error: false,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    removeAll: (state) => {
      state.orders = []
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(getAllDelivery.pending, (state) => {
        state.loading = true;
      })

      .addCase(getAllDelivery.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.pricing.subtotal = action.payload.subtotal;
        state.pricing.total = action.payload.total;
      })

      .addCase(getAllDelivery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })

      .addCase(fetchDeliveryById.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchDeliveryById.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
        state.pricing.subtotal = action.payload.subtotal;
        state.pricing.total = action.payload.total;
      })

      .addCase(fetchDeliveryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })

      .addCase(createDelivery.fulfilled, (state, action) => {
        state.orders = action.payload.orders;
        state.pricing.subtotal = calculateSubtotal(state.orders);
        state.pricing.total = state.pricing.subtotal + state.pricing.deliveryFee;
      })

      .addCase(updateDeliveryDataById.fulfilled,(state,action)=>{
        const index=state.orders.findIndex((orders)=>{
          orders.id === action.payload.orders.id
        })
        if(index !== -1){
          state.orders[index]=action.payload.orders;
          state.
        }
      })
  }

})

const calculateSubtotal = (orders) => {
  return orders.reduce((sum, item) => sum + (item.amount * item.quantity || 0), 0);
};

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   orders: [],
//   pricing: {
//     subtotal: 0,
//     deliveryFee: 15, // Default delivery fee
//     total: 0,
//   },
// };

// const cartSlice = createSlice({
//   name: "orders",
//   initialState,
//   reducers: {
//     addOrder: (state, action) => {
//       console.log("Action",action.payload)
//       state.orders.push(action.payload);
//       state.pricing.subtotal = calculateSubtotal(state.orders);
//       state.pricing.total = state.pricing.subtotal + state.pricing.deliveryFee;
//       console.log("State",state)
//     },
//     removeFromCart: (state, action) => {
//       state.orders=state.orders.filter(item => item.id !== action.payload.orderId);
//       state.pricing.subtotal = calculateSubtotal(state.orders);
//       state.pricing.total = state.pricing.subtotal + state.pricing.deliveryFee;
//     },
//     updateOrder: (state, action) => {
//       const index = state.orders.findIndex(item => item.id === action.payload.id);
//       if (index !== -1) {
//         state.orders[index] = { ...state.orders[index], ...action.payload };
//         state.pricing.subtotal = calculateSubtotal(state.orders);
//         state.pricing.total = state.pricing.subtotal + state.pricing.deliveryFee;
//       }
//     },
//     removeAll: (state) => {
//       state.orders = [];
//       state.pricing.subtotal = 0;
//       state.pricing.total = 0;
//     },
//     updateDeliveryFee: (state, action) => {
//       state.pricing.deliveryFee = action.payload;
//       state.pricing.total = state.pricing.subtotal + state.pricing.deliveryFee;
//     },
//   },
// });

// // Helper function to calculate subtotal
// const calculateSubtotal = (orders) => {
//   return orders.reduce((sum, item) => sum + (item.amount * item.quantity || 0), 0);
// };

// export const {
//   addOrder,
//   removeFromCart,
//   updateOrder,
//   removeAll,
//   updateDeliveryFee
// } = cartSlice.actions;

// export default cartSlice.reducer;