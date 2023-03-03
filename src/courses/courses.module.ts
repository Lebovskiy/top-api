import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoursesModel } from '../models/courses.model';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [SequelizeModule.forFeature([CoursesModel])],
})
export class CoursesModule {}
