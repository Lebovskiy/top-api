import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
//TODO: check imports
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserReqDto } from '../users/dto';
import { AuthGuard } from '@nestjs/passport';
import { StrategiesEnum } from '../../enums/strategies.enum';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  //TODO: Types

  @Post('login')
  async login(@Body() dto: LoginRequestDto): Promise<any> {
    return this.authService.login(dto);
  }

  //TODO: Types
  //TODO: Change response (don't return token)
  @Post('registration')
  async registration(@Body() dto: CreateUserReqDto): Promise<any> {
    return this.authService.registration(dto);
  }
}
