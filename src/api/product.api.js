import axiosInstance from "./axiosInstance";

export const createProduct=async(productData,file)=>{
    const response=await axiosInstance.post('/product/c',productData,file)
    return response.data;
}

export const getProductById=async (id)=>{
    const response=await axiosInstance.get(`/product/${id}`);
    return response.data;
}

export const getAllProduct=async ()=>{
    const response=await axiosInstance.get('/product/');
    return response.data;
}

export const updateProductById=async (id,productData,file)=>{
    const response=await axiosInstance.update(`/product/${id}`,productData,file);
    return response.data;
}

export const deleteProdutById=async (id)=>{
    const response=axiosInstance.delete(`/product/${id}`);
    return response.data;
}

export const deleteAllProduct=async ()=>{
    const response=await axiosInstance.delete('/product');
    return response.data;
}