import { Test, TestingModule } from '@nestjs/testing';
import { SeoRankroverController } from './seo__rankrover.controller';
import { SeoRankroverService } from './seo__rankrover.service';

describe('SeoRankroverController', () => {
  let controller: SeoRankroverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeoRankroverController],
      providers: [SeoRankroverService],
    }).compile();

    controller = module.get<SeoRankroverController>(SeoRankroverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
