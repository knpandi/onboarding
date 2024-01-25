import { Module } from '@nestjs/common';
import { CreateStripeService } from './create_stripe.service';
import { CreateStripeController } from './create_stripe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateStripe } from './entities/create_stripe.entity';


@Module({
  imports:[TypeOrmModule.forFeature([CreateStripe])],
  controllers: [CreateStripeController],
  providers: [CreateStripeService]
})
export class CreateStripeModule {}
