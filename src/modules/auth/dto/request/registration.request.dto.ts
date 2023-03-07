import { ApiProperty } from '@nestjs/swagger';

export class RegistrationRequestDto {
  @ApiProperty({ example: 'Vlad', description: "Ім'я користувача" })
  name: string;

  @ApiProperty({ example: 'vlad@gmail.com', description: 'Почта користувача' })
  email: string;

  @ApiProperty({ example: '12345', description: 'Пароль користувача' })
  password: string;
}
