import { Controller, HttpCode, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';

import { AuthService } from './services';
import { SignupDTO, LoginDTO } from './dtos';
import { UserNotFoundError } from 'users';

@Controller('auth')
@UsePipes(new ValidationPipe())
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(201)
  @Post('signup')
  async onUserSignUp(@Body() signupDTO: SignupDTO) {
    return await this.authService.signUp(signupDTO);
  }

  @HttpCode(202)
  @Post('login')
  async onUserLogin(@Body() loginDTO: LoginDTO) {
    return await this.authService.logIn(loginDTO);
  }
}
