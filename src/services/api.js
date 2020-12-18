import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000' //se um dia for colocar no ar, só trocar este endereço
});

export default api;