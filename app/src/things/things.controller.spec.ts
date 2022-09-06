import { Test, TestingModule } from '@nestjs/testing';
import { ThingsController } from './things.controller';
import { ThingsService } from './things.service';

describe('ThingsController', () => {
  let thingsController: ThingsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ThingsController],
      providers: [ThingsService],
    }).compile();

    thingsController = app.get<ThingsController>(ThingsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(thingsController.getHello()).toBe('Hello World!');
    });
  });
});
