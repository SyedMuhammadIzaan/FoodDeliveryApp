import axiosInstance from "./axiosInstance";

export const newPopularItem=async (popularData,file)=>{
    const response=await axiosInstance.post('/popular-item/c/',popularData,file);
    return response.data;
}

export const getPopularItemById=async(id)=>{
    const response=await axiosInstance.get(`popular-item/${id}`);
    return response.data;
}

export const getAllPopularItem=async ()=>{
    const response=await axiosInstance.get('/popular-item');
    return response.data;
}

export const updatePopularItemById=async (id,popularData,file)=>{
    const response=await axiosInstance.put(`/popular-item/${id}`,popularData,file);
    return response.data;
}

export const deletePopularItemById=async (id)=>{
    const response=await axiosInstance.delete(`/popular-item/${id}`);
    return response.data;
}

export const deleteAllPopularItem=async ()=>{
    const response=await axiosInstance.delete('/popular-item');
    return response.data;
}

