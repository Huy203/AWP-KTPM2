import { getLocalStorage, LocalStorageKeys } from '@/services/storage';
import { jwtDecode } from 'jwt-decode';
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';
import { IAuth } from '../type';

type AuthContextProps = {
    isExpired: boolean;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
    undefined
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const token = getLocalStorage<IAuth>(LocalStorageKeys.token);
        if (token) {
            const decodedToken = jwtDecode(token.accessToken ?? '');
            const tokenExpired = decodedToken.exp
                ? decodedToken.exp * 1000 < Date.now()
                : true;
            setIsExpired(tokenExpired);
        } else {
            setIsExpired(true);
        }
    }, []);

    const currentValue = {
        isExpired
    };
    return (
        <AuthContext.Provider value={currentValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;
