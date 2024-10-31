import { PrismaService } from '../prisma/prisma.service';
import { IUser } from './type';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(id: string): Promise<IUser>;
}
