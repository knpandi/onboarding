import { Injectable } from '@nestjs/common';
import { CreateRmployeeDto } from './dto/create-rmployee.dto';
import { DeleteResult, Repository, MongoRepository } from 'typeorm';
import { UpdateRmployeeDto } from './dto/update-rmployee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rmployee } from './entities/rmployee.entity';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from '../shared/common';
import axios from 'axios';



// @Injectable()
export class RmployeeService {
  constructor(@InjectRepository(Rmployee) private rmployeeRepository: MongoRepository<Rmployee>) { }
  async create(createRmployeeDto: CreateRmployeeDto): Promise<ApiResponse<Rmployee>> {
    let entity_rmployee=new Rmployee();

    entity_rmployee.masterId=createRmployeeDto.masterId;
    entity_rmployee.childMasterId=createRmployeeDto.childMasterId;
    entity_rmployee.primary_contactname=createRmployeeDto.primary_contactname;
    entity_rmployee.primary_useremail=createRmployeeDto.primary_useremail;
    entity_rmployee.stageStatus=createRmployeeDto.stageStatus;
    entity_rmployee.primary_mobilenumber=createRmployeeDto.primary_mobilenumber;
    entity_rmployee.primary_position=createRmployeeDto.primary_position;
    entity_rmployee.reportingManagerEmail=createRmployeeDto.reportingManagerEmail;
    entity_rmployee.leadname=createRmployeeDto.leadname;
    entity_rmployee.leadEmail=createRmployeeDto.leadEmail;
    entity_rmployee.leadmobilenumber=createRmployeeDto.leadmobilenumber;
    entity_rmployee.businessname=createRmployeeDto.businessname;
    entity_rmployee.streetaddress1=createRmployeeDto.streetaddress1;
    entity_rmployee.streetaddress_location_1=createRmployeeDto.streetaddress_location_1;
    entity_rmployee.streetaddress_location_2=createRmployeeDto.streetaddress_location_2;
    entity_rmployee.streetaddress_location_3=createRmployeeDto.streetaddress_location_3;
    entity_rmployee.streetaddress2=createRmployeeDto.streetaddress2;
    entity_rmployee.streetaddress1_location_1=createRmployeeDto.streetaddress1_location_1;
    entity_rmployee.streetaddress1_location_2=createRmployeeDto.streetaddress1_location_2;
    entity_rmployee.streetaddress1_location_3=createRmployeeDto.streetaddress1_location_3;
    entity_rmployee.city1=createRmployeeDto.city1;
    entity_rmployee.City_location_1=createRmployeeDto.City_location_1;
    entity_rmployee.City_location_2=createRmployeeDto.City_location_2;
    entity_rmployee.City_location_3=createRmployeeDto.City_location_3;
    entity_rmployee.state1=createRmployeeDto.state1;
    entity_rmployee.State_location_1=createRmployeeDto.State_location_1;
    entity_rmployee.State_location_2=createRmployeeDto.State_location_2;
    entity_rmployee.State_location_3=createRmployeeDto.State_location_3;
    entity_rmployee.pincode1=createRmployeeDto.pincode1;
    entity_rmployee.Zip_location_1=createRmployeeDto.Zip_location_1;
    entity_rmployee.Zip_location_2=createRmployeeDto.Zip_location_2;
    entity_rmployee.Zip_location_3=createRmployeeDto.Zip_location_3;
    entity_rmployee.number_location_1=createRmployeeDto.number_location_1;
    entity_rmployee.number_location_2=createRmployeeDto.number_location_2;
    entity_rmployee.number_location_3=createRmployeeDto.number_location_3;
    entity_rmployee.websitelink=createRmployeeDto.websitelink;
    entity_rmployee.domain=createRmployeeDto.domain;
    entity_rmployee.googleaccount=createRmployeeDto.googleaccount;
    entity_rmployee.uploadimage=createRmployeeDto.uploadimage;
    entity_rmployee.thirdphoneNo=createRmployeeDto.thirdphoneNo;
    entity_rmployee.pdf=createRmployeeDto.pdf;
    entity_rmployee.subject=createRmployeeDto.subject;
    entity_rmployee.status=false;

    let pdfval='';
    let fileNamevalue='';
   if(createRmployeeDto.formtype=="audiology"){
     pdfval='src/File/audiologyform.pdf'
     fileNamevalue='audiologyform.pdf'
   }else if(createRmployeeDto.formtype=="dentalpro"){
     pdfval='src/File/dentalproform.pdf'
     fileNamevalue='dentalproform.pdf'
   }else if(createRmployeeDto.formtype=="qualityconvertform"){
     pdfval='src/File/qualiconvertform.pdf'
     fileNamevalue='qualiconvertform.pdf'
   }
   else if(createRmployeeDto.formtype=="WellGenform"){
     pdfval='src/File/wellgenpro_form.pdf'
     fileNamevalue='wellgenpro_form.pdf'
   }
  else if(createRmployeeDto.formtype=="rankroverform"){
   pdfval='src/File/rankrover_form.pdf'
   fileNamevalue='rankrover_form.pdf'
  }


    let Save_email_request= await axios.post(
    'http://localhost:3001/mailer/send-email',{
       to:entity_rmployee.primary_useremail,
         subject:entity_rmployee.subject,
         pdf:pdfval,
         fileName:fileNamevalue,

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
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.primary_contactname|| ''}</span>
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
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.primary_useremail|| ''}</span>
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
                                <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.primary_mobilenumber|| ''}</span>
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
                              <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.primary_position|| ''}</span>
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
                            <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.leadname|| ''}</span>
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
                          <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.leadEmail|| ''}</span>
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
                        <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.leadmobilenumber|| ''}</span>
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
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.businessname|| ''}</span>
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
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.streetaddress1|| ''}</span>
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
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.streetaddress2 || ''}</span>
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
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.city1|| ''}</span>
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
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.state1|| ''}</span>
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
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.pincode1|| ''}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Business Phone:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.thirdphoneNo|| ''}</span>
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
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.websitelink||""}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Domain & Google My Business What hosting provider currently hosts your domain (GoDaddy, DreamHost, etc):</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.domain|| ''}</span>
                                </h3>
                              </div>
                            </div>  
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">What is the email that is associated with your Google Account?:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_rmployee.googleaccount|| ''}</span>
                                </h3>
                              </div>
                            </div>   
                            <div style="display: flex; flex-wrap: wrap;">
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 600; color: black; font-family: sans-serif;">Logo:</span>
                                </h3>
                              </div>                    
                              <div style="padding: 0.5rem; width: 100%; max-width: 33.333333%;">
                                <h3 style="margin-bottom: 0.5rem; display: flex; font-size: 0.9rem;">
                                  <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;"><img src="${entity_rmployee.uploadimage|| ''}" alt="image"></span>
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
    console.log(entity_rmployee)
    let Save_entity_rmployee=await this.rmployeeRepository.save(entity_rmployee);
    let response={
      status: ApiResponseStatus.SUCCESS,
      data: Save_entity_rmployee
    }
    return response;
  }

     async findAll() {
    let find_rmplooye_details = await this.rmployeeRepository.find()
    let responesData = []
    responesData.push({
      'find_rmplooye_details': find_rmplooye_details
    })
    let response = {
      status: ApiResponseStatus.SUCCESS,
      date: responesData
    }
    return response;
   
  }
  
    async findOne(id: string): Promise<ApiResponse<Rmployee>> {
      let find_one_rmployee = await this.rmployeeRepository.findOne({
        where: { masterId: id },
      });
      let response = {
        status: ApiResponseStatus.SUCCESS,
        data: find_one_rmployee,
      }
      return response;
  }

   async update(updateRmployeeDto: UpdateRmployeeDto) {
    let saved_rmployee = await this.rmployeeRepository.update(
      { masterId: updateRmployeeDto.masterId },
      updateRmployeeDto,
    );
    
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_rmployee,
    }
    return response;
  }

  async remove(id: string) {
    try {
      const filter = {
        masterId: id
      };
     let find_one_rmployee = await this.rmployeeRepository.deleteMany(filter);
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
