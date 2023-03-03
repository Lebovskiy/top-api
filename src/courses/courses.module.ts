import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Course } from '../models';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [SequelizeModule.forFeature([Course])],
})
export class CoursesModule {}
