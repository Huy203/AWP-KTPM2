import api from './api';

type SignInParams = {
    email: string;
    password: string;
};

export const login = async ({ email, password }: SignInParams) => {
    const response = await api.post('/user/login', { email, password });
    return { data: response.data, status: response.status };
};

export const register = async ({ email, password }: SignInParams) => {
    const response = await api.post('/user/register', { email, password });
    return { data: response.data, status: response.status };
};
