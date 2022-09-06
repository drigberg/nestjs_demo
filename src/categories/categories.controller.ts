import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './categories.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll(): Promise<Array<Category>> {
    const categories = await this.categoriesService.fetchMany();
    return categories;
  }

  @Post()
  async create(
    @Body() createCategoryBody: { name: string },
  ): Promise<Category> {
    const category = await this.categoriesService.create(createCategoryBody);
    return category;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    const category = await this.categoriesService.getById(id);
    if (category === null) {
      throw new Error('Cannot find category by id');
    }

    return category;
  }

  @Delete()
  async deleteAll(): Promise<void> {
    await this.categoriesService.deleteAll();
  }
}
