import { ApiProperty } from '@nestjs/swagger';

export class GetUserReqDto {
  @ApiProperty({ example: '1', description: 'Унікальний індифікатор' })
  id: number;
}
