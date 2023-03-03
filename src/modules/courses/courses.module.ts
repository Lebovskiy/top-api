import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Course } from '../../models';
import { CourseRepository } from '../../repositories';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, CourseRepository],
  imports: [SequelizeModule.forFeature([Course])],
})
export class CoursesModule {}
