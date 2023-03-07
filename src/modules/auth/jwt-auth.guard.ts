import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StrategiesEnum } from '../../enums/strategies.enum';

@Injectable()
export class JwtAuthGuard extends AuthGuard(StrategiesEnum.JWT) {}
