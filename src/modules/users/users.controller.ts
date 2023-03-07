import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserReqDto, GetUserResDto } from './dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @ApiOperation({ summary: 'Створення користувача' })
  @ApiResponse({ status: 200, type: CreateUserReqDto })
  @Post()
  create(@Body() dto: CreateUserReqDto): Promise<GetUserResDto> {
    return this.usersServices.create(dto);
  }

  @ApiOperation({ summary: 'Отримання всіх користувачів' })
  @ApiResponse({ status: 200, type: [GetUserResDto] })
  @Get()
  findAll(): Promise<GetUserResDto[]> {
    return this.usersServices.findAll();
  }

  @ApiOperation({ summary: 'Отримання користувача' })
  @ApiResponse({ status: 200, type: GetUserResDto })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<GetUserResDto> {
    return this.usersServices.findOne(id);
  }

  @ApiOperation({ summary: 'Отримання користувача' })
  @ApiResponse({ status: 200, type: GetUserResDto })
  @Get(':email')
  findOneByEmail(@Body() dto): Promise<GetUserResDto> {
    return this.usersServices.findOneByEmail(dto);
  }
}
