import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoursesModule } from './courses/courses.module';
import { ConfigModule } from '@nestjs/config';
import { CoursesModel } from './models/courses.model';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres' as const,
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: 'postgres',
      password: process.env.POSTGRES_PASSWORD + '',
      database: process.env.POSTGRES_DATABASE,
      models: [CoursesModel],
      autoLoadModels: true,
    }),
    CoursesModule,
    UsersModule,
    RolesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
