import axios from "axios";
import { envs } from "../helpers";


const {
    VITE_BASE_URL_API_TODO
} = envs();

const todoApi = axios.create({
    baseURL: VITE_BASE_URL_API_TODO,
});

todoApi.interceptors.request.use( ( config ) => {
    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${ localStorage.getItem('token') }`,
    }
    return config;
});

export default todoApi;

