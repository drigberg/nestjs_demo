import { Category } from './categories/categories.entity';
import { Thing } from './things/things.entity';
import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: 5432,
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [Category, Thing],
      synchronize: true,
    }),
    TypeOrmModule.forRoot(),
    CategoriesModule,
  ],
})
export class AppModule {}
