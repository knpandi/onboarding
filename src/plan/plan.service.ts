import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Injectable()
export class PlanService {
 async create(createPlanDto: CreatePlanDto) {
    
const stripe = require('stripe')('sk_test_51MPhppLt5X77RsMiWCL1YY0r8xqVQPiUshlyqrqiI2w6CpjG96bEorhPfQX1UVTOlfJLQ2J5pb5q8atkCukgtLFI00ssmOtkiO');
const plan = await stripe.plans.create({
  amount: createPlanDto.amount,
  currency: createPlanDto.currency,
  interval: createPlanDto.interval,
  product: createPlanDto.product,
});
    return plan;
  }

  findAll() {
    return `This action returns all plan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plan`;
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }
}
