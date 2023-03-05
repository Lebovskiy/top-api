import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Review } from './review.model';

@Table({ tableName: 'users' })
export class User extends Model<User> {
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

  @HasMany(() => Review)
  reviews: Review[];
}
