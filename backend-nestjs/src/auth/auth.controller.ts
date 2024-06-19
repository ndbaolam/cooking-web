import { Controller, Get, HttpStatus, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import md5 from 'md5';
import { AuthDTO } from "./dto";

@Controller('api/auth')
export class AuthController{
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() dto: AuthDTO) {    
    return this.authService.signUp(dto);
  }

  @Get('sign-in')
  signIn(): string {
    return 'Im a sign in';
  }
}