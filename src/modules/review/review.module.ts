import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewRepository } from '../../repositories';
import { SequelizeModule } from '@nestjs/sequelize';
import { Course, Review } from '../../models';
import { ReviewService } from './review.service';
import { CoursesModule } from '../courses/courses.module';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, ReviewRepository],
  imports: [SequelizeModule.forFeature([Review, Course]), CoursesModule],
})
export class ReviewModule {}
