import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'Users' })
export class UsersModel extends Model<CreateUserDto> {
  @ApiProperty({ example: '1', description: 'Унікальний індифікатор' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Саша', description: "Ім'я користувача" })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: 'saha@gmail.com', description: 'Почта користувача' })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @ApiProperty({ example: '12345', description: 'Пароль користувача' })
  @Column({ type: DataType.STRING, allowNull: false, unique: false })
  password: string;
}
