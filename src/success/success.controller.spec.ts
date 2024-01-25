import { Test, TestingModule } from '@nestjs/testing';
import { SuccessController } from './success.controller';
import { SuccessService } from './success.service';

describe('SuccessController', () => {
  let controller: SuccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuccessController],
      providers: [SuccessService],
    }).compile();

    controller = module.get<SuccessController>(SuccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
