import { Injectable } from '@nestjs/common';
import { User } from '../../models';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly usersModel: typeof User,
  ) {}

  async create(dto): Promise<any> {
    return this.usersModel.create(dto);
  }

  async findAll(): Promise<any> {
    return await this.usersModel.findAll();
  }

  async findOne(id): Promise<any> {
    return this.usersModel.findOne({ where: id });
  }
}
