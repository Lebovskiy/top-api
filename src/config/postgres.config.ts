import * as process from 'node:process';
import { User, Course, Role, Auth, Review } from '../models';

export const postgresConfig = {
  dialect: 'postgres' as const,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: 'postgres',
  password: process.env.POSTGRES_PASSWORD + '',
  database: process.env.POSTGRES_DATABASE,
};

export const models = [User, Course, Role, Auth, Review];
