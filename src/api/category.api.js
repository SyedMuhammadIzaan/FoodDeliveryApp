import axiosInstance from "./axiosInstance"

export const createCategory=(data,file)=>{
    axiosInstance.post('/category/c',data,file);
}

export const getAllCategory=()=>{
    axiosInstance.get('/category');
}
export const updateCatgeoryById=(id,data,file)=>{
    axiosInstance.update(`/category/${id}`,data,file)
}

export const getCategoryById=(id)=>{
    axiosInstance.get(`/category/${id}`)
}

export const deleteCategoryById=(id)=>{
    axiosInstance.delete(`/category/${id}`)
}

export const deleteAllCategory=()=>{
    axiosInstance.delete('/cateory')
}