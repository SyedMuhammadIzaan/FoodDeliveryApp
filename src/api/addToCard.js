import axiosInstance from "./axiosInstance"

export const addItemToCart=async (itemData,file)=>{
    const response=await axiosInstance.post('/add-to-cart/c/item',itemData,file);
    return response.data;
}

export const updateItemOfCart=async (id,itemData,file)=>{
    const response=await axiosInstance.put(`/add-to-cart/${id}`,itemData,file);
    return response.data;
}

export const getCartItemById=async (id)=>{
    const response=await axiosInstance.get(`/add-to-cart/${id}`);
    return response
}

export const deleteCartItemById=async (id)=>{
    await axiosInstance.delete(`/add-to-cart/${id}`);
    return id;
}

export const deleteAllCartItem=async ()=>{
    await axiosInstance.delete();
    return id;
}