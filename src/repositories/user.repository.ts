import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models';
import { CreateUserReqDto } from '../modules/users/dto';

export type User2 = any;
export class UserRepository {
  constructor(
    @InjectModel(User)
    private readonly user: typeof User,
  ) {}
  //TODO: remove this shit
  private readonly users2 = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async create(dto: CreateUserReqDto): Promise<User> {
    return this.user.create({ ...dto });
  }

  async findAll(): Promise<User[]> {
    return this.user.findAll();
  }

  async findOne(id): Promise<User> {
    return this.user.findOne({ where: { id } });
  }

  async findOneByEmail(email): Promise<User> {
    return this.user.findOne({
      where: { email },
      include: { all: true },
    });
  }
  //TODO: Types

  async findOneByName(name: string): Promise<User2 | undefined> {
    return this.user.findOne({
      where: { name },
      include: { all: true },
    });
  }
}
