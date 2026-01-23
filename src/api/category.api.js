import axiosInstance from "./axiosInstance"

export const newCategory=async (data,file)=>{
    const response=await axiosInstance.post('/category/c',data,file);
    return response.data;
}

export const getAllCategory=async ()=>{
    const response=await axiosInstance.get('/category');
    return response.data;
}
export const updateCatgeoryById=async (id,data,file)=>{
    const response=await axiosInstance.update(`/category/${id}`,data,file)
    return response.data;
}

export const getCategoryById=async (id)=>{
    const response=await axiosInstance.get(`/category/${id}`);
    return response.data;
}

export const deleteCategoryById=async (id)=>{
    const response=await axiosInstance.delete(`/category/${id}`);
    return response.data;
}

export const deleteAllCategory=async ()=>{
    const response=await axiosInstance.delete('/category');
    return response.data;
}