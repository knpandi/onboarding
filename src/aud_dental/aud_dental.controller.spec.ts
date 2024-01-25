import { Test, TestingModule } from '@nestjs/testing';
import { AudDentalController } from './aud_dental.controller';
import { AudDentalService } from './aud_dental.service';

describe('AudDentalController', () => {
  let controller: AudDentalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudDentalController],
      providers: [AudDentalService],
    }).compile();

    controller = module.get<AudDentalController>(AudDentalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
