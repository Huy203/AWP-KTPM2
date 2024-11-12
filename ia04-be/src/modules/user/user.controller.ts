import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() request: Request) {
    const user = request['user'];
    return this.userService.findOne(user.id);
  }
}
