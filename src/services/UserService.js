import axios from 'axios';

const BASE_URL='http://localhost:7500/users'

export function saveUser(user){
    return axios.post(BASE_URL,user)
}