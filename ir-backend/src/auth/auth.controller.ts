import { Body, Controller, Inject, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  @Inject()
  private readonly authService: AuthService;

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signin(@Body() user: { email: string, password: string  }){
    return this.authService.signIn(user.email, user.password);
  }
}


