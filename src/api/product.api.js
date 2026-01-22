import axiosInstance from "./axiosInstance";

export const createProduct=(productData,file)=>{
    axiosInstance.post('/product/c',productData,file)
}

export const getProductById=(id)=>{
    axiosInstance.get(`/product/${id}`);
}

export const getAllProduct=()=>{
    axiosInstance.get('/product/');
}

export const updateProduct=(id,productData,file)=>{
    axiosInstance.update(`/product/${id}`,productData,file);
}

export const deleteProdutById=(id)=>{
    axiosInstance.delete(`/product/${id}`);
}

export const deleteAllProduct=()=>{
    axiosInstance.delete('/product');
}