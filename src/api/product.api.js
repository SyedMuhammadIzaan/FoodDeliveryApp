import axiosInstance from "./axiosInstance";

export const createProduct=(productData,file)=>{
    axiosInstance.post(productData,file)
}