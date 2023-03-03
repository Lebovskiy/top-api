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
import { Course } from '../../models';

@ApiTags('Courses')
@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) {}
  @ApiOperation({ summary: 'Створення курсу' })
  @ApiResponse({ status: 200, type: CreateCourseReqDto })
  @Post()
  create(@Body() dto: CreateCourseReqDto): Promise<GetCoursesResDto> {
    return this.courseService.create(dto);
  }

  @ApiOperation({ summary: 'Отримати дані про конкретний курс' })
  @ApiResponse({ status: 200, type: GetOneCourseResDto })
  @Get(':id')
  get(@Param('id') id: GetOneCourseReqDto): Promise<Course> {
    return this.courseService.findOne(id);
  }

  @ApiOperation({ summary: 'Отримати дані про всі курси' })
  @ApiResponse({ status: 200, type: [GetCoursesResDto] })
  @Get()
  findAll(): Promise<GetCoursesResDto[]> {
    return this.courseService.findAll();
  }

  // @ApiOperation({ summary: 'Видалити курс' })
  // @ApiResponse({ status: 200 })
  // @Delete(':id')
  // async delete(@Param('id') id: DeleteOneReqDto): Promise<void> {
  //   await this.courseService.delete(id);
  // }
}
