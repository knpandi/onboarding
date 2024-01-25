import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeoRankroverService } from './seo__rankrover.service';
import { CreateSeoRankroverDto } from './dto/create-seo__rankrover.dto';
import { UpdateSeoRankroverDto } from './dto/update-seo__rankrover.dto';

@Controller('seo-rankrover')
export class SeoRankroverController {
  constructor(private readonly seoRankroverService: SeoRankroverService) {}

  @Post('create')
  create(@Body() createSeoRankroverDto: CreateSeoRankroverDto) {
    return this.seoRankroverService.create(createSeoRankroverDto);
  }

  @Get()
  findAll() {
    return this.seoRankroverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seoRankroverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeoRankroverDto: UpdateSeoRankroverDto) {
    return this.seoRankroverService.update(+id, updateSeoRankroverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seoRankroverService.remove(+id);
  }
}
