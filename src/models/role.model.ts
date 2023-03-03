import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'roles' })
export class Role extends Model<Role> {
  @ApiProperty({ example: '1', description: 'Унікальний індефікатор' })
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: string;

  @ApiProperty({ example: 'ADMIN', description: 'Роль' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({ example: 'ADMIN', description: 'Роль' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;
}
