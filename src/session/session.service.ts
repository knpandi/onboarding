import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { DeleteResult, Repository, MongoRepository } from 'typeorm';
import { Session } from './entities/session.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from '../shared/common';

@Injectable()
export class SessionService {
  constructor(@InjectRepository(Session) private sessionRepository: MongoRepository<Session>) { }
  async create(createSessionDto: CreateSessionDto): Promise<ApiResponse<Session>>  {
    let entity_session=new Session();
 const stripe = require('stripe')('sk_test_51MPhppLt5X77RsMiWCL1YY0r8xqVQPiUshlyqrqiI2w6CpjG96bEorhPfQX1UVTOlfJLQ2J5pb5q8atkCukgtLFI00ssmOtkiO');

 const session = await stripe.checkout.sessions.create({
   success_url: `http://localhost:3001/success/subscription_id=${createSessionDto.subscription_id}&customerId=${createSessionDto.customerId}`,
   cancel_url: 'http://localhost:3001/cancel', // Provide a cancel URL
   
   subscription_data: {
     items: [{
       plan: createSessionDto.price,
     }],
   },
   customer: createSessionDto.customerId,
   mode: 'subscription',
   payment_method_types: ['card', 'us_bank_account'],
 
  });
  let lengthval=await this.sessionRepository.find()
  entity_session.status=session.status;
  entity_session.masterId=lengthval.length+1;
  entity_session.successurl=session.success_url;
  entity_session.cancelurl=session.cancel_url;
  entity_session.customerId=session.customer;
  entity_session.subscription_id=createSessionDto.subscription_id;
  entity_session.url=session.url

  let Save_entity_rmployee=await this.sessionRepository.save(entity_session);
  let response={
    status: ApiResponseStatus.SUCCESS,
    data: Save_entity_rmployee
  }

    return response;
  }

  findAll() {
    return `This action returns all session`;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
