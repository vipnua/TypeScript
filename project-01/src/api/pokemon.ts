import instance from "./instance"

export const getAll = () => {
    return instance.get('/pokemons');
};
export const get = (id:any )=> {
    return instance.get(`/pokemons/${id}`);
};