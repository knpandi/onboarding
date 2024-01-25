import { Injectable } from '@nestjs/common';
import { CreateCreateStripeDto } from './dto/create-create_stripe.dto';
import { UpdateCreateStripeDto } from './dto/update-create_stripe.dto';
import { CreateStripe } from './entities/create_stripe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from '../shared/common';

export class CreateStripeService {
  constructor(@InjectRepository(CreateStripe) private createStripeRepository: MongoRepository<CreateStripe>) { }

 async create(createCreateStripeDto: CreateCreateStripeDto): Promise<ApiResponse<CreateStripe>> {
  let entity_createStripe=new CreateStripe();
const stripe = require('stripe')('sk_test_51MPhppLt5X77RsMiWCL1YY0r8xqVQPiUshlyqrqiI2w6CpjG96bEorhPfQX1UVTOlfJLQ2J5pb5q8atkCukgtLFI00ssmOtkiO');
let customer = await stripe.customers.create({
          name: createCreateStripeDto.name,
          email: createCreateStripeDto.email,
});
       entity_createStripe.name=customer.name;
       entity_createStripe.email=customer.email;
       entity_createStripe.customerId=customer.id
       entity_createStripe.object=customer.object
       let Save_entity_createStripe=await this.createStripeRepository.save(entity_createStripe);
       let response={
         status: ApiResponseStatus.SUCCESS,
         data: Save_entity_createStripe
       }
       return response;
  }

  async findAll() {
    
const stripe = require('stripe')('sk_test_51MPhppLt5X77RsMiWCL1YY0r8xqVQPiUshlyqrqiI2w6CpjG96bEorhPfQX1UVTOlfJLQ2J5pb5q8atkCukgtLFI00ssmOtkiO');
const customers = await stripe.customers.list({
  limit: 100,
});
    return customers;
  }

  findOne(id: number) {
    return `This action returns a #${id} createStripe`;
  }

  update(id: number, updateCreateStripeDto: UpdateCreateStripeDto) {
    return `This action updates a #${id} createStripe`;
  }

  remove(id: number) {
    return `This action removes a #${id} createStripe`;
  }
}
