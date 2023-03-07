import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
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
  @Post('login')
  async login(@Body() dto: LoginRequestDto): Promise<any> {
    return this.authService.login(dto);
  }

  @Post('registration')
  async registration(@Body() dto: CreateUserReqDto): Promise<any> {
    return this.authService.registration(dto);
  }

  @Get('profile')
  @ApiBearerAuth()
  @UseGuards(AuthGuard(StrategiesEnum.JWT))
  getProfile() {
    return Promise.resolve('sfdsaf');
  }
}
