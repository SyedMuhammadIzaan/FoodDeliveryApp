import axiosInstance from "./axiosInstance"

export const addItemToCart=(itemData,file)=>{
    axiosInstance.post('/add-to-cart/c/item',itemData,file);
}

export const updateItemOfCart=(id,itemData,file)=>{
    axiosInstance.put(`/add-to-cart/${id}`,itemData,file);
}

export const getCartItemById=(id)=>{
    axiosInstance.get(`/add-to-cart/${id}`)
}

export const deleteCartItemById=(id)=>{
    axiosInstance.delete(`/add-to-cart/${id}`);
}

export const deleteAllCartItem=()=>{
    axiosInstance.delete();
}