import { Injectable } from '@nestjs/common';
import { CreateSuccessDto } from './dto/create-success.dto';
import { UpdateSuccessDto } from './dto/update-success.dto';

@Injectable()
export class SuccessService {
  async create(createSuccessDto: CreateSuccessDto) {
    const stripe = require('stripe')('sk_test_51MPhppLt5X77RsMiWCL1YY0r8xqVQPiUshlyqrqiI2w6CpjG96bEorhPfQX1UVTOlfJLQ2J5pb5q8atkCukgtLFI00ssmOtkiO');
    const subscription = await stripe.subscriptions.retrieve(
      createSuccessDto.subscriptionid
    );
    return subscription;
  }

  findAll() {
    return `This action returns all success`;
  }

  findOne(id: number) {
    return `This action returns a #${id} success`;
  }

  update(id: number, updateSuccessDto: UpdateSuccessDto) {
    return `This action updates a #${id} success`;
  }

  remove(id: number) {
    return `This action removes a #${id} success`;
  }
}
