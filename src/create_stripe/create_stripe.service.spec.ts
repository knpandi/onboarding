import { Test, TestingModule } from '@nestjs/testing';
import { CreateStripeService } from './create_stripe.service';

describe('CreateStripeService', () => {
  let service: CreateStripeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateStripeService],
    }).compile();

    service = module.get<CreateStripeService>(CreateStripeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
