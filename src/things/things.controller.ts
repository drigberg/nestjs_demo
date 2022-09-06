import { Controller, Get } from '@nestjs/common';
import { ThingsService } from './things.service';

@Controller()
export class ThingsController {
  constructor(private readonly thingsService: ThingsService) {}

  @Get()
  getHello(): string {
    return this.thingsService.getHello();
  }
}
