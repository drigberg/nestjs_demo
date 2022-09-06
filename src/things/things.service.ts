import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Thing } from './things.entity';

@Injectable()
export class ThingsService {
  constructor(
    @InjectRepository(Thing)
    private thingsRepository: Repository<Thing>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async create({ name }: { name: string }): Promise<Thing> {
    const thing = new Thing();

    thing.name = name;

    await this.thingsRepository.save(thing);
    return thing;
  }

  async getById(id: number): Promise<Thing> {
    const user = await this.thingsRepository.findOne({ where: { id } });
    if (user === null) {
      throw new Error('Cannot find thing by id');
    }

    return user;
  }

  async fetchMany(): Promise<Array<Thing>> {
    const things = await this.thingsRepository.find();
    return things;
  }

  async deleteAll(): Promise<void> {
    const things = await this.fetchMany();
    await this.thingsRepository.remove(things);
  }
}
