import {
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Course } from './course.model';
import { User } from './user.model';

@Table({ tableName: 'reviews' })
export class Review extends Model<Review> {
  @ApiProperty({ example: '1', description: 'Унікальний індифікатор' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Хуйово', description: 'Опис' })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @ApiProperty({ example: '4', description: 'Оцінка' })
  @Column({ type: DataType.FLOAT, allowNull: false })
  rating: number;

  @BelongsTo(() => Course)
  @ApiProperty({})
  course: Course;

  @ApiProperty({ example: '4.6', description: 'Рейтинг курсу' })
  @ForeignKey(() => Course)
  @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: null })
  courseId: number;

  @BelongsTo(() => User)
  @ApiProperty({})
  users: User;

  @ApiProperty({
    example: '2',
    description: 'Угнікальний індефікатор користувача',
  })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: null })
  userId: number;
}
