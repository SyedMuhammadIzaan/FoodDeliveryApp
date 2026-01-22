import axiosInstance from "./axiosInstance"

export const createDelivery = (bookData) => {
    axiosInstance.post('/delivery-info/c',bookData);
}

export const getDeliveryById = (id) => {
    axiosInstance.get(`/delivery-info/${id}`)
}

export const getAllDelivery = () => {
    axiosInstance.get('/delivery-info');
}

export const updateDeliveryData = (id, bookData) => {
    axiosInstance.update(`/delivery-info/${id}`, bookData);
}

export const deleteDeliveryDataById=(id)=>{
    axiosInstance.delete(`/delivery-info/${id}`);
}

export const deleteAllDelivery=()=>{
    axiosInstance.delete('/delivery-info');
}