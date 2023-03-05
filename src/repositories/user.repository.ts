import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models';
import { CreateUserReqDto } from '../modules/users/dto';

export class UserRepository {
  constructor(
    @InjectModel(User)
    private readonly user: typeof User,
  ) {}

  async create(dto: CreateUserReqDto): Promise<User> {
    return this.user.create({ ...dto });
  }

  async findAll(): Promise<User[]> {
    return this.user.findAll();
  }

  async findOne(id): Promise<User> {
    return this.user.findOne({ where: { id } });
  }
}
