import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../models';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'node:process';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    SequelizeModule.forFeature([User]),
    UsersModule,
    JwtModule.register({
      privateKey: process.env.PRIVATE_KEY || 'SECRET_KEY',
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],
})
export class AuthModule {}
