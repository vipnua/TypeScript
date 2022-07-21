import instance from "./config"
export const get = (config:String) =>{
    return instance.get(`/${config}`);
}
export const getAll = () => {
    return instance.get('/products');
}
export const getOne = (id:String) => {
    return instance.get(`/products/${id}`);
}
export const add = () => {
    return instance.post(`/products/`);
}
export const update = (id:String,data:any) => {
    return instance.put(`/products/${id}`,data);
}
export const remove = (id:String) => {
    return instance.delete(`/products/${id}`);
}