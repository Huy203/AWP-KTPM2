import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'dpthuy@gmail.com' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @ApiProperty({ example: '12345678' })
  password: string;
}
