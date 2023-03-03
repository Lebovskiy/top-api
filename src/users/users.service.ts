import { Injectable } from '@nestjs/common';
import { UsersModel } from '../models/users.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UsersModel)
    private readonly usersModel: typeof UsersModel,
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
