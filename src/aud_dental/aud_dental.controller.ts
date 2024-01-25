import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AudDentalService } from './aud_dental.service';
import { CreateAudDentalDto } from './dto/create-aud_dental.dto';
import { UpdateAudDentalDto } from './dto/update-aud_dental.dto';
import { ApiResponse } from 'src/shared/common';
import { AudClient } from 'src/aud_client/entities/aud_client.entity';

@Controller('aud-dental')
export class AudDentalController {
  constructor(private readonly audDentalService: AudDentalService) {}

  @Post()
  create(@Body() createAudDentalDto: CreateAudDentalDto) {
    return this.audDentalService.create(createAudDentalDto);
  }

  @Get('findAll')
  findAll():Promise<ApiResponse<AudClient[]>> {
    return this.audDentalService.findAll();
  }

  @Get('findOne')
  findOne(@Body('masterId') id: string) {
    return this.audDentalService.findOne(id);
  }

  @Patch('update')
  update(@Body() updateAudDentalDto: UpdateAudDentalDto) {
    return this.audDentalService.update(updateAudDentalDto);
  }

  @Delete('remove')
  remove(@Body('masterId') id: string) {
    return this.audDentalService.remove(id);
  }
}
