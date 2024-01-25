import { Test, TestingModule } from '@nestjs/testing';
import { SeoRankroverService } from './seo__rankrover.service';

describe('SeoRankroverService', () => {
  let service: SeoRankroverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeoRankroverService],
    }).compile();

    service = module.get<SeoRankroverService>(SeoRankroverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
