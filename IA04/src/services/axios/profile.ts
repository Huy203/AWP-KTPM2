import { IUser } from '@/lib/type';
import api from '../api';

export const getProfile = async () => {
    const response = await api.get<IUser>('/user/profile');
    return response.data;
};
