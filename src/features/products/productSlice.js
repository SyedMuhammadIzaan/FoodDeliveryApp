const { createSlice } = require("@reduxjs/toolkit")
const { fetchProducts, newProduct, updateProduct, fetchProductById, deleteProduct } = require("../../thunk/productThunks")

const initialState={
    products:[],
    selectedProduct:null,
    loading:false,
    error:false,
}

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        clearProducts:(state)=>{
            state.products=[]
        }
    },
    extraReducers:(builders)=>{
        builders
        console.log("Builders",builders)

        .addCase(fetchProducts.pending,(state)=>{
            console.log("Pensding State",state)
            state.loading=true;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.products=action.payload;
        })

        .addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error;
        })

        .addCase(fetchProductById.pending,(state)=>{
            state.loading=true;
        })

        .addCase(fetchProductById.fulfilled,(state,action)=>{
            state.loading=false;
            state.selectedProduct=action.payload;
        })

        .addCase(fetchProductById.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error;
        })

        .addCase(newProduct.fulfilled,(state,action)=>{
            state.products=action.payload;
        })

        .addCase(updateProduct.fulfilled,(state,action)=>{
            const itemIndex= state.products((item)=>{
                item.id === action.payload.id
            })
            if(itemIndex !== -1){
                state.products[itemIndex]=action.payload;
            }
        })

        .addCase(deleteProduct.fulfilled,(state,action)=>{
            const index=state.products.findIndex((item)=> item.id === action.payload.id)
            if(index !== -1){
                state.products.splice(index,1)
            }
        })
    }

})

// import { createSlice } from "@reduxjs/toolkit";
// import { foodItem as initialFoodItem } from "../../constant";
// const initialState = {
//     foodItems: initialFoodItem,
// };

// console.log("Inital State", initialState);
// export const productSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             state.foodItems.push(action.payload);
//         },
//         removeFromCart: (state, action) => {
//             state.foodItems = state.foodItems.filter((items) => {
//                 items.id !== action.payload;
//             });
//         },
//         updateCart: (state, action) => {
//             const id = state.foodItems.find((item) => {
//                 item.id === action.payload.id;
//             });
//             if (id) Object.assign(id, action.payload);
//         },
//         removeAll: (state) => {
//             state.foodItems = [];
//         },
//     },
// });

// export const { addToCart, removeFromCart, updateCart, removeAll } =
//     productSlice.actions;

// export default productSlice.reducer;
