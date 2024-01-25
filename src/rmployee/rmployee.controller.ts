import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RmployeeService } from './rmployee.service';
import { CreateRmployeeDto } from './dto/create-rmployee.dto';
import { UpdateRmployeeDto } from './dto/update-rmployee.dto';
import { ApiResponse } from '../shared/common';
import { Rmployee } from './entities/rmployee.entity';


@Controller('rmployee')
export class RmployeeController {
  constructor(private readonly rmployeeService: RmployeeService) {}

  @Post('create')
  create(@Body() createRmployeeDto: CreateRmployeeDto) {
    return this.rmployeeService.create(createRmployeeDto);
  }

  @Get('findAll')
  findAll():Promise<ApiResponse<Rmployee[]>> {
    return this.rmployeeService.findAll();
  }

  @Get('findOne')
  findOne(@Body('masterId') id: string) {
    return this.rmployeeService.findOne(id);
  }

  @Patch('update')
  update(@Body() updateRmployeeDto: UpdateRmployeeDto) {
    return this.rmployeeService.update(updateRmployeeDto);
  }

  @Delete('remove')
  remove(@Body('masterId') id: string) {
    return this.rmployeeService.remove(id);
  }
}
