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
  //TODO: Types

  async create(dto): Promise<any> {
    return this.userRepository.create(dto);
  }
  //TODO: Types

  async findAll(): Promise<any> {
    return await this.userRepository.findAll();
  }
  //TODO: Types

  async findOne(id): Promise<any> {
    return this.userRepository.findOne(id);
  }
  //TODO: Types

  async findOneByEmail(email): Promise<any> {
    return this.userRepository.findOneByEmail(email);
  }
  //TODO: Types

  async findOneByName(name): Promise<any> {
    return this.userRepository.findOneByName(name);
  }
}
