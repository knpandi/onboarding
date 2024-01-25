import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PremiereService } from './premiere.service';
import { CreatePremiereDto } from './dto/create-premiere.dto';
import { UpdatePremiereDto } from './dto/update-premiere.dto';

@Controller('premiere')
export class PremiereController {
  constructor(private readonly premiereService: PremiereService) {}

  @Post('create')
  create(@Body() createPremiereDto: CreatePremiereDto) {
    return this.premiereService.create(createPremiereDto);
  }

  @Get()
  findAll() {
    return this.premiereService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.premiereService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePremiereDto: UpdatePremiereDto) {
    return this.premiereService.update(+id, updatePremiereDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.premiereService.remove(+id);
  }
}
