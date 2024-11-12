import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IUser } from './type';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  findOne(id: string): Promise<IUser> {
    const res = this.prisma.account.findUnique({
      where: { id },
    });

    return res;
  }
}
