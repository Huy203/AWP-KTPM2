import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(data: LoginDto): Promise<{
        accessToken: string;
    }>;
    register(data: RegisterDto): Promise<{
        message: string;
    }>;
}
