export const QUERY_KEYS = {
    auth: {
        login: 'login',
        register: 'register',
        logout: 'logout'
    },
    user: {
        profile: 'profile'
    }
};

export type TokenType = {
    accessToken?: string;
    // refreshToken: string;
};

export type IAuth = TokenType;

export type IUser = {
    email: string;
    username: string;
};
