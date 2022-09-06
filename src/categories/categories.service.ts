import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async create({ name }: { name: string }): Promise<Category> {
    const category = new Category();

    category.name = name;

    await this.categoriesRepository.save(category);
    return category;
  }

  async getById(id: number): Promise<Category> {
    const user = await this.categoriesRepository.findOne({ where: { id } });
    if (user === null) {
      throw new Error('Cannot find category by id');
    }

    return user;
  }

  async fetchMany(): Promise<Array<Category>> {
    const things = await this.categoriesRepository.find();
    return things;
  }

  async deleteAll(): Promise<void> {
    const things = await this.fetchMany();
    await this.categoriesRepository.remove(things);
  }
}
