import { Test, TestingModule } from '@nestjs/testing';
import { AudClientController } from './aud_client.controller';
import { AudClientService } from './aud_client.service';

describe('AudClientController', () => {
  let controller: AudClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudClientController],
      providers: [AudClientService],
    }).compile();

    controller = module.get<AudClientController>(AudClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
