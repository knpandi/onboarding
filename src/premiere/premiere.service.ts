import { Injectable } from '@nestjs/common';
import { CreatePremiereDto } from './dto/create-premiere.dto';
import { UpdatePremiereDto } from './dto/update-premiere.dto';
import { DeleteResult, Repository, MongoRepository } from 'typeorm';
import { Premiere } from './entities/premiere.entity';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from '../shared/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';


export class PremiereService {
  constructor(@InjectRepository(Premiere) private premiereRepository: MongoRepository<Premiere>) { }
 async  create(createPremiereDto: CreatePremiereDto): Promise<ApiResponse<Premiere>> {
    let entity_premiere=new Premiere();

    entity_premiere.masterId=createPremiereDto.masterId;
    entity_premiere.childMasterId=createPremiereDto.childMasterId;
    entity_premiere.primary_contactname=createPremiereDto.primary_contactname;
    entity_premiere.primary_useremail=createPremiereDto.primary_useremail;
    entity_premiere.stageStatus=createPremiereDto.stageStatus;
    entity_premiere.primary_mobilenumber=createPremiereDto.primary_mobilenumber;
    entity_premiere.primary_position=createPremiereDto.primary_position;
    entity_premiere.reportingManagerEmail=createPremiereDto.reportingManagerEmail;
    entity_premiere.leadname=createPremiereDto.leadname;
    entity_premiere.leadEmail=createPremiereDto.leadEmail;
    entity_premiere.leadmobilenumber=createPremiereDto.leadmobilenumber;
    entity_premiere.businessname=createPremiereDto.businessname;
    entity_premiere.streetaddress1=createPremiereDto.streetaddress1;
    entity_premiere.businessownername=createPremiereDto.businessownername;
    entity_premiere.how_to_pronounce_names=createPremiereDto.how_to_pronounce_names;
    entity_premiere.opening_time=createPremiereDto.opening_time;
    entity_premiere.streetaddress2=createPremiereDto.streetaddress2;
    entity_premiere.time_zone=createPremiereDto.time_zone;
    entity_premiere.links_for_scheduling=createPremiereDto.links_for_scheduling;
    entity_premiere.cost_of_consultation=createPremiereDto.cost_of_consultation;
    entity_premiere.city1=createPremiereDto.city1;
    entity_premiere.schedule_existing_clients=createPremiereDto.schedule_existing_clients;
    entity_premiere.attempt_to_transfer=createPremiereDto.attempt_to_transfer;
    entity_premiere.number_of_transfer=createPremiereDto.number_of_transfer;
    entity_premiere.state1=createPremiereDto.state1;
    entity_premiere.time_of_transfer=createPremiereDto.time_of_transfer;
    entity_premiere.who_should_transfer=createPremiereDto.who_should_transfer;
    entity_premiere.services_available=createPremiereDto.services_available;
    entity_premiere.pincode1=createPremiereDto.pincode1;
    entity_premiere.if_outsideservices_offered=createPremiereDto.if_outsideservices_offered;
    entity_premiere.brief_business_summary=createPremiereDto.brief_business_summary;
    entity_premiere.Employee_list=createPremiereDto.Employee_list;
    entity_premiere.patients_find_office=createPremiereDto.patients_find_office;
    entity_premiere.seek_integrate_CRM=createPremiereDto.seek_integrate_CRM;
    entity_premiere.Additional_notes=createPremiereDto.Additional_notes;
    entity_premiere.websitelink=createPremiereDto.websitelink;
    entity_premiere.pdf=createPremiereDto.pdf;
    entity_premiere.subject=createPremiereDto.subject;
    entity_premiere.status=false;
  
    let Save_email_request= await axios.post(
    'http://localhost:3001/mailer/send-email',{
       to:entity_premiere.primary_useremail,
         subject:entity_premiere.subject,
         pdf:'src/File/premeireform.pdf',
         fileName:'premeireform.pdf',
          text:`<section style="width: auto; padding: 1.25rem; background-color: #F5F8FF;">
          <div style="max-width: 1280px; padding: 1rem 2rem; margin: 0 auto; display: flex; justify-content: center; align-items: center;">
         
            <div class=" ">
                <form> 
                <div style="width: 900px; border: 2px solid #E0E0E0; border-color: #E0E0E0; transition: border-color 0.5s; color: black; background-color: white; border-radius: 1rem; padding: 1.25rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); " onmouseover="this.style.borderColor='#ccc'" onmouseout="this.style.borderColor='#E0E0E0'">
        
                    <section style=" color: #666; /* font-family: ; */ position: relative; padding-top: 0.75rem; padding-bottom: 0.75rem;">                                                         
                            
                            <div style="width: 100%; max-width: 50%; text-align:center; padding-top: 0.5rem; padding-bottom: 0.5rem; margin: 0 auto; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                                <h1 style="font-size: 1rem; color: black;">
                                  <!-- Shedule an    -->
                                  <span style="font-weight: 600; color:black; font-family: sans-serif; text-decoration: underline;">
                                  Form Submission submitted from client
                                  </span>
                                </h1>                         
                            </div>
        
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Primary Contact:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.primary_contactname|| ''}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Primary UserEmail:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.primary_useremail|| ''}</span>
                                </h3>
                              </div>
                            </div>  
 
                            <div style="display: flex; flex-wrap: wrap;">
                            <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                              <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                <span style="font-weight: 600; color: black; font-family: sans-serif;">Primary MobileNumber:</span>
                              </h3>
                            </div>                    
                            <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                              <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.primary_mobilenumber|| ''}</span>
                              </h3>
                            </div>
                          </div>  
 
                          <div style="display: flex; flex-wrap: wrap;">
                          <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                            <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                              <span style="font-weight: 600; color: black; font-family: sans-serif;">Position:</span>
                            </h3>
                          </div>                    
                          <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                            <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                              <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.primary_position|| ''}</span>
                            </h3>
                          </div>
                        </div>  
 
                        <div style="display: flex; flex-wrap: wrap;">
                        <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                          <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                            <span style="font-weight: 600; color: black; font-family: sans-serif;">Leadname:</span>
                          </h3>
                        </div>                    
                        <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                          <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                            <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.leadname|| ''}</span>
                          </h3>
                        </div>
                      </div>  
 
                      <div style="display: flex; flex-wrap: wrap;">
                      <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                        <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                          <span style="font-weight: 600; color: black; font-family: sans-serif;">LeadEmail:</span>
                        </h3>
                      </div>                    
                      <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                        <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                          <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.leadEmail|| ''}</span>
                        </h3>
                      </div>
                    </div>  
 
                    <div style="display: flex; flex-wrap: wrap;">
                    <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                      <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                        <span style="font-weight: 600; color: black; font-family: sans-serif;">Leadmobilenumber:</span>
                      </h3>
                    </div>                    
                    <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                      <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                        <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.leadmobilenumber|| ''}</span>
                      </h3>
                    </div>
                  </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Business Name:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.businessname|| ''}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Street Address:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.streetaddress1|| ''}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Street Address 2 (optional):</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.streetaddress2 || ''}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">City:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.city1|| ''}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">State:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.state1|| ''}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Zip:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.pincode1|| ''}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Timeoftransfer:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.time_of_transfer|| ''}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Business Website (type n/a if none available):</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.websitelink||""}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Additionalnotes:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.Additional_notes|| ''}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Employeelist:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_premiere.Employee_list|| ''}</span>
                                </h3>
                              </div>
                            </div>   
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">linksforscheduling:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;"><img src="${entity_premiere.links_for_scheduling|| ''}" alt="image"></span>
                                </h3>
                              </div>
                            </div>  
                            </div>        
                      </section> 
                     
        
                </div>
            </form>
        
              
            </div>
          </div>
        </section>`,
        
    }
    );
    console.log(entity_premiere)
    let Save_entity_premiere=await this.premiereRepository.save(entity_premiere);
    let response={
      status: ApiResponseStatus.SUCCESS,
      data: Save_entity_premiere
    }
    return response;
  }

  findAll() {
    return `This action returns all premiere`;
  }

  findOne(id: number) {
    return `This action returns a #${id} premiere`;
  }

  update(id: number, updatePremiereDto: UpdatePremiereDto) {
    return `This action updates a #${id} premiere`;
  }

  remove(id: number) {
    return `This action removes a #${id} premiere`;
  }
}
