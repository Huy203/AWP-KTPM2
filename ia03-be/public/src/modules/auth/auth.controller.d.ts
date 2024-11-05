import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from 'lib/dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(data: LoginDto): Promise<{
        message: string;
    }>;
    register(data: RegisterDto): Promise<{
        message: string;
    }>;
}
