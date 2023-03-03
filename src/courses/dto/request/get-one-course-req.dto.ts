import { ApiProperty } from '@nestjs/swagger';

export class GetOneCourseReqDto {
  @ApiProperty({ example: '1', description: 'Унікальний індифікатор' })
  id: string;
}
