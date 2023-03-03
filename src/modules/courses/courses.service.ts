import { Injectable } from '@nestjs/common';
import { Course } from '../../models';
import { CourseRepository } from '../../repositories';

@Injectable()
export class CoursesService {
  constructor(private readonly courseRepository: CourseRepository) {}

  async create(dto): Promise<Course> {
    return this.courseRepository.create({ ...dto });
  }

  async findOne(id): Promise<Course> {
    return this.courseRepository.findOne(id);
  }

  async findAll(): Promise<Course[]> {
    return this.courseRepository.findAll();
  }
}
