import { Test, TestingModule } from '@nestjs/testing';
import { PremiereController } from './premiere.controller';
import { PremiereService } from './premiere.service';

describe('PremiereController', () => {
  let controller: PremiereController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PremiereController],
      providers: [PremiereService],
    }).compile();

    controller = module.get<PremiereController>(PremiereController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
