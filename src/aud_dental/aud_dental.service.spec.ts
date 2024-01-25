import { Test, TestingModule } from '@nestjs/testing';
import { AudDentalService } from './aud_dental.service';

describe('AudDentalService', () => {
  let service: AudDentalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudDentalService],
    }).compile();

    service = module.get<AudDentalService>(AudDentalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
