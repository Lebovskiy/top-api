import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { User } from '../../models';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  //TODO: Types
  async login(dto): Promise<any> {
    const { email: emailOrName, password } = dto;
    const promises = Promise.all([
      this.userService.findOneByEmail(emailOrName),
      this.userService.findOneByName(emailOrName),
    ]);
    const [userByEmail, userByName] = await promises;
    const user = userByName || userByEmail;
    if (!userByName && !userByEmail) {
      throw new UnauthorizedException('Користувача не знайденно');
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      throw new HttpException('Неправильний пароль!', HttpStatus.BAD_REQUEST);
    }
    return this.generateToken(user);
  }

  //TODO: Types
  async registration(dto): Promise<any> {
    const { password, email } = dto;
    const candidate = await this.userService.findOneByEmail(email);
    if (candidate) {
      //TODO: change exception

      throw new HttpException(
        'Користувач з даним email вже існує',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);

    const user = await this.userService.create({
      ...dto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }

  generateToken(user: User): string {
    const payload = { email: user.email, name: user.name };
    return this.jwtService.sign(payload);
  }
}
