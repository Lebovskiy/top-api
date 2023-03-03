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
  @Column({ type: DataType.UUID, allowNull: true })
  courseId: number;
}
