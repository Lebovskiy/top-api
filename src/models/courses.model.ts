import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'courses' })
export class CoursesModel extends Model {
  @ApiProperty({ example: '1', description: 'Унікальний індифікатор' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: string;

  @ApiProperty({ example: 'img.png', description: 'Фото курсу' })
  @Column({ type: DataType.STRING })
  image: string;

  @ApiProperty({ example: 'Фотошоп', description: 'Назва курсу' })
  @Column({ type: DataType.STRING, allowNull: true })
  title: string;

  @ApiProperty({ example: '123$', description: 'Оновлена ціна курсу' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  price: number;

  @ApiProperty({
    example: '145$',
    description: 'Стара (неактуальна) ціна курсу',
  })
  @Column({ type: DataType.INTEGER, allowNull: true })
  oldPrice: number;

  @ApiProperty({ example: '13$', description: 'Ціна в розстрочку' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  credit: number;

  @ApiProperty({ example: '4.6', description: 'Рейтинг курсу' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  rating: number;

  @ApiProperty({ example: 'Продукт про фотошоп', description: 'Опис курсу' })
  @Column({ type: DataType.STRING })
  description: string;

  @ApiProperty({
    example: 'Актуальна інформація в коротких відео',
    description: 'Переваги курсу',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  advantages: string;

  @ApiProperty({ example: 'Немає перевірки дз', description: 'Недоліки курсу' })
  @Column({ type: DataType.STRING, allowNull: true })
  disAdvantages: string;
}
