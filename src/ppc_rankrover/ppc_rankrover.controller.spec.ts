import { Test, TestingModule } from '@nestjs/testing';
import { PpcRankroverController } from './ppc_rankrover.controller';
import { PpcRankroverService } from './ppc_rankrover.service';

describe('PpcRankroverController', () => {
  let controller: PpcRankroverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpcRankroverController],
      providers: [PpcRankroverService],
    }).compile();

    controller = module.get<PpcRankroverController>(PpcRankroverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
