import instance from "./config"

const getAll = () => {
    return instance.get('/cellphone');
}
export {getAll}