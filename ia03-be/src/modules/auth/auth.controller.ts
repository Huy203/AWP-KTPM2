import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from 'lib/dto';

@Controller('user')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() data: LoginDto) {
    const { email, password } = data;
    return this.authService.login(email, password);
  }

  @Post('register')
  register(@Body() data: RegisterDto) {
    const { email, password, username } = data;
    return this.authService.register(email, password, username);
  }
}
