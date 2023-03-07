import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async login(dto): Promise<any> {
    const { email, password } = dto;
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      return new HttpException(
        'Користувача не знаєденно',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      throw new HttpException('Неправильний пароль!', HttpStatus.BAD_REQUEST);
    }
    return this.generateToken(user);
  }

  async registration(dto): Promise<any> {
    const { password, email } = dto;
    const candidate = await this.userService.findOneByEmail(email);
    if (candidate) {
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
