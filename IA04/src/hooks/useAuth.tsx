import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { useToast } from '@/hooks/use-toast';
import { LocalStorageKeys, setLocalStorage } from '@/services/storage';
import { login, register } from '../services/axios/auth';

export const useLogin = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: login,
        onSuccess: data => {
            setLocalStorage(LocalStorageKeys.token, data);
            toast({ variant: 'success', title: 'Welcome back' });
            navigate({ to: '/' });
        },
        onError: error => {
            toast({ variant: 'error', title: error.message });
        }
    });
};

export const useRegister = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: register,
        onSuccess: () => {
            toast({ variant: 'success', title: 'Register success' });
            navigate({ to: '/login' });
        },
        onError: error => {
            toast({ variant: 'error', title: error.message });
        }
    });
};

export const useLogout = () => {
    const client = useQueryClient();
    const { toast } = useToast();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: () => Promise.resolve(),
        onSuccess: () => {
            client.clear();
            localStorage.clear();
            navigate({ to: '/login' });
        },
        onError: error => {
            toast({ variant: 'error', title: error.message });
        }
    });
};
