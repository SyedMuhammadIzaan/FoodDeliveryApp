import axiosInstance from "./axiosInstance";

export const createPopularItem=(popularData,file)=>{
    axiosInstance.post(popularData,file);
}

export const getAllPopularItem=()=>{
    axiosInstance.get();
}

export const updatePopularItem=()=>{
    axiosInstance.put(id,popularData,file);
}

export const deletePopularItem=(id)=>{
    axiosInstance.delete(id)
}

export const deleteAllPopularItem=()=>{
    axiosInstance.delete()
}

