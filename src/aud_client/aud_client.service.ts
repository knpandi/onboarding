import { Injectable } from '@nestjs/common';
import { CreateAudClientDto } from './dto/create-aud_client.dto';
import { UpdateAudClientDto } from './dto/update-aud_client.dto';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from '../shared/common';
import { AudClient } from './entities/aud_client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, MongoRepository } from 'typeorm';



export class AudClientService {
  constructor(@InjectRepository(AudClient) private audClientRepository: MongoRepository<AudClient>) { }
 async create(createAudClientDto: CreateAudClientDto): Promise<ApiResponse<AudClient>> {
    let entity_audclient=new AudClient();

    entity_audclient.Client_childMasterId=createAudClientDto.Client_childMasterId;
    entity_audclient.Client_FirstName=createAudClientDto.Client_FirstName;
    entity_audclient.Client_LastName=createAudClientDto.Client_LastName;
    entity_audclient.Client_Email=createAudClientDto.Client_Email;
    entity_audclient.Client_CompanyName=createAudClientDto.Client_CompanyName;
    entity_audclient.Client_ClientId=createAudClientDto.Client_ClientId;
    entity_audclient.Client_PaymentLink=createAudClientDto.Client_PaymentLink;

    let Save_entity_audclient=await this.audClientRepository.save(entity_audclient);
    let response={
      status: ApiResponseStatus.SUCCESS,
      data: Save_entity_audclient
    }
    return response;
  }

  findAll() {
    return `This action returns all audClient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} audClient`;
  }

  update(id: number, updateAudClientDto: UpdateAudClientDto) {
    return `This action updates a #${id} audClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} audClient`;
  }
}
