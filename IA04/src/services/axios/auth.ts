import api from '../api';
export type AccountIdentifier = {
    email: string;
    password: string;
};

export type SignInParams = {
    email: string;
    password: string;
};

export const login = async ({ email, password }: SignInParams) => {
    const response = await api.post('/user/login', { email, password });
    return response.data;
};

export const register = async ({ email, password }: SignInParams) => {
    const response = await api.post('/user/register', { email, password });
    return response.data;
};
