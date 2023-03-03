import { ApiProperty } from '@nestjs/swagger';

export class CreateRolesDto {
  @ApiProperty({ example: 'ADMIN', description: 'Значення ролі' })
  readonly value: string;

  @ApiProperty({ example: 'Адміністратор', description: 'Опис ролі' })
  readonly description: string;
}
