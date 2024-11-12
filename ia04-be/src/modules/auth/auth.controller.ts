import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';

@Controller('user')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiProperty({ type: LoginDto })
  login(@Body() data: LoginDto) {
    const { email, password } = data;
    return this.authService.login(email, password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  @ApiOperation({ summary: 'Register' })
  register(@Body() data: RegisterDto) {
    const { email, password } = data;
    return this.authService.register(email, password);
  }
}
