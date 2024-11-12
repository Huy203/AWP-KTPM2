import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { QUERY_KEYS } from '../lib/type';
import { getProfile } from '../services/axios/profile';
import { useLogout } from './useAuth';

export const useGetProfile = () => {
    const logout = useLogout();
    const userProfile = useQuery({
        queryKey: [QUERY_KEYS.user.profile],
        queryFn: getProfile,
        gcTime: 0
    });
    useEffect(() => {
        if (
            userProfile.error &&
            userProfile.error?.message === 'Unauthorized'
        ) {
            logout.mutate();
        }
    }, [userProfile.error, logout]);
    return userProfile;
};
