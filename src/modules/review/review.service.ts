import { Injectable, NotFoundException } from '@nestjs/common';
import { Review } from '../../models';
import { CourseRepository, ReviewRepository } from '../../repositories';
import { CreateReviewRequestDto } from './dto';

@Injectable()
export class ReviewService {
  constructor(
    private readonly reviewRepository: ReviewRepository,
    private readonly courseRepository: CourseRepository,
  ) {}

  async create(dto: CreateReviewRequestDto): Promise<Review> {
    const course = await this.courseRepository.findOne(dto.productId);
    if (!course) {
      throw new NotFoundException('Курс не знайдений');
    }
    return this.reviewRepository.create(dto, course.id);
  }

  async findOne(id): Promise<Review> {
    return this.reviewRepository.findOne(id);
  }

  async findAll(): Promise<Review[]> {
    return this.reviewRepository.findAll();
  }
}
