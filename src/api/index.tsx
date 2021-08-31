import axios from "axios"
import { ITodoItem } from "../types/types";

const BASE_URL = 'https://localhost:44333/api/';
export const ENDPOINTS = {
    TODOLISTS :'ToDoLists'
}

export const createAPIEndpoint = (endpoint: string) => {

    let url = BASE_URL + endpoint + '/';
    return {
        fetchAll : () => axios.get(url),
        fetchById: (id: number) => axios.get(url + id),
        create: (newTodolist: ITodoItem) => axios.post(url,newTodolist),
        update: (id: number, updatedTodolist: ITodoItem) => axios.put(url + id, updatedTodolist),
        delete: (id: number) => axios.delete(url + id)
    }
}