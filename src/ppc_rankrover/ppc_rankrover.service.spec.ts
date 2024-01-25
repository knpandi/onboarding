import { Test, TestingModule } from '@nestjs/testing';
import { PpcRankroverService } from './ppc_rankrover.service';

describe('PpcRankroverService', () => {
  let service: PpcRankroverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpcRankroverService],
    }).compile();

    service = module.get<PpcRankroverService>(PpcRankroverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
