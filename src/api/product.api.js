import axiosInstance from "./axiosInstance";

export const createProduct=(productData,file)=>{
    axiosInstance.post(productData,file)
}

export const getProductById=(id)=>{
    axiosInstance.get(id);
}

export const getAllProduct=()=>{
    axiosInstance.get();
}

export const updateProduct=(id,productData,file)=>{
    axiosInstance.update(id,productData,file);
}

export const deleteProdutById=(id)=>{
    axiosInstance.delete(id);
}

export const deleteAllProduct=()=>{
    axiosInstance.delete();
}