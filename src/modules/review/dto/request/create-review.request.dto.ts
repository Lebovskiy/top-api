import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewRequestDto {
  @ApiProperty({ example: 'fghfghfgh', description: 'desc' })
  description: string;

  @ApiProperty({ example: '1', description: 'rate' })
  rating: number;

  @ApiProperty({ example: '1', description: 'productId' })
  productId: number;
}
