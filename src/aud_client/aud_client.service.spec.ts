import { Test, TestingModule } from '@nestjs/testing';
import { AudClientService } from './aud_client.service';

describe('AudClientService', () => {
  let service: AudClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudClientService],
    }).compile();

    service = module.get<AudClientService>(AudClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
