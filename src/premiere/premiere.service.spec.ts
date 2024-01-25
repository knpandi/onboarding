import { Test, TestingModule } from '@nestjs/testing';
import { PremiereService } from './premiere.service';

describe('PremiereService', () => {
  let service: PremiereService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PremiereService],
    }).compile();

    service = module.get<PremiereService>(PremiereService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
