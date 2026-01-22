import axiosInstance from "./axiosInstance";

export const createPopularItem=(popularData,file)=>{
    axiosInstance.post('/popular-item/c/',popularData,file);
}

export const getAllPopularItem=()=>{
    axiosInstance.get('/popular-item');
}

export const updatePopularItem=()=>{
    axiosInstance.put(`/popular-item/${id}`,popularData,file);
}

export const deletePopularItem=(id)=>{
    axiosInstance.delete(`/popular-item/${id}`)
}

export const deleteAllPopularItem=()=>{
    axiosInstance.delete('/popular-item')
}

