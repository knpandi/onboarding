import { Injectable } from '@nestjs/common';
import { CreateCancelDto } from './dto/create-cancel.dto';
import { UpdateCancelDto } from './dto/update-cancel.dto';

@Injectable()
export class CancelService {
  async create(createCancelDto: CreateCancelDto) {
    const stripe = require('stripe')('sk_test_51MPhppLt5X77RsMiWCL1YY0r8xqVQPiUshlyqrqiI2w6CpjG96bEorhPfQX1UVTOlfJLQ2J5pb5q8atkCukgtLFI00ssmOtkiO');
    const subscription = await stripe.subscriptions.retrieve(
      createCancelDto.subscriptionid
    );
    return subscription;
  }

  findAll() {
    return `This action returns all cancel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cancel`;
  }

  update(id: number, updateCancelDto: UpdateCancelDto) {
    return `This action updates a #${id} cancel`;
  }

  remove(id: number) {
    return `This action removes a #${id} cancel`;
  }
}
