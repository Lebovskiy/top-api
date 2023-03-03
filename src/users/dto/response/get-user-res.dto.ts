import { ApiProperty } from '@nestjs/swagger';

export class GetUserResDto {
  @ApiProperty({ example: '1', description: 'Унікальний індифікатор' })
  id: number;
  @ApiProperty({ example: 'Saha', description: "І'мя користувача" })
  name: string;
  @ApiProperty({ example: 'saha@gmail.com', description: 'Пошта користувача' })
  email: string;
  @ApiProperty({ example: '12345', description: 'Пароль користувача' })
  password: string;
}
