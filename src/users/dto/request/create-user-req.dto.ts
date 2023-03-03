import { ApiProperty } from '@nestjs/swagger';

export class CreateUserReqDto {
  @ApiProperty({ example: "Ім'я користувача", description: 'Саша' })
  readonly name: string;

  @ApiProperty({ example: 'saha@gmail.com', description: 'Почта користувача' })
  readonly email: string;

  @ApiProperty({ example: '12345', description: 'Пароль користувача' })
  readonly password: string;
}
