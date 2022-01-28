import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = newPerson => {
    return axios.post(baseUrl, newPerson).then(response => response.data)
}

const deletePerson = id => {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)
}

export default {getAll, create, deletePerson, update }