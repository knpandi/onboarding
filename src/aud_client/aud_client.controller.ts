import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AudClientService } from './aud_client.service';
import { CreateAudClientDto } from './dto/create-aud_client.dto';
import { UpdateAudClientDto } from './dto/update-aud_client.dto';

@Controller('aud-client')
export class AudClientController {
  constructor(private readonly audClientService: AudClientService) {}

  @Post()
  create(@Body() createAudClientDto: CreateAudClientDto) {
    return this.audClientService.create(createAudClientDto);
  }

  @Get()
  findAll() {
    return this.audClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audClientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAudClientDto: UpdateAudClientDto) {
    return this.audClientService.update(+id, updateAudClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audClientService.remove(+id);
  }
}
