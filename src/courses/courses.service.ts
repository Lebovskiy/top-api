import { Injectable } from '@nestjs/common';
import { Course } from '../models';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course)
    private readonly courses: typeof Course,
  ) {}

  async create(dto): Promise<any> {
    return this.courses.create({ ...dto });
  }

  async findAll(): Promise<any> {
    return this.courses.findAll();
  }

  async findOne(id): Promise<any> {
    return this.courses.findOne({ where: { id } });
  }

  async delete(id): Promise<any> {
    await this.courses.destroy({ where: { id } });
  }
}
