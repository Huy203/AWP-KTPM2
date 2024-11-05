import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { login, register } from '../services/auth';
import useToast from './useToast';

export const useLogin = () => {
    const toast = useToast();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: login,
        onSuccess: () => {
            toast.show({ type: 'success', message: 'Welcome back' });
            navigate({ to: '/' });
        },
        onError: error => {
            toast.show({ type: 'error', message: error.message });
        }
    });
};

export const useRegister = () => {
    const toast = useToast();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: register,
        onSuccess: () => {
            toast.show({ type: 'success', message: 'Register success' });
            navigate({ to: '/login' });
        },
        onError: error => {
            toast.show({ type: 'error', message: error.message });
        }
    });
};

export const useLogout = () => {
    const client = useQueryClient();
    const toast = useToast();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: () => Promise.resolve(),
        onSuccess: () => {
            toast.show({ type: 'success', message: 'Sign out success' });
            client.clear();
            navigate({ to: '/login' });
        },
        onError: error => {
            toast.show({ type: 'error', message: error.message });
        }
    });
};
