import { Injectable } from '@nestjs/common';
import { User } from '../../models';
import { InjectModel } from '@nestjs/sequelize';
import { UserRepository } from '../../repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly usersModel: typeof User,
    private readonly userRepository: UserRepository,
  ) {}

  async create(dto): Promise<any> {
    return this.userRepository.create(dto);
  }

  async findAll(): Promise<any> {
    return await this.userRepository.findAll();
  }

  async findOne(id): Promise<any> {
    return this.userRepository.findOne(id);
  }
  async findOneByEmail(email): Promise<any> {
    return this.userRepository.findOneByEmail(email);
  }
}
