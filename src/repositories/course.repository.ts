import { Course } from '../models';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCourseReqDto } from '../modules/courses/dto';

export class CourseRepository {
  constructor(
    @InjectModel(Course)
    private readonly course: typeof Course,
  ) {}

  async create(dto: CreateCourseReqDto): Promise<Course> {
    return this.course.create({ ...dto });
  }

  async findAll(): Promise<Course[]> {
    return this.course.findAll();
  }

  async findOne(id): Promise<Course> {
    return this.course.findOne({ where: { id } });
  }

  async delete(id): Promise<void> {
    await this.course.destroy({ where: { id } });
  }
}
