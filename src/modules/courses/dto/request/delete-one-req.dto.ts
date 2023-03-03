import { ApiProperty } from '@nestjs/swagger';

export class DeleteOneReqDto {
  @ApiProperty({ example: '1', description: 'Унікальний індифікатор' })
  id: string;
}
