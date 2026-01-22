import axiosInstance from "./axiosInstance"

export const createDelivery = (bookData) => {
    axiosInstance.post(bookData);
}

export const getDeliveryById = (id) => {
    axiosInstance.get(id)
}

export const getAllDelivery = () => {
    axiosInstance.get();
}

export const updateDeliveryData = (id, bookData) => {
    axiosInstance.update(id, bookData);
}

export const deleteDeliveryDataById=(id)=>{
    axiosInstance.delete(id);
}

export const deleteAllDelivery=()=>{
    axiosInstance.delete();
}