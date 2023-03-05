import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../models';
import { UserRepository } from '../../repositories/user.repository';

@Module({
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
  imports: [SequelizeModule.forFeature([User])],
  exports: [UsersService, UserRepository],
})
export class UsersModule {}
