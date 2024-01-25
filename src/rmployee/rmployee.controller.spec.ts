import { Test, TestingModule } from '@nestjs/testing';
import { RmployeeController } from './rmployee.controller';
import { RmployeeService } from './rmployee.service';

describe('RmployeeController', () => {
  let controller: RmployeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RmployeeController],
      providers: [RmployeeService],
    }).compile();

    controller = module.get<RmployeeController>(RmployeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
