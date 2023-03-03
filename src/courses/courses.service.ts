import { Injectable } from '@nestjs/common';
import { CoursesModel } from '../models/courses.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(CoursesModel)
    private readonly coursesModel: typeof CoursesModel,
  ) {}

  async create(dto): Promise<any> {
    return this.coursesModel.create({ ...dto });
  }

  async findAll(): Promise<any> {
    return this.coursesModel.findAll();
  }

  async findOne(id): Promise<any> {
    return this.coursesModel.findOne({ where: { id } });
  }

  async delete(id): Promise<any> {
    await this.coursesModel.destroy({ where: { id } });
  }
}
