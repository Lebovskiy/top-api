import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { Review } from '../../models';
import { ReviewService } from './review.service';
import { CreateReviewRequestDto } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Review')
@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}
  @Post()
  async create(@Body() dto: CreateReviewRequestDto): Promise<Review> {
    return this.reviewService.create(dto);
  }

  @Get('byProduct/:productId')
  async getByProductId(@Param('productId') productId: number): Promise<Review> {
    return this.reviewService.findOne(productId);
  }

  @Get('')
  async getAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }
}
