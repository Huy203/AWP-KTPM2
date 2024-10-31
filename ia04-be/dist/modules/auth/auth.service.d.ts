import { PrismaService } from '@app/modules/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
    register(email: string, password: string): Promise<{
        message: string;
    }>;
}
