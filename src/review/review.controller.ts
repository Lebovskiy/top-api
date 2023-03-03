import { Body, Controller, Delete, Param, Post, Get } from '@nestjs/common';
import { ReviewModel } from '../models';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>): Promise<any> {
    return Promise;
  }

  @Delete(':id')
  async delete(@Param(':id') id: string): Promise<any> {
    return Promise;
  }

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string): Promise<any> {
    return Promise;
  }
}
