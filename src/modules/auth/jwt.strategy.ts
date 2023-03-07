import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import * as process from 'node:process';
import { StrategiesEnum } from '../../enums/strategies.enum';
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

  async validate(payload: any) {
    console.log(payload);
    return Promise.resolve({ name: payload.sub, username: payload.username });
  }
}
