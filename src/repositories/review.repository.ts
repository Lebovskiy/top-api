import { Review } from '../models';
import { InjectModel } from '@nestjs/sequelize';
import { CreateReviewRequestDto } from '../modules/review/dto';

export class ReviewRepository {
  constructor(
    @InjectModel(Review)
    private readonly review: typeof Review,
  ) {}

  async create(dto: CreateReviewRequestDto): Promise<Review> {
    return this.review.create({ ...dto });
  }
  async findAll(): Promise<Review[]> {
    return this.review.findAll();
  }

  async findOne(id): Promise<Review> {
    return this.review.findOne({ where: { id } });
  }
}
