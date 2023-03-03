import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseReqDto {
  @ApiProperty({ description: 'Назва курсу' })
  title: string;
  @ApiProperty({ description: 'Ціна курсу' })
  price: number;
}
