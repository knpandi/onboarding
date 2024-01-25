import { Test, TestingModule } from '@nestjs/testing';
import { CreateStripeController } from './create_stripe.controller';
import { CreateStripeService } from './create_stripe.service';

describe('CreateStripeController', () => {
  let controller: CreateStripeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateStripeController],
      providers: [CreateStripeService],
    }).compile();

    controller = module.get<CreateStripeController>(CreateStripeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
