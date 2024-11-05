import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Account } from '@database/entities';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  async login(email: string, password: string) {
    const user = await Account.findOne({ where: { email } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
    }

    return { message: 'User logged in successfully' };
  }

  async register(email: string, password: string, username: string) {
    const user = await Account.findOne({ where: { email } });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    await Account.save({ email, password: passwordHashed, username });
    return { message: 'User registered successfully' };
  }
}
