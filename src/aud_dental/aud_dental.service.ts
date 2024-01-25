import { Injectable } from '@nestjs/common';
import { CreateAudDentalDto } from './dto/create-aud_dental.dto';
import { UpdateAudDentalDto } from './dto/update-aud_dental.dto';
import { AudDental } from './entities/aud_dental.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, MongoRepository } from 'typeorm';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from '../shared/common';

// @Injectable()
export class AudDentalService {
  constructor(@InjectRepository(AudDental) private audDentalRepository: MongoRepository<AudDental>) { }
   async create(createAudDentalDto: CreateAudDentalDto): Promise<ApiResponse<AudDental>> {
    let entity_auddental=new AudDental();

    entity_auddental.Denatl_childMasterId=createAudDentalDto.Dental_childMasterId;
    entity_auddental.Denatl_FirstName=createAudDentalDto.Dental_FirstName;
    entity_auddental.Denatl_LastName=createAudDentalDto.Dental_LastName;
    entity_auddental.Denatl_Email=createAudDentalDto.Dental_Email;
    entity_auddental.Denatl_CompanyName=createAudDentalDto.Dental_CompanyName;
    entity_auddental.Dental_ClientId=createAudDentalDto.Dental_ClientId;
    entity_auddental.Denatl_PaymentLink=createAudDentalDto.Dental_PaymentLink;

    let Save_entity_auddental=await this.audDentalRepository.save(entity_auddental);
    let response={
      status: ApiResponseStatus.SUCCESS,
      data: Save_entity_auddental
    }
    return response;
  }

  async findAll() {
    let find_audclient_details = await this.audDentalRepository.find()
    let responesData = []
    responesData.push({
      'find_audclient_details': find_audclient_details
    })
    let response = {
      status: ApiResponseStatus.SUCCESS,
      date: responesData
    }
    return response;
  }

   async findOne(id: string): Promise<ApiResponse<AudDental>>  {
    let find_one_audclient = await this.audDentalRepository.findOne({
      where: { masterId: id },
    });
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: find_one_audclient,
    }
    return response;
  }

   async update(updateAudDentalDto: UpdateAudDentalDto) {
    let saved_audclient = await this.audDentalRepository.update(
      { masterId: updateAudDentalDto.masterId },
      updateAudDentalDto,
    );
    
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_audclient,
    }
    return response;
  }

  async remove(id: string) {
    try {
      const filter = {
        masterId: id
      };
     let find_one_rmployee = await this.audDentalRepository.deleteMany(filter);
     let response = {
      status: ApiResponseStatus.SUCCESS,
      data: find_one_rmployee,
    }
    return response;
    } catch (error) {
      console.error('Error deleting documents', error);
      throw error;
    }
  }
}
