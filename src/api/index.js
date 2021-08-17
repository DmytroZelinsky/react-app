import axios from "axios"

const BASE_URL = 'https://localhost:44333/api/';
export const ENDPOINTS = {
    TODOLISTS :'ToDoLists'

}

export const createAPIEndpoint = (endpoint) => {

    let url = BASE_URL + endpoint + '/';
    return {
        fetchAll : () => axios.get(url),
        fetchById: (id) => axios.get(url + id),
        create: (newTodolist) => axios.post(url,newTodolist),
        update: (id, updatedTodolist) => axios.put(url + id, updatedTodolist),
        delete: id => axios.delete(url + id)
    }
}