import { ApiProperty } from '@nestjs/swagger';

export class GetOneCourseResDto {
  @ApiProperty({ example: '1', description: 'Унікальний індифікатор' })
  id: string;

  @ApiProperty({ example: 'img.png', description: 'Фото курсу' })
  image: string;

  @ApiProperty({ example: 'Фотошоп', description: 'Назва курсу' })
  title: string;

  @ApiProperty({ example: '123$', description: 'Оновлена ціна курсу' })
  price: number;

  @ApiProperty({
    example: '145$',
    description: 'Стара (неактуальна) ціна курсу',
  })
  oldPrice: number;

  @ApiProperty({ example: '13$', description: 'Ціна в розстрочку' })
  credit: number;

  @ApiProperty({ example: '4.6', description: 'Рейтинг курсу' })
  rating: number;

  @ApiProperty({ example: 'Продукт про фотошоп', description: 'Опис курсу' })
  description: string;

  @ApiProperty({
    example: 'Актуальна інформація в коротких відео',
    description: 'Переваги курсу',
  })
  advantages: string;

  @ApiProperty({ example: 'Немає перевірки дз', description: 'Недоліки курсу' })
  disAdvantages: string;
}
