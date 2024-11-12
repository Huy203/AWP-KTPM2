import { TokenType } from '@/lib/type';
import axios from 'axios';
import { getLocalStorage, LocalStorageKeys } from './storage';

const BASE_URL = import.meta.env.VITE_API_ENDPOINT || 'http://localhost:3000';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    }
});

api.interceptors.request.use(async config => {
    const token = getLocalStorage<TokenType>(LocalStorageKeys.token);
    if (token) config.headers.Authorization = `Bearer ${token.accessToken}`;
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
