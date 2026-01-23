import axiosInstance from "./axiosInstance"

export const createDelivery =async (bookData) => {
    const response=await axiosInstance.post('/delivery-info/c',bookData);
    return response.data;
}

export const getDeliveryById =async (id) => {
    const response=await axiosInstance.get(`/delivery-info/${id}`)
    return response;
}

export const getAllDelivery =async () => {
    const response=await axiosInstance.get('/delivery-info');
    return response.data;
}

export const updateDeliveryData =async (id, bookData) => {
    const response=await axiosInstance.update(`/delivery-info/${id}`, bookData);
    return response.data;
}

export const deleteDeliveryDataById=async (id)=>{
    const response=await axiosInstance.delete(`/delivery-info/${id}`);
    return response.data;
}

export const deleteAllDelivery=async ()=>{
    const response=await axiosInstance.delete('/delivery-info');
    return response.data;
}