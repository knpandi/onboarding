import { Injectable } from '@nestjs/common';
import { CreatePpcRankroverDto } from './dto/create-ppc_rankrover.dto';
import { UpdatePpcRankroverDto } from './dto/update-ppc_rankrover.dto';
import { DeleteResult, Repository, MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PpcRankrover } from './entities/ppc_rankrover.entity';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from '../shared/common';
import axios from 'axios';


export class PpcRankroverService {
  constructor(@InjectRepository(PpcRankrover) private ppcRankroverRepository: MongoRepository<PpcRankrover>) { }


  async  create(createPpcRankroverDto: CreatePpcRankroverDto): Promise<ApiResponse<PpcRankrover>> {
    let entity_ppcrankrover=new PpcRankrover();

    entity_ppcrankrover.biling_email=createPpcRankroverDto.biling_email;
    entity_ppcrankrover.oms_manager_name=createPpcRankroverDto.oms_manager_name;
    entity_ppcrankrover.software=createPpcRankroverDto.software;
    entity_ppcrankrover.masterId=createPpcRankroverDto.masterId;
    entity_ppcrankrover.childMasterId=createPpcRankroverDto.childMasterId;
    entity_ppcrankrover.primary_contactname=createPpcRankroverDto.primary_contactname;
    entity_ppcrankrover.primary_useremail=createPpcRankroverDto.primary_useremail;
    entity_ppcrankrover.stageStatus=createPpcRankroverDto.stageStatus;
    entity_ppcrankrover.primary_mobilenumber=createPpcRankroverDto.primary_mobilenumber;
    entity_ppcrankrover.primary_position=createPpcRankroverDto.primary_position;
    entity_ppcrankrover.reportingManagerEmail=createPpcRankroverDto.reportingManagerEmail;
    entity_ppcrankrover.leadname=createPpcRankroverDto.leadname;
    entity_ppcrankrover.leadEmail=createPpcRankroverDto.leadEmail;
    entity_ppcrankrover.leadmobilenumber=createPpcRankroverDto.leadmobilenumber;
    entity_ppcrankrover.businessname=createPpcRankroverDto.businessname;
    entity_ppcrankrover.streetaddress1=createPpcRankroverDto.streetaddress1;
    entity_ppcrankrover.streetaddress_location_1=createPpcRankroverDto.streetaddress_location_1;
    entity_ppcrankrover.streetaddress_location_2=createPpcRankroverDto.streetaddress_location_2;
    entity_ppcrankrover.streetaddress_location_3=createPpcRankroverDto.streetaddress_location_3;
    entity_ppcrankrover.streetaddress2=createPpcRankroverDto.streetaddress2;
    entity_ppcrankrover.streetaddress1_location_1=createPpcRankroverDto.streetaddress1_location_1;
    entity_ppcrankrover.streetaddress1_location_2=createPpcRankroverDto.streetaddress1_location_2;
    entity_ppcrankrover.streetaddress1_location_3=createPpcRankroverDto.streetaddress1_location_3;
    entity_ppcrankrover.city1=createPpcRankroverDto.city1;
    entity_ppcrankrover.City_location_1=createPpcRankroverDto.City_location_1;
    entity_ppcrankrover.City_location_2=createPpcRankroverDto.City_location_2;
    entity_ppcrankrover.City_location_3=createPpcRankroverDto.City_location_3;
    entity_ppcrankrover.state1=createPpcRankroverDto.state1;
    entity_ppcrankrover.State_location_1=createPpcRankroverDto.State_location_1;
    entity_ppcrankrover.State_location_2=createPpcRankroverDto.State_location_2;
    entity_ppcrankrover.State_location_3=createPpcRankroverDto.State_location_3;
    entity_ppcrankrover.pincode1=createPpcRankroverDto.pincode1;
    entity_ppcrankrover.Zip_location_1=createPpcRankroverDto.Zip_location_1;
    entity_ppcrankrover.Zip_location_2=createPpcRankroverDto.Zip_location_2;
    entity_ppcrankrover.Zip_location_3=createPpcRankroverDto.Zip_location_3;
    entity_ppcrankrover.number_location_1=createPpcRankroverDto.number_location_1;
    entity_ppcrankrover.number_location_2=createPpcRankroverDto.number_location_2;
    entity_ppcrankrover.number_location_3=createPpcRankroverDto.number_location_3;
    entity_ppcrankrover.websitelink=createPpcRankroverDto.websitelink;
    entity_ppcrankrover.domain=createPpcRankroverDto.domain;
    entity_ppcrankrover.googleaccount=createPpcRankroverDto.googleaccount;
    entity_ppcrankrover.uploadimage=createPpcRankroverDto.uploadimage;
    entity_ppcrankrover.subject=createPpcRankroverDto.subject;
    entity_ppcrankrover.status=false;

    let pdfval='';
    let fileNamevalue='';
   if(createPpcRankroverDto.formtype=="audiologyPPC"){
     pdfval='src/File/audiologyPPC.pdf'
     fileNamevalue='audiologyPPC.pdf'
   }else if(createPpcRankroverDto.formtype=="dentalproPPC"){
     pdfval='src/File/dentaproppC.pdf'
     fileNamevalue='dentaproppC.pdf'
   }else if(createPpcRankroverDto.formtype=="qualityconvertformPPC"){
     pdfval='src/File/qualiconvertPPC.pdf'
     fileNamevalue='qualiconvertPPC.pdf'
   }
   else if(createPpcRankroverDto.formtype=="WellGenformPPC"){
     pdfval='src/File/wellgenproPPc.pdf'
     fileNamevalue='wellgenproPPc.pdf'
   }
  else if(createPpcRankroverDto.formtype=="rankoverformPPC"){
   pdfval='src/File/rankroverPPc.pdf'
   fileNamevalue='rankroverPPc.pdf'
  }

    let Save_email_request= await axios.post(
    'http://localhost:3001/mailer/send-email',{
       to:entity_ppcrankrover.primary_useremail,
         subject:entity_ppcrankrover.subject,
         pdf:'src/File/rankroverPPc.pdf',
         fileName:'rankroverPPc.pdf',
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
                                 <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.primary_contactname|| ''}</span>
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
                                 <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.primary_useremail|| ''}</span>
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
                               <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.primary_mobilenumber|| ''}</span>
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
                             <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.primary_position|| ''}</span>
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
                           <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.leadname|| ''}</span>
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
                         <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.leadEmail|| ''}</span>
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
                       <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.leadmobilenumber|| ''}</span>
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
                                 <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.businessname|| ''}</span>
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
                                 <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.streetaddress1|| ''}</span>
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
                                 <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.streetaddress2 || ''}</span>
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
                                 <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.city1|| ''}</span>
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
                                 <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.state1|| ''}</span>
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
                                 <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.pincode1|| ''}</span>
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
                                 <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.websitelink||""}</span>
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
                                 <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.domain|| ''}</span>
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
                                 <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;">${entity_ppcrankrover.googleaccount|| ''}</span>
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
                                 <span style="font-weight: 500; color: #4B5563; font-family: sans-serif;"><img src="${entity_ppcrankrover.uploadimage|| ''}" alt="image"></span>
                               </h3>
                             </div>
                           </div>  
                           </div>        
                     </section> 
                    
       
               </div>
           </form>
       
             
           </div>
         </div>
       </section>`
    }
    );
    
    let Save_entity_ppcrankrover=await this.ppcRankroverRepository.save(entity_ppcrankrover);
    let response={
      status: ApiResponseStatus.SUCCESS,
      data: Save_entity_ppcrankrover
    }
    return response;
  }

  findAll() {
    return `This action returns all ppcRankrover`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ppcRankrover`;
  }

  update(id: number, updatePpcRankroverDto: UpdatePpcRankroverDto) {
    return `This action updates a #${id} ppcRankrover`;
  }

  remove(id: number) {
    return `This action removes a #${id} ppcRankrover`;
  }
}
