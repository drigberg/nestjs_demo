import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/categories.entity';
import { Thing } from './things/things.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

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
    CategoriesModule,
  ],
})
export class AppModule {}
