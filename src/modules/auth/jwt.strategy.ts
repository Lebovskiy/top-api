import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import * as process from 'node:process';
import { StrategiesEnum } from '../../enums/strategies.enum';

interface JwtPayload {
  sub: string;
  iat: number;
  exp: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  StrategiesEnum.JWT,
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.PRIVATE_KEY,
      passReqToCallback: false,
    });
  }

  async validate(payload: JwtPayload): Promise<any> {
    console.log(payload);
    return payload;
  }
}
