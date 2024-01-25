import { Injectable } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';

@Injectable()
export class PriceService {
 async create(createPriceDto: CreatePriceDto) {
    const stripe = require('stripe')('sk_test_51MPhppLt5X77RsMiWCL1YY0r8xqVQPiUshlyqrqiI2w6CpjG96bEorhPfQX1UVTOlfJLQ2J5pb5q8atkCukgtLFI00ssmOtkiO');
    const plan = await stripe.prices.create({

      
  currency: createPriceDto.currency,
  unit_amount: createPriceDto.amount,
  recurring: {
    interval: createPriceDto.interval,
  },
  product_data: {
    name: createPriceDto.productname,
  },
    
    });
    return plan;
  }


  findAll() {
    return `This action returns all price`;
  }

  findOne(id: number) {
    return `This action returns a #${id} price`;
  }

  update(id: number, updatePriceDto: UpdatePriceDto) {
    return `This action updates a #${id} price`;
  }

  remove(id: number) {
    return `This action removes a #${id} price`;
  }
}
