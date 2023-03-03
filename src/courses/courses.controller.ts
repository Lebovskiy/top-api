import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateCourseReqDto,
  GetCoursesResDto,
  GetOneCourseReqDto,
  GetOneCourseResDto,
  DeleteOneReqDto,
} from './dto';

@ApiTags('Courses')
@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) {}
  @ApiOperation({ summary: 'Створення курсу' })
  @ApiResponse({ status: 200, type: CreateCourseReqDto })
  @Post()
  create(@Body() dto: CreateCourseReqDto): Promise<GetCoursesResDto> {
    /// DTO на респонс окремо !!!!
    return this.courseService.create(dto);
  }

  @ApiOperation({ summary: 'Отримати дані про конкретний курс' })
  @ApiResponse({ status: 200, type: GetOneCourseResDto })
  @Get(':id')
  get(@Param('id') id: GetOneCourseReqDto): Promise<GetOneCourseResDto> {
    return this.courseService.findOne(id);
  }

  @ApiOperation({ summary: 'Отримати дані про всі курси' })
  @ApiResponse({ status: 200, type: [GetCoursesResDto] })
  @Get()
  findAll(): Promise<GetCoursesResDto[]> {
    return this.courseService.findAll();
  }

  @ApiOperation({ summary: 'Видалити курс' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  delete(@Param('id') id: DeleteOneReqDto): any {
    return this.courseService.delete(id);
  }
}
