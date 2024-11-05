export declare class AuthService {
    private readonly logger;
    login(email: string, password: string): Promise<{
        message: string;
    }>;
    register(email: string, password: string, username: string): Promise<{
        message: string;
    }>;
}
