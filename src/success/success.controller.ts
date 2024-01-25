import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuccessService } from './success.service';
import { CreateSuccessDto } from './dto/create-success.dto';
import { UpdateSuccessDto } from './dto/update-success.dto';

@Controller('success')
export class SuccessController {
  constructor(private readonly successService: SuccessService) {}

  @Post('create')
  create(@Body() createSuccessDto: CreateSuccessDto) {
    return this.successService.create(createSuccessDto);
  }

  @Get()
  findAll() {
    return this.successService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.successService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuccessDto: UpdateSuccessDto) {
    return this.successService.update(+id, updateSuccessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.successService.remove(+id);
  }
}
