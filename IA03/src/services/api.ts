import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_ENDPOINT || 'http://localhost:3000';
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY || '';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
    }
});

api.interceptors.request.use(config => {
    return config;
});

api.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject({
            status: error.response.status,
            message: error.response.data.message
        });
    }
);

export default api;
