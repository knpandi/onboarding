import { Injectable } from '@nestjs/common';
import { CreateSeoRankroverDto } from './dto/create-seo__rankrover.dto';
import { UpdateSeoRankroverDto } from './dto/update-seo__rankrover.dto';
import { SeoRankrover } from './entities/seo__rankrover.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, MongoRepository } from 'typeorm';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from '../shared/common';

export class SeoRankroverService {
  constructor(@InjectRepository(SeoRankrover) private seoRankroverRepository: MongoRepository<SeoRankrover>) { }

  async  create(createSeoRankroverDto: CreateSeoRankroverDto): Promise<ApiResponse<SeoRankrover>>  {
    let entity_seorankover=new SeoRankrover();

    entity_seorankover.masterId=createSeoRankroverDto.masterId;
    entity_seorankover.childMasterId=createSeoRankroverDto.childMasterId;
    entity_seorankover.brief_description=createSeoRankroverDto.brief_description;
    // entity_seorankover.primary_useremail=createSeoRankroverDto.primary_useremail;
    // entity_seorankover.stageStatus=createSeoRankroverDto.stageStatus;
    entity_seorankover.main_services=createSeoRankroverDto.main_services;
    entity_seorankover.operation_market_location=createSeoRankroverDto.operation_market_location;
    entity_seorankover.operation_market_city=createSeoRankroverDto.operation_market_city;
    entity_seorankover.operation_market_state=createSeoRankroverDto.operation_market_state;
    entity_seorankover.operation_market_pincode=createSeoRankroverDto.operation_market_pincode;
    entity_seorankover.seasonal_trends=createSeoRankroverDto.seasonal_trends;
    entity_seorankover.ideal_customers=createSeoRankroverDto.ideal_customers;
    entity_seorankover.why_customers_choose=createSeoRankroverDto.why_customers_choose;
    entity_seorankover.what_makes_you_diff=createSeoRankroverDto.what_makes_you_diff;
    entity_seorankover.main_competitors=createSeoRankroverDto.main_competitors;
    entity_seorankover.main_competitors_url=createSeoRankroverDto.main_competitors_url;
    entity_seorankover.success_of_your_website=createSeoRankroverDto.success_of_your_website;
    entity_seorankover.does_not_convert=createSeoRankroverDto.does_not_convert;
    entity_seorankover.actions_most_imp=createSeoRankroverDto.actions_most_imp;
    entity_seorankover.invested_digitalmarketing_activities=createSeoRankroverDto.invested_digitalmarketing_activities;
    entity_seorankover.web_optimisedbyseo=createSeoRankroverDto.web_optimisedbyseo;
    entity_seorankover.optimisation_target_keys=createSeoRankroverDto.optimisation_target_keys;
    entity_seorankover.reporting_keyword_auditinfo=createSeoRankroverDto.reporting_keyword_auditinfo;
    entity_seorankover.pdf=createSeoRankroverDto.pdf;
    entity_seorankover.subject=createSeoRankroverDto.subject;
    // entity_seorankover.status=false;

    // let Save_email_request= await axios.post(
    // 'http://localhost:3001/mailer/send-email',{
    //    to:entity_seorankover.primary_useremail,
    //      subject:entity_seorankover.subject,
    //      text:`<div style="border:1px solid black"><h2 style=" background-color:black;text-align:center;color:white">Onboarding Form Data</h2>
    //       <p style="color:black">brief_description:${entity_seorankover.brief_description}</p>
    //      <p style="color:black">primary_useremail:${entity_seorankover.primary_useremail}</p>
    //      <p style="color:black">main_services:${entity_seorankover.main_services}</p>
    //      <p style="color:black">operation_market_location:${entity_seorankover.operation_market_location}</p>
    //      <p style="color:black">operation_market_city:${entity_seorankover.operation_market_city}</p>
    //      <p style="color:black">operation_market_state:${entity_seorankover.operation_market_state}</p>
    //      <p style="color:black">seasonal_trends:${entity_seorankover.seasonal_trends}</p>
    //      <p style="color:black">ideal_customers:${entity_seorankover.ideal_customers}</p>
    //      <p style="color:black">why_customers_choose:${entity_seorankover.why_customers_choose}</p>
    //      <p style="color:black">actions_most_imp:${entity_seorankover.actions_most_imp}</p>
    //      <p style="color:black">invested_digitalmarketing_activities:${entity_seorankover.invested_digitalmarketing_activities}</p>
    //      <p style="color:black">web_optimisedbyseo:${entity_seorankover.web_optimisedbyseo}</p>
    //      <p style="color:black">optimisation_target_keys:${entity_seorankover.optimisation_target_keys}</p><br></div>`,
    //      attachments: [
    //       {
            
    //         path:entity_seorankover.pdf,
    //       },
    //     ]
    // }
    // );
    // console.log(Save_email_request)
    let Save_entity_seorankover=await this.seoRankroverRepository.save(entity_seorankover);
    let response={
      status: ApiResponseStatus.SUCCESS,
      data: Save_entity_seorankover
    }
    return response;
  }

  findAll() {
    return `This action returns all seoRankrover`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seoRankrover`;
  }

  update(id: number, updateSeoRankroverDto: UpdateSeoRankroverDto) {
    return `This action updates a #${id} seoRankrover`;
  }

  remove(id: number) {
    return `This action removes a #${id} seoRankrover`;
  }
}
