import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModel } from '../models/users.model';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [SequelizeModule.forFeature([UsersModel])],
})
export class UsersModule {}
