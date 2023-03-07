import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestDto {
  //TODO: Rename description

  @ApiProperty({ example: 'vlad@gmail.com', description: 'Почта користувача' })
  email: string;

  @ApiProperty({ example: '12345', description: 'Пароль користувача' })
  password: string;
}
