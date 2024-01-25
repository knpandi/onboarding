import { Test, TestingModule } from '@nestjs/testing';
import { RmployeeService } from './rmployee.service';

describe('RmployeeService', () => {
  let service: RmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RmployeeService],
    }).compile();

    service = module.get<RmployeeService>(RmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
