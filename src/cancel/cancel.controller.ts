import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CancelService } from './cancel.service';
import { CreateCancelDto } from './dto/create-cancel.dto';
import { UpdateCancelDto } from './dto/update-cancel.dto';

@Controller('cancel')
export class CancelController {
  constructor(private readonly cancelService: CancelService) {}

  @Post('create')
  create(@Body() createCancelDto: CreateCancelDto) {
    return this.cancelService.create(createCancelDto);
  }

  @Get()
  findAll() {
    return this.cancelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cancelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCancelDto: UpdateCancelDto) {
    return this.cancelService.update(+id, updateCancelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancelService.remove(+id);
  }
}
