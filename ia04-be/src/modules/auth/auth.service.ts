import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '@app/modules/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.prisma.account.findUnique({
      where: { email },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { id: user.id, username: user.username, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return {
      accessToken: token,
    };
  }

  async register(email: string, password: string) {
    const existingUser = await this.prisma.account.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);
    const username = email.split('@')[0] + Math.floor(Math.random() * 1000);

    await this.prisma.account.create({
      data: { email, password: passwordHashed, username },
    });

    return { message: 'User registered successfully' };
  }
}
