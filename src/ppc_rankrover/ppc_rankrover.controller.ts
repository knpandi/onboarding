import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PpcRankroverService } from './ppc_rankrover.service';
import { CreatePpcRankroverDto } from './dto/create-ppc_rankrover.dto';
import { UpdatePpcRankroverDto } from './dto/update-ppc_rankrover.dto';
import { PpcRankrover } from './entities/ppc_rankrover.entity';

@Controller('ppc-rankrover')
export class PpcRankroverController {
  constructor(private readonly ppcRankroverService: PpcRankroverService) {}

  @Post('create')
  create(@Body() createPpcRankroverDto: CreatePpcRankroverDto) {
    return this.ppcRankroverService.create(createPpcRankroverDto);
  }

  @Get()
  findAll() {
    return this.ppcRankroverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppcRankroverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpcRankroverDto: UpdatePpcRankroverDto) {
    return this.ppcRankroverService.update(+id, updatePpcRankroverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppcRankroverService.remove(+id);
  }
}
